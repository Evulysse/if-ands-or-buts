const prompt = require('prompt-sync')();


const person1 = Number(prompt('Enter person 1 amount'));

const person2 = Number(prompt('Enter person 2 amount'));

const amount = person1 + person2;

const differenceAmount = amount / 2;
 


if (person1===person2) {
    console.log('nobody owes');
}
else if (differenceAmount > person1) {
    console.log('person 1 owes');

}else if (differenceAmount > person2) {
    console.log('person 2 owes');
}else {
    console.log('Error');
}

