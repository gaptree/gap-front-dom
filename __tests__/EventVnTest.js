import {mount} from '../index.js';
import {EventVn} from '../__lib__/EventVn.js';

test('EventVn', () => {
    const vnode = new EventVn({
        k1: 'val1',
        title: 'title1',
        desc: 'desc1'
    });

    mount(document.body, vnode);

    expect(document.body.innerHTML).toBe('<div>'
        + '<div>hello world</div> '
        + '<ul class=""> <li>val1</li> <li></li> </ul> '
        + '<input data-event="vne1" type="text" name="title" value="title1"> '
        + '<textarea name="desc">desc1</textarea> '
        + '<div>Gap Tree</div>'
        + '</div>');

    vnode.update({
        title: 'title2',
        desc: 'desc2'
    });

    vnode.onChange = evt => {
        expect(evt.target.tagName.toLowerCase()).toBe('input');
    };

    vnode.onClick = evt => {
        expect(evt.target.value).toBe('title2');
    };

    expect(document.body.innerHTML).toBe('<div class="changed">'
        + '<div>hello world</div> '
        + '<ul class=""> <li>changed</li> <li>changed</li> </ul> '
        + '<input data-event="vne1" type="text" name="title" value="title2"> '
        + '<textarea name="desc">desc2</textarea> '
        + '<div>Gap Tree</div>'
        + '</div>');

    const inputElem = document.oneElem('input');
    inputElem.click();

    var evt = document.createEvent('HTMLEvents');
    evt.initEvent('change', false, true);
    inputElem.dispatchEvent(evt);
});
