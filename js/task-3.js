'use strict'
// function getElementWidth(content, padding, border) {
//     content = Number.parseFloat(content);
//     padding = Number.parseFloat(padding);
//     border = Number.parseFloat(border);
//     const elementAllWidth = content + (padding * 2) + (border * 2)
//     return elementAllWidth;
// }

// let elementAllWidth = getElementWidth;
// console.log(elementAllWidth("50px", "8px", "4px" ));
// console.log(elementAllWidth("60px", "12px", "8.5px"));
// console.log(elementAllWidth("200px", "0px", "0px"))


function checkForSpam(message) {
    message = message.toUpperCase();
    message = message.toLowerCase();

    if(message.includes("spam") || message.includes("sale")) {
        return true;
    } else {
        return false;
    }
    
}
console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!")); 
console.log(checkForSpam("Trust me, this is not a spam message")); 
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); 
console.log(checkForSpam("[SPAM] How to earn fast money?")); 

