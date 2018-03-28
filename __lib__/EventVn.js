import {Div} from '../index.js';

export class EventVn extends Div
{
    init() {
        this.div1 = document.createElement('div');
        this.div2 = document.createElement('div');

        this.div1.html`hello world`;
        this.div2.html`Gap Tree`;
    }

    render() {
        this.elem.html`
            ${this.div1}
            <ul class="${this.data.style}">
                <li>${this.data.k1}</li>
                <li>${this.data.k2}</li>
            </ul>
            <input type="text" name="title" value="${this.data.title}">
            <textarea name="desc">${this.data.desc}</textarea>
            ${this.div2}
        `;
    }

    startup() {
        this.elem.oneElem('[name="title"]')
            .on('change', (e) => this.onChange(e))
            .on('click', (e) => this.onClick(e));
    }

    onUpdate() {
        this.elem.addClass('changed');

        this.elem.allElem('li').forEach(
            elem => elem.innerHTML = 'changed'
        );

        this.elem.oneElem('[name="title"]').setVal(this.data.title);
        this.elem.oneElem('[name="desc"]').setVal(this.data.desc);
    }

    onChange(evt) {
        throw new Error(evt);
    }

    onClick(evt) {
        throw new Error(evt);
    }
}
