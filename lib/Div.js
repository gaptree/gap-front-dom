import {Dom} from './core/Dom.js';

export class Div extends Dom {
    buildElem() {
        return this.createElem('div');
    }
}
