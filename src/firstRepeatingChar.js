/*

//for of loop order maintained rakhta hai. for in loop me order maintain nhi hota hai. //jaise num and str mixed type phir ye for in order
“The first character in order of appearance that appears more than once.”

That means we check characters from left to right,
and the first one that has another occurrence later is the answer.

Character	Does it repeat later?	Note
s	✅ yes (at index 5, 6)	✅ first repeating
u	❌ no	—
c	✅ yes (at index 3)	repeats, but comes after s
e	❌ no	—

✅ So the first repeating character = 's'



*/


//solution 1:


let str = 'mississippi';

let smallest = [];
for (let i = 0; i <= str.length - 1; i++) {
  for (let j = i + 1; j <= str.length - 1; j++) {
    if (str[i] == str[j]) {
      smallest.push(j);             //push J.
    }
  }
}
console.log('smallest', str[Math.min(...smallest)]);

//solution 2:-

let str1 = 'mississippi';

let smallest1 = str.length - 1;
for (let i = 0; i <= str1.length - 1; i++) {
  for (let j = i + 1; j <= str1.length - 1; j++) {
    if (str1[i] == str1[j] && smallest1 >= j) {
      smallest1 = j;
    }
  }
}
console.log('smallest==>', smallest1, str1[smallest1]);

//solution 3:-

let str2 = 'mississippi';


