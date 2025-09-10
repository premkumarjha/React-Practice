/*

1.> find value of "d" from below object
const obj = {
   a: {
     b: [1, 2, 3, { c: [4, 5, 6, { d: 'hello' }] }],
   },
 };


2.>find value of "e" from below object

const obj = {
  a: { b: [1, 2, 3, 4, { c: [1, 2, 3, { d: [1, 2, { e: [4, 5] }] }] }] },
};


*/
const findPropValue = (obj, prop) => {
  //console.log('typeof obj', typeof obj);
  if (typeof obj == "object") {
    for (let key in obj) {
      if (key == prop) {
        //  console.log('key is', key, prop);
        // console.log('obj[key],obj[prop]', obj[key], ',', obj[prop]);
        return obj[prop];
      } else {
        // console.log('obj[key] -> key==>', obj[key], '->', key);
        const res = findPropValue(obj[key], prop);
        
        if (res != undefined) {   //this line is imp, otherwise it will not go to deep level, simple ak bar callkarega and responsonse jo bhi aayega undefune or return krega, but apne ko undefine ke case other nested bhi to check...
          return res;
        }
//         1. Without this if check

// When you call recursively:

// const res = findPropValue(obj[key], prop);


// If the recursive call does not find the property inside that branch, it will return undefined.

// Without the if check, you would just return res; directly, and the recursion would stop too early, returning undefined even if the property exists deeper in another branch.

// 2. With the if (res != undefined)

// This condition ensures:

// If a recursive call actually found the property, it returns its value (res is not undefined). ✅

// If it did not find the property (res === undefined), the function continues searching in other branches of the object. 🔄
      }
    }
  }
};

const result = findPropValue(obj, "e");
console.log("result", result);
