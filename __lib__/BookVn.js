import {Div} from '../index.js';
import {AuthorVn} from './AuthorVn.js';

export class BookVn extends Div
{
    init() {
        this.elem.html`
            <div class="user">
                ${this.vn('author', AuthorVn, {name: 'miao'})}
            </div>
        `;
    }

    onUpdate() {
        this.get('author').update({name: 'haha'});
    }
}
