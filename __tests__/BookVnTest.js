import {BookVn} from '../__lib__/BookVn.js';
import {mount} from '../index.js';

test('BookVn', () => {
    const book = new BookVn();


    mount(document.body, book);

    expect(document.body.innerHTML)
        .toBe('<div><div class="user"> <p><strong>miao</strong></p> </div></div>');

    book.update();
    expect(document.body.innerHTML)
        .toBe('<div><div class="user"> <p><strong>haha</strong></p> </div></div>');
});
