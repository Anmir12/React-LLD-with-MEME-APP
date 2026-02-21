// let us create a own implementation of Deep Copy function which will be useful for deep copying nested objects and arrays

//there are several ways to deepcopy a nested array/object like using loadash deepclone , struturedClone, and good old JSON.stringfy(JSON.parse(obj))

//but we are going to write a utility function without using any external library and inBuilt methods

let obj = {
  name: "anmir",
  age: 25,
  occupation: "Software Engineer",
};

// let obj2 = {...obj}
// console.log(obj, obj2)
// let obj2 = obj;

// console.log(obj, obj2);
// //{ name: 'anmir', age: 25, occupation: 'Software Engineer' } { name: 'anmir', age: 25, occupation: 'Software Engineer' }
// obj2.name = "inthiyaz";

// console.log(obj, obj2);
// { name: 'inthiyaz', age: 25, occupation: 'Software Engineer' } { name: 'inthiyaz', age: 25, occupation: 'Software Engineer' }

//objects,arrays,functions are of type non-primitive means when we try to modify or assign it to a variable it will refer to same memory location.
// it will not create a new object eniterly as you can see in the above case modifing obj2 also modified obj
//so one way is to use new spread operator

// let obj2 = {...obj}
// obj2.name = "Inthiyaz"
// console.log(obj, obj2);
//{ name: 'anmir', age: 25, occupation: 'Software Engineer' } { name: 'Inthiyaz', age: 25, occupation: 'Software Engineer' }

//as you can see obj2 clones the obj perfectly now the issue seems resolved

//but using the spread operator it will creates only a shallow copy means only the top level content clones successfully not the nested levels

obj.accounts = {
  facebook: "anmirMunna12",
  twitter: "anmirMunna786",
  instagram: "AnmirShaik",
};

let obj2 = deepCopy(obj);
console.log(obj, obj2);

obj2.name = "inthiyaz";

// console.log(obj,obj2)

obj2.accounts.facebook = "inthiyaz786";
console.log(obj, obj2);

//you can see changesin obj2 now  mutates the obj also

//to solve this we are going to write a deepcopy function with recursion

function deepCopy(obj, hash = new WeakMap()) {
  //first it will  checks if the param it receives it truly an object or primitive or null. if it is not an object it will return param it receivied

  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  //it will checks if it the obj already present previously than it will get it from there instead of itearting again
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  //now if it is non-primitive so it will either be an array or object

  let copyObj = Array.isArray(obj) ? [] : {};

  hash.set(obj, copyObj);

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      copyObj[key] = deepCopy(obj[key], hash);
    }
  }

  return copyObj;
}
