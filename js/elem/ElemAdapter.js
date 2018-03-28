import {createElem} from './createElem.js';

export class ElemAdapter {
    static get tag() {
        return this._tag || null;
    }

    static set tag(tagName) {
        this._tag = tagName;
    }

    get elem() {
        this._elem = this._elem || createElem(this.constructor.tag);
        return this._elem;
    }

    /*
    set elem(elem) {
        this._elem = elem;
    }
    */

    append(item) {
        if (!(item instanceof ElemAdapter)) {
            throw new Error('Can only append ElemAdapter');
        }
        this.elem.appendChild(item.elem);
    }
}
