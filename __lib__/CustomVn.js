import {Div} from '../index.js';

export class CustomVn extends Div {
    init() {
        this.div1 = document.createElement('div');
        this.div2 = document.createElement('div');

        this.div1.html`hello world`;
        this.div2.html`Gap Tree`;

        this.buildHtml();
    }

    onUpdate() {
        this.buildHtml();
    }

    buildHtml() {
        this.elem.html`
            ${this.div1}
            <ul class="${this.data.style}">
                <li>${this.data.k1}</li>
                <li>${this.data.k2}</li>
            </ul>
            ${this.div2}
        `;
    }
}
