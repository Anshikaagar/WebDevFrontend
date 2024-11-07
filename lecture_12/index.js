let a=10;

// if (a=="10"){
//     console.log(true);
// }

// if (a==="10"){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// if (a=="10" && a==="10"){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// if (a=="10" || a==="10"){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// if (a=="10" && a==="10" && a==100/10 && a==1000/10){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// if ((a=="10" || a==="10") && (a==100/10 && a==1000/10)){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// check whether a number is -ve, +ve or zero
// const a = prompt("write a paragraph");
// // console.log(userpara);

// (a<0 || a>0 || a==0)?a==0?console.log("zero"):a<0?console.log("-ve")
// :console.log("+ve"):console.log("string");

const arr = [3, "4", 5, "6", 7, "8",9,10,11,"12"];
const random = Math.round(Math.random()*(12-3)+3);
console.log(random);

let index=-1;
for (let i=0; i<arr.length;i++) {
    if (random==arr[i]){
        index=i;
        break;
    }   
}
console.log(random, typeof(arr[index]));


a==10 && console.log(true);
if(a==10) console.log(true);