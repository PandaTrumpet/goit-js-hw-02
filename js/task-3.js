'use strict'
function getElementWidth(content, padding, border) {
    content = Number.parseFloat(content);
    padding = Number.parseFloat(padding);
    border = Number.parseFloat(border);
    const elementAllWidth = content + (padding * 2) + (border * 2)
    return elementAllWidth;
}

let elementAllWidth = getElementWidth;
console.log(elementAllWidth("50px", "8px", "4px" ));
console.log(elementAllWidth("60px", "12px", "8.5px"));
console.log(elementAllWidth("200px", "0px", "0px"))
