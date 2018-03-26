import {Div} from '../index.js';

export class OnUpdateVn extends Div
{
    init() {
        this.div1 = new Div();
        this.div2 = new Div();

        this.div1.html`hello world`;
        this.div2.html`Gap Tree`;

        this.buildHtml();
    }

    onUpdate() {
        this.addClass('changed');

        this.allVn('li').forEach(vnode => vnode.html`changed`);

        this.oneVn('[name="title"]').setVal(this.state.title);
        this.oneVn('[name="desc"]').setVal(this.state.desc);
    }

    buildHtml() {
        this.html`
            ${this.div1}
            <ul class="${this.state.style}">
                <li>${this.state.k1}</li>
                <li>${this.state.k2}</li>
            </ul>
            <input type="text" name="title" value="${this.state.title}">
            <textarea name="desc">${this.state.desc}</textarea>
            ${this.div2}
        `;
    }
}
