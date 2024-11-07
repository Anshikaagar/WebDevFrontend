// let arr = [1,2,3,4,5,6,7,8,9]

// console.log(arr.slice(2,5));

// arr.splice(5,0,"5", true);
// console.log(arr);



// loop

// for (let i=0; i<arr.length; i++){
//     console.log(`element at ${i}th index is ${arr[i]}`);
// }

// for (let item of arr){
//     console.log(item);
// }

// for (let item in arr){
//     console.log(item);
// }
// console.log(arr.shift());
// console.log(arr.shift());
// console.log(arr.shift());


// let i=0;
// while (i<arr.length){
//     console.log(arr[i]);
//     i++;
// }

// console.log(arr.join(" | "));
// console.log(arr);

// let obj = {
//     place : "GLA",
//     year : 3,
//     jsStarted:true,
// }

// console.log(obj);
// console.log(obj["jsStarted"]);
// console.log(obj.year);

// obj.newKey = "this";
// obj["another"]="hiii";

// for (let key in obj){
//     console.log(key, obj[key]);
// }

const complex = {
    names: ["hii", "this", 1,2,3,4],
    insideobj: {
        name:"hii",
        age:20,
    }
}

console.log(complex.insideobj.age);
console.log(complex.names[1]);