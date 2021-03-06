export {Vnode} from './js/Vnode.js';
export {Div} from './js/Div.js';
export {Ul} from './js/Ul.js';
export {Li} from './js/Li.js';

export const mount = (elem, vnode) => {
    elem.appendChild(vnode.elem);
};
