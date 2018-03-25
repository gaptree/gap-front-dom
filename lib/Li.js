import {Dom} from './core/Dom.js';

export class Li extends Dom {
    buildElem() {
        return this.createElem('li');
    }
}
