import {Div} from '../index.js';

export class CustomDom extends Div {
    init() {
        this.div1 = new Div();
        this.div2 = new Div();

        this.div1.html`hello world`;
        this.div2.html`Gap Tree`;
    }

    render() {
        this.html`
            ${this.div1}
            <ul class="${this.state.style}">
                <li>${this.state.k1}</li>
                <li>${this.state.k2}</li>
            </ul>
            ${this.div2}
        `;
    }
}
