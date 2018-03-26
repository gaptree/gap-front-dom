import {mount, Div, Ul, Li} from '../index.js';

test('dom', () => {

    const div = new Div();
    const ul = new Ul();
    const li = new Li();

    mount(document.body, div);
    div.append(ul);
    ul.append(li);

    expect(document.body.innerHTML).toBe('<div><ul><li></li></ul></div>');
});
