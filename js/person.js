// In-line individually exports: 
// export const name = "Jesse";
// export const age = 40;
// export const userInfo = { name: "ali", age: 30, gender: "male" };
// export const users = [{ name: "ali", age: 30, gender: "male" }, { name: "ali", age: 30, gender: "male" }, { name: "ali", age: 30, gender: "male" }];


// All at once at the bottom exports: 
const name = "Jesse";
const age = 40;
const userInfo = { name: "ali", age: 30, gender: "male" };
const users = [{ name: "ali", age: 30, gender: "male" }, { name: "ali", age: 30, gender: "male" }, { name: "ali", age: 30, gender: "male" }];
export { name, age, userInfo, users };

