// Set 
// Map
// Intl API 

// const names = ['John', 'Jane', 'John', 'Jack', 'Jill', 'Jim'];
// let uniqueNames = new Set(names);
// uniqueNames = [...uniqueNames];

// OR 

// let uniqueNames = [...new Set(names)];

// console.log({ names });
// console.log({ uniqueNames });


// creating a new set 

// const names = new Set(['John', 'Jane', 'John', 'Jane', 'Jack', 'Jane', 'Jill', 'Jim']);
// // const names = new Set(['John', 'Jane', 'John', 'Jane', 'Jack', 'Jane', 'Jill', 'Jim']);

// names.add("ali");
// names.add("haider");
// console.log({ names }, "1");
// names.delete("haider");
// names.delete("John");
// names.forEach((value, value, set) => {
//     console.log({ value, set });
// })
// // names.clear();

// console.log({ names }, "2");

// const namesIterator = names.values();

// let index = 0;
// for (const name of namesIterator) {
//     console.log("name: ", name + " " + index);
//     index++;
// }


// console.log({ values: names.values(), size: names.size, has: names.has("haider"), keys: names.keys(), entries: names.entries() });

// let mySet = new Set();

// // Adding objects to the Set
// let obj1 = { name: 'John', age: 25 };
// let obj2 = { name: 'Jane', age: 30 };

// mySet.add(obj1);
// mySet.add(obj2);
// mySet.add({ name: 'ali', age: 45 });


// console.log("mySet: ", mySet);

// console.log({ values: mySet.values(), size: mySet.size, has: mySet.has("haider"), keys: mySet.keys(), entries: mySet.entries() });


// Map 

// console.log({ 90: "ali", age: 45 });
// console.log(90, "name");


const map = new Map();
// Adding elements to the Map
map.set('name', 'John');
map.set('age', 25);
map.set('gender', "female");
map.set(200, "male");
map.set({ name: "ali" }, "haider");
const array = [{ name: "ali" }, { age: 35 }];
map.set(array, "ali haider");
map.set(() => { console.log("hello"); }, "ali");


// console.log("map 1: ", map);


// map.delete(array);

// map.forEach((value, key, map) => {
//     console.log({ value, key, map });
// })

// const keys = map.keys();
// for (const key of keys) {
//     console.log("key: ", key);
// }
// const values = map.values();
// for (const value of values) {
//     console.log("value: ", value);
// }
const entries = map.entries();
for (const entry of entries) {
    console.log("entry: ", entry);
}

// map.clear()
// console.log("map 2: ", map, map.has(array));
// console.log(map.get(array), "array", map.size);
console.log({ key: map.keys(), values: map.values(), entries: map.entries() });
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
// ]);
// console.log("fruits: ", fruits);


// Intl API 


const number = 123456.789;

// const formatter = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD'
// });

// console.log(formatter.format(number)); // Output: $123,456.79


// const formatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
// const formatter = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" })
// console.log(formatter.format(number)); // Output: $123,456.79


const date = new Date();
console.log({date});
const formatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'narrow',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
});

console.log(formatter.format(date)); 