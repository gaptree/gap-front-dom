import {mount} from '../index.js';
import {OnUpdateVn} from '../__lib__/OnUpdateVn.js';

test('OnUpdateVn', () => {
    const vnode = new OnUpdateVn({
        k1: 'val1',
        title: 'title1',
        desc: 'desc1'
    });
    mount(document.body, vnode);

    expect(document.body.innerHTML).toBe('<div>'
        + '<div>hello world</div> '
        + '<ul class=""> <li>val1</li> <li></li> </ul> '
        + '<input type="text" name="title" value="title1"> '
        + '<textarea name="desc">desc1</textarea> '
        + '<div>Gap Tree</div>'
        + '</div>');

    vnode.update({
        title: 'title2',
        desc: 'desc2'
    });

    expect(document.body.innerHTML).toBe('<div class="changed">'
        + '<div>hello world</div> '
        + '<ul class=""> <li>changed</li> <li>changed</li> </ul> '
        + '<input type="text" name="title" value="title2"> '
        + '<textarea name="desc">desc2</textarea> '
        + '<div>Gap Tree</div>'
        + '</div>');
});
