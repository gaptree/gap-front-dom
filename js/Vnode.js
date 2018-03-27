import {ElemAdapter} from './elem/ElemAdapter.js';

let VnIdIndex = 1;

export class Vnode extends ElemAdapter {
    constructor(data) {
        super();

        this.data = {};
        this.vns = {};
        this._vnId = 'gvn' + VnIdIndex++;

        this.load(data);
        this.init();
    }

    // getter & setter
    get vnId() {
        return this._vnId;
    }

    // public function
    load(data) {
        Object.assign(this.data, data);
        return this;
    }

    update(data) {
        this.load(data);
        this.onUpdate();
    }

    insert(name, vnode) {
        this.vns[name] = vnode;
        return vnode.elem;
    }

    getVn(name) {
        return this.vns[name] || null;
    }

    // to implement
    init() {}
    onUpdate() {}
}
