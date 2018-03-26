import {Div} from '../index.js';
import {Event} from 'gap-front-event';

export class EventVn extends Div
{
    init() {
        this.div1 = new Div();
        this.div2 = new Div();

        this.div1.html`hello world`;
        this.div2.html`Gap Tree`;

        this.inputEvent = (new Event())
            .on('change', (e) => this.onChange(e))
            .on('click', (e) => this.onClick(e));

        this.buildHtml();
    }

    onUpdate() {
        this.addClass('changed');

        this.allVn('li').forEach(vnode => vnode.html`changed`);

        this.oneVn('[name="title"]').setVal(this.state.title);
        this.oneVn('[name="desc"]').setVal(this.state.desc);
    }

    onChange(evt) {
        throw new Error(evt);
    }

    onClick(evt) {
        throw new Error(evt);
    }

    buildHtml() {
        this.html`
            ${this.div1}
            <ul class="${this.state.style}">
                <li>${this.state.k1}</li>
                <li>${this.state.k2}</li>
            </ul>
            <input ${this.inputEvent} type="text" name="title" value="${this.state.title}">
            <textarea name="desc">${this.state.desc}</textarea>
            ${this.div2}
        `;
    }
}
