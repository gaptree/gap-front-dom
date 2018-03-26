import {createElem} from './createElem.js';
import {setElemVal} from './setElemVal.js';

export class ElemAdapter {
    get tag() {
        if (this._tag) {
            return this._tag;
        }
        throw new Error('tag is empty');
    }

    set tag(tagName) {
        this._tag = tagName;
    }

    get elem() {
        this._elem = this._elem || createElem(this.tag);
        return this._elem;
    }

    setVal(val) {
        setElemVal(this.elem, val);
        return this;
    }

    getVal() {
        return this.elem.value;
    }

    setAttr(key, val) {
        this.elem.setAttribute(key, val);
        return this;
    }

    getAttr(key) {
        return this.elem.getAttribute(key);
    }

    remove() {
        this.elem.remove();
    }

    show() {
        this.elem.show();
    }

    hide() {
        this.elem.hide();
    }

    on(types, handler, useCapture) {
        this.elem.on(types, handler, useCapture);
    }

    stop() {
        this.elem.stop();
    }

    cancel() {
        this.elem.cancel;
    }

    hasClass(className) {
        this.elem.hasClass(className);
    }

    removeClass(className) {
        this.elem.removeClass(className);
    }

    addClass(className) {
        this.elem.addClass(className);
    }

    toggleClass(className) {
        this.toggleClass(className);
    }
}
