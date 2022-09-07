import countries from './countries.mjs';
import webTechs from './web_techs.mjs';

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let newText = text.replace(/[\.\,]/gi, ' ');
let words = newText.split(' ');
console.log(words);
console.log(words.length);

// Shopping Cart
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
let allergicToHoney = true;
if(allergicToHoney) {
    shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
}

shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";

console.log(shoppingCart);

let country = countries();
let webTech = webTechs();

if(country.indexOf('Ethiopia') >= 0){
    console.log('ETHIOPIA');
}
else{
    country.push('Ethiopia');
}

if(webTech.includes("Sass")){
    console.log('Sass is a CSS preprocess');
}
else{
    webTech.push('Sass');
    console.log(webTech);
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
