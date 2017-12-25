const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

const keyboard = [];

keyboard.push('qwertyuiop[]');
keyboard.push('asdfghjkl;\'');
keyboard.push('zxcvbnm,./');

console.log(keyboard);

let a = keyboard[1][5] + keyboard[0][2] + keyboard[1][8] + keyboard[1][8] + keyboard[0][8];

let b = '';
b += keyboard[1][6];
b += keyboard[1][0];
b += keyboard[2][3];
b += keyboard[1][0];
b += keyboard[1][1];
b += keyboard[2][2];
b += keyboard[0][3];
b += keyboard[0][7];
b += keyboard[0][9];
b += keyboard[0][4];

let c = '';

c += keyboard[0][4];
c += keyboard[0][3];
c += keyboard[1][0];
c += keyboard[0][7];
c += keyboard[2][5];
c += keyboard[0][2];
c += keyboard[0][3];

console.log(a);
console.log(b);
console.log(c);