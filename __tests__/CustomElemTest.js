import {mount} from '../index.js';
import {CustomDom} from '../__lib__/CustomDom.js';

test('CustomDom', () => {
    const customDom = new CustomDom({
        k1: 'val11'
    });
    mount(document.body, customDom);

    expect(document.body.innerHTML).toBe('<div>'
        + '<div>hello world</div> '
        + '<ul class=""> <li>val11</li> <li></li> </ul> '
        + '<div>Gap Tree</div>'
        + '</div>');

    customDom.update({
        style: 'k',
        k1: 'val21',
        k2: 'val22'
    });

    expect(document.body.innerHTML).toBe('<div>'
        + '<div>hello world</div> '
        + '<ul class="k"> <li>val21</li> <li>val22</li> </ul> '
        + '<div>Gap Tree</div>'
        + '</div>');
});
