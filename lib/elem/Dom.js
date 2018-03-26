import {createElem} from 'gap-front-web';

let domIndex = 1;

export class Dom {
    constructor(data) {
        this.children = {};
        this.domId = 'dom' + domIndex++;
        this.elem = this.buildElem();
        this.state = {};

        this.load(data);
        this.init();
    }

    getDomId() {
        return this.domId;
    }

    load(data) {
        if (data) {
            Object.assign(this.state, data);
        }
    }

    update(data) {
        this.load(data);
        this.render();
    }

    html(literalSections, ...substs) {
        const elem = this.getElem();
        elem.innerHTML = this.tpl(literalSections, ...substs);

        elem.allElem('.dom-holder').forEach(holder => {
            const domId = holder.getAttribute('data-dom-id');
            if (!domId) {
                throw new Error('data-dom-id cannot be empty');
            }

            const child = this.children[domId];
            if (!child) {
                throw new Error('cannot find child: ' + domId);
            }

            holder.replaceWith(child.getElem());
        });
    }

    tpl(sections, ...sets) {
        const raw = sections.raw;
        let result = '';

        sets.forEach((set, i) => {
            const lit = raw[i];

            if (Array.isArray(set)) {
                set = set.join('');
            }

            if (set instanceof Dom) {
                set = this.createDomHolder(set);
            }

            if (!set) {
                set = '';
            }

            result += lit;
            result += set;
        });

        result += raw[raw.length - 1];
        return result.replace(/\s+/g, ' ').trim();
    }

    createDomHolder(child) {
        const childDomId = child.getDomId();
        this.children[childDomId] = child;

        return this.tpl`
            <span class="dom-holder" data-dom-id="${childDomId}"></span>
        `;
    }

    getTagName() {
        return this.getElem().tagName;
    }

    createElem(tag) {
        return createElem(tag);
    }

    getElem() {
        return this.elem;
    }

    append(elem) {
        if (elem instanceof Dom) {
            elem = elem.getElem();
        }

        if (!(elem instanceof HTMLElement)) {
            throw new Error('Can append Dom & HTMLElement');
        }

        this.getElem().appendChild(elem);
    }

    // abstract
    buildElem() {
        throw new Error('buildElem must be implemented');
    }

    init() {}

    render() {}
}
