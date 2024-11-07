let student = [
    {
        name: "student 1",
        year: 3,
        age: 21,
        gender: "female",
        cgpa: 8,
        backlogs: false
    },
    {
        name: "student 2",
        year: 2,
        age: 20,
        gender: "male",
        cgpa: 7.5,
        backlogs: true
    },
    {
        name: "student 3",
        year: 1,
        age: 19,
        gender: "female",
        cgpa: 8.2,
        backlogs: false
    },
    {
        name: "student 4",
        year: 4,
        age: 22,
        gender: "male",
        cgpa: 7.8,
        backlogs: false
    },
    {
        name: "student 5",
        year: 3,
        age: 21,
        gender: "female",
        cgpa: 6.9,
        backlogs: true
    },
    {
        name: "student 6",
        year: 2,
        age: 20,
        gender: "male",
        cgpa: 7.3,
        backlogs: false
    },
    {
        name: "student 7",
        year: 1,
        age: 18,
        gender: "female",
        cgpa: 8.4,
        backlogs: false
    },
    {
        name: "student 8",
        year: 4,
        age: 23,
        gender: "male",
        cgpa: 7.1,
        backlogs: true
    },
    {
        name: "student 9",
        year: 3,
        age: 22,
        gender: "female",
        cgpa: 7.9,
        backlogs: false
    }
];


let result1 = student.filter((s)=>{
    return student.cgpa >= 7.5;
})

// console.log(result1);

let result2 = student.filter(()=>{
    return student.year===3;
})

let result3 = student.filter((s)=>{
    return !student.backlogs && student.cgpa>7 && student.year===3;
})

// console.log(result3);

let arr = [{name:"hii",points:400},{name:"hii",points:400},{name:"hii",points:400},{name:"hii",points:400},{name:"hii",points:400},{name:"hii",points:400}];
let sum = arr.reduce((accum,ele)=>{
    return accum+ele.points;
},0);

// console.log(sum);

let foundstudent = student.find((s)=>{
    return student.name === "student 7";
})

// console.log(foundstudent);

/* Asynchronous JS */

// console.log("start");
// setTimeout(()=>{
//     console.log("hiii");
// },2000);                   //2000 ms

// setTimeout(()=>{
//     console.log("hiiiiiii");
// },2000);
// console.log("end");

// const id = setInterval(()=>{
//     console.log("interval cb");
// },(2000));

// setTimeout(()=>clearInterval(id),12000);


/* Promises: to execute asynchronous functions in synchornise way 
eg: when we ask data from backend it takes some time(we can't predict) and we want to manipulate or print data only after receiving it. 

Three states:
1. resolve: task complete
2. reject: error tackle
3. pending: 
*/


const first = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let num = Math.random()*10;
        if (num<5){
            resolve("resolved",num);
        }
        else{
            reject("rejected",num);
        }
        console.log("hii");
    },1000);
});

// then->resolve
// catch->reject

first.then((result,num)=>{
    console.log(result);
}).catch((error,num)=>{
    console.log(error);
});


//Q:- create a promise method which takes random value from array and checks whether it is even or odd
let arr1=[1,2,3,4,5,6,7,8,9,10];
const num = new Promise((resolve,reject)=>{
    setTimeout(()=>{

    })
})