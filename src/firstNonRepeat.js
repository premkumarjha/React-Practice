//yaha better ki occurence of each char  and jinme se first non repeating (means occurence 1 ho) char ko return krna hai.

////for of loop order maintained rakhta hai. for in loop me order maintain nhi hota hai. //jaise num and str mixed type phir ye for in order not maintain.

// 🧩 Summary
// Approach	Loops over	Keeps original order?	Fails when	Recommended?
// for...in on object	Object keys	⚠️ Not guaranteed	When string has digits or mixed chars	❌ No
// for...of on string	Actual characters	✅ Always	Never (for valid strings)	✅ Yes

// ✅ Final takeaway:

// Use for...in to iterate keys of plain objects (not when order matters).
// Use for...of to iterate characters of string when order does matter (like finding first non-repeatin

/*

Final Verdict
String	                    for...in result	           Correct?	                  Reason
"success"	                    u	                        ✅	                     No numeric keys
"a1b1c"	                      a	                        ✅ (by luck)	             Only one numeric key '1'
"1a2b1a3"	                  2	                        ✅ (by order of string)	 Numeric keys, but matches by chance
"112233abc"	                  a	                        ✅	                       Numeric first, but fine
"a10b"	                     ❌ 10	                   ❌ Wrong	                    Key '10' treated as numeric, reordered

*/
let str = "success";
"1a2b1a3", "a1b1c", "!a#b!a", "swiss"; //Mixed numeric and letter sequence then for in loop fail ho jayga. so for of loop use kro....

let res = str.split("").reduce((acc, curr) => {
  if (!acc[curr]) {
    acc[curr] = 1;
    return acc;
  } else {
    acc[curr] += 1;
    return acc;
  }
}, {});
console.log("res", res);

for (let ch in res) {
  //Note --prefer for of loop here over for in loop to maintain order of char in string.for in loop will fail for str="a10b",due to Object Key Ordering Rules,Integer-like keys (numeric keys that can be converted to positive integers, e.g. "0", "1", "2")→ Listed first, sorted ascending numerically.🔤 String keys (non-integer strings, e.g. "a", "b", "x1")→ Listed next, in insertion order. Symbol keys→ Listed last, in insertion order.
  if (res[ch] === 1) {
    console.log("First non-repeating =", ch);
    break;
  }
}

/*  better use for of loop, as for of loop, as it maintain order. we can not use for of loop here on res as rs is object , not iterable, so for loop will use on str */

for (let ch of str) {
  if (res[ch] === 1) {
    console.log("First non-repeating =", ch);
    break;
  }
}

