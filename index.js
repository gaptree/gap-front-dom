export {Div} from './lib/Div.js';
export {Ul} from './lib/Ul.js';
export {Li} from './lib/Li.js';

export const mount = (elem, dom) => {
    elem.appendChild(dom.getElem());
    dom.render();
};
