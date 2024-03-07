// N0-1  How to declare a variable using let and const 
const fatherName = 'rafiq';
let season = 'rainy';
season ='winter';

// no-2 Condition 

// if (fatherName === 'Rafiq'|| season === 'tainy') {
//     console.log("aj rainy seasion")
// }
// else if(fatherName === 'rafiq'){
//     console.log('samiraar baba')
// }
// else{
//     console.log('kisoi lagbena')
// }

// No-3 for loop
// const numbers =[23, 43, 76, 54, 98, 78]
// for(let i = 0; i < numbers.length; i++ ){
//      numbers[0]=22;
//     const number = numbers[i];
 
   
// }
// console.log(numbers)

// NO-4 function
// const numbers =(num1, num2) =>{
//     const result = num1 * num2;
//    return result
// }
// const allsum =numbers(3,4)
// console.log(allsum)

// No-5 object 
const number = [23, 43, 56, 77,33]
const student ={
    subject : "social work",
    duration : '4 year',
    teacher:{
        bangla: "nipa",
        english: "kalam sir",
        economic : " mostak"
    },
    subject:["bangla","enlish", "meth"],
    examfee : 500, 
}
// const myVariable = 'examfee';
// console.log(student.duration) // direct by property
// console.log(student.teacher.english)
// console.log(student. subject[1])
// console.log(student["subject"]) // access via property name string
// //access via property name in a variable

// console.log(student[myVariable])

const allobject = `my collage subject ${student.subject}. my collage teacher ${student.teacher.bangla}. my roll number ${number[2]}`
console.log(allobject);

// No-6 arrow function 
const doMeth = (nu1, nu2) => {
    const sum = nu1 + nu2;
    return sum;
}
console.log(doMeth(7,8));