let a = [1,2,3,4,5,6,7,8,9,10];

// function square(x){
//     return x*x;
// }

// // let squarearr = a.map(square);
// // console.log(squarearr);
// const mapoverview = (arr,fun) =>{
//     const array = [];
//     for (let ele of a){
//         array.push(fun(ele));
//     }

// return array;
// };

// // console.log(mapoverview(a));

// function cube(x){
//     return x*x*x;
// }

// console.log(mapoverview(a, cube));
// console.log(a.map(cube));

// let y=5;
// const newarr = a.map((x,y)=>{
//     return Math.pow(x,5);
// })

// console.log(newarr);


//filter: accepts a call back function(boolean) and push the element only if the call back function returns true
function odd(x){
    return x%2;
}

let oddarr = a.filter(odd);
console.log(oddarr);