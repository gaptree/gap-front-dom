export {Vnode} from './lib/Vnode.js';
export {Div} from './lib/Div.js';
export {Ul} from './lib/Ul.js';
export {Li} from './lib/Li.js';

export const mount = (elem, vnode) => {
    elem.appendChild(vnode.elem);
};
