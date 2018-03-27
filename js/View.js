import {createElem} from 'gap-front-web';

export class View {
    static get is() { throw new Error('get is must be implemented'); }

    get elem() {
        this._elem = this._elem || createElem(this.is);
        return this._elem;
    }

    init() {}

    render() {}
}
