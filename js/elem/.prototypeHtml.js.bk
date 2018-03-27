const pt = HTMLElement.prototype;


let index = 0;
let elems = [];

const tpl = (strs, ...items) => {
    const raw = strs.raw;
    let res = '';

    items.forEach((item, index) => {
        const str = raw[index];
        if (Array.isArray(item)) {
            item = item.join('');
        }
        if (item instanceof HTMLElement) {
            item = createHolder(item);
        }

        if (!item) {
            item = '';
        }

        res += str;
        res += item;
    });

    res += raw[raw.length - 1];
    return res.replace(/\s+/g, ' ').trim();
};

const createHolder = (elem) => {
    elems[index] = elem;
    const html = `<input type="hidden" class="elem-holder" value="${index}">`;
    index++;
    return html;
};

pt.html = function(strs, ...items) {
    index = 0;
    elems = [];

    this.innerHTML = tpl(strs, ...items);
    this.allElem('.elem-holder').forEach(
        holder => holder.replaceWith(elems[parseInt(holder.value)])
    );
};
