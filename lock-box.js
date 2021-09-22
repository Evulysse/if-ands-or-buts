const pinCode = ('112');
const prompt = require('prompt-sync')();

const pin = Number(prompt('Enter three number passcode '));

if (pin===112) {
    console.log('success');

}else{
    console.log('failure');
}
