import {ElemAdapter} from './elem/ElemAdapter.js';

let VnIdIndex = 1;

export class Vnode extends ElemAdapter {
    constructor(data) {
        super();

        this.data = {};
        this.map = {};
        this._vnId = 'gvn' + VnIdIndex++;

        this._load(data);
        this.init();
        this.render();
        this._regElem();
        this._mapping();
        this.startup();
    }

    // protected functions
    _load(data) {
        Object.assign(this.data, data);
        return this;
    }

    _regElem() {
        this.elem.update = (data) => this.update(data);
    }

    _mapping() {
        this.elem.allElem(`[vn="${this.vnId}"]`).forEach(elem => {
            const key = elem.getAttribute('key');

            if (this.map[key]) {
                elem.replace(this.map[key]);
                return;
            }

            this.map[key] = elem;
        });
    }

    d(key) {
        return `vn="${this.vnId}" key="${key}"`;
    }

    vn(key, vnodeClass, params) {
        const html = `<input type="hidden" ${this.d(key)}>`;

        if (this.map.hasOwnProperty(key)) {
            return html;
        }

        this.map[key] = (new vnodeClass(params)).elem;
        return html;
    }

    get(key) {
        return this.map[key];
    }

    // getter & setter
    get vnId() {
        return this._vnId;
    }

    // public function
    update(data) {
        this._load(data);
        this.onUpdate();
    }

    // to implement
    init() {}
    render() {}
    startup() {}
    onUpdate() {}
}
