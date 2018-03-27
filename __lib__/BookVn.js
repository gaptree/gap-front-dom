import {Div} from '../index.js';
import {AuthorVn} from './AuthorVn.js';

export class BookVn extends Div
{
    init() {
        this.elem.html`
            <div class="user">
                ${this.insert('author', new AuthorVn({name: 'miao'}))}
            </div>
        `;
    }

    onUpdate() {
        this.getVn('author').update({name: 'haha'});
    }
}
