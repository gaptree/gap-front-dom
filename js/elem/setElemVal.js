export const setElemVal = (elem, val) => {
    elem.value = val;

    switch(elem.tagName.toLowerCase()) {
    case 'input':
        elem.setAttribute('value', val);
        break;
    case 'textarea':
        elem.innerHTML = val;
        break;
    }
};
