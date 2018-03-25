import {Dom} from './core/Dom.js';

export class Ul extends Dom {
    buildElem() {
        return this.createElem('ul');
    }
}
