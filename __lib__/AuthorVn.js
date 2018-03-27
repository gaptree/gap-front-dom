import {Vnode} from '../index.js';

export class AuthorVn extends Vnode
{
    static get tag() { return 'p'; }

    init() {
        this.buildHtml();
    }

    onUpdate() {
        this.buildHtml();
    }

    buildHtml() {
        this.elem.html`
            <strong>${this.data.name}</strong>
        `;
    }
}
