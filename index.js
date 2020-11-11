// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log("a: " + Array.isArray(a));
console.log("b: " + Array.isArray(b));

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
console.log(a.map(num => num*2));

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join(' '));
console.log(colors.join('+'));
console.log(colors.join(','));

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
console.log(a.sort(function(a, b){return b-a}));

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'

a.sort(function(a, b){return a-b});
let max_occ = 0;
let cur_occ = 0;
let max_elm = a[0];
let cur_elm = a[0];

a.forEach(elm => {
    if (elm === cur_elm) cur_occ++;
    if (cur_occ > max_occ) {
        max_occ = cur_occ;
        max_elm = elm;
    }
    cur_elm = elm;
})

console.log(max_elm);