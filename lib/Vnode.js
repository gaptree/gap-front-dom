import {ElemAdapter} from './elem/ElemAdapter.js';
import {createVn} from './createVn.js';
import {Event} from 'gap-front-event';

let vnodeIdIndex = 1;

export class Vnode extends ElemAdapter {
    constructor(data, elem) {
        super();

        this.state = {};
        this.children = {};
        this.eventSet = {};

        this.oneVnSet = {};
        this.allVnSet = {};

        this._vnodeId = 'vnode-' + vnodeIdIndex++;
        this._elem = elem;

        this.load(data);
        this.init();
    }

    // getter & setter
    get vnodeId() {
        return this._vnodeId;
    }

    // public function
    append(vnode) {
        if (!(vnode instanceof Vnode)) {
            throw new Error('Can only append Vnode');
        }
        this.elem.appendChild(vnode.elem);
    }

    load(data) {
        if (data) {
            Object.assign(this.state, data);
        }
    }

    update(data) {
        this.load(data);
        this.onUpdate();
    }

    html(strs, ...items) {
        this.elem.innerHTML = this.tpl(strs, ...items);

        this.elem.allElem('.vholder').forEach(holder => {
            holder.replaceWith(this.children[holder.value].elem);
        });

        this.loadEvent();
    }

    createVnHolder(child) {
        this.children[child.vnodeId] = child;
        return this.tpl`
            <input type="hidden" class="vholder" value="${child.vnodeId}">
        `;
    }

    createEventAttr(event) {
        this._eventIdIndex = this._eventIdIndex || 1;
        const eventId = 'vne' + this._eventIdIndex;
        this._eventIdIndex++;

        this.eventSet[eventId] = event;
        return 'data-event="' + eventId + '"';
    }

    loadEvent() {
        this.elem.allElem('[data-event]').forEach(elem => {
            const eventId = elem.getAttribute('data-event');
            const event = this.eventSet[eventId];

            for (const type in event.listeners) {
                if (event.listeners.hasOwnProperty(type)) {
                    event.listeners[type].forEach(handler => {
                        elem.on(type, handler.fn);
                    });
                }
            }
        });
    }

    tpl(strs, ...items) {
        const raw = strs.raw;
        let res = '';

        items.forEach((item, index) => {
            const str = raw[index];
            if (Array.isArray(item)) {
                item = item.join('');
            }
            if (item instanceof Vnode) {
                item = this.createVnHolder(item);
            }

            if (item instanceof Event) {
                item = this.createEventAttr(item);
            }

            if (!item) {
                item = '';
            }

            res += str;
            res += item;
        });

        res += raw[raw.length - 1];
        return res.replace(/\s+/g, ' ').trim();
    }

    allVn(query) {
        if (this.allVnSet.hasOwnProperty(query)) {
            return this.allVnSet[query];
        }

        this.allVnSet[query] = this.elem.allElem(query).map(
            elem => createVn(elem)
        );
        return this.allVnSet[query];
    }

    oneVn(query) {
        if (this.oneVnSet.hasOwnProperty(query)) {
            return this.oneVnSet[query];
        }

        this.oneVnSet[query] = createVn(this.elem.oneElem(query));
        return this.oneVnSet[query];
    }

    findAllVn(query) {
        delete this.allVnSet[query];
        return this.allVn(query);
    }

    findOneVn(query) {
        delete this.oneVnSet[query];
        return this.oneVn(query);
    }

    // to implement
    init() {}
    onUpdate() {}
}