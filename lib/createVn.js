/*import {Div} from './Div.js';
import {Ul} from './Ul.js';
import {Li} from './Li.js';
import {Input} from './Input.js';
import {TextArea} from './TextArea.js';

const tagMap = {
    'div' => Div,
    'ul' => Ul,
    'li' => Li,
    'input' => Input,
    'textarea' => TextArea
};*/

import {Vnode} from './Vnode.js';

export const createVn = (elem) => {
    return new Vnode({}, elem);
};
