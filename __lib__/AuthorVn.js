import {Vnode} from '../index.js';

export class AuthorVn extends Vnode
{
    static get tag() { return 'p'; }

    onUpdate() {
        this.render();
    }

    render() {
        this.elem.html`
            <strong>${this.data.name}</strong>
        `;
    }
}
