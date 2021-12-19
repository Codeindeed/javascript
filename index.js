// let alex = "hello";


// //doctorize("wes")
// const doctorize = function (firstname) {
//     return `dr ${firstname}`
// }

// function doctorize2(firstname) {
//     return `dr ${firstname}`
// }

// function inches(inch) {
//     return inch * 2.45;
// }
// const change = (inch) => {
//     return inch * 2.35
// }

// let inchToCm = (inch) => inch * 2.54;
// console.log(inchToCm(30));
// inches(30)

// function add(a,b,c) {
//     const total = a + b + c;
//     return total;
// }

// let adds= (a,b,c) =>  a+b+c

// console.log(adds(1,2,3));
// console.log(alex);

// const makebaby =(first, last ) =>{
//     const baby ={
//         name = `${first}, ${last}`,
//         age = 0
//     }
//     return baby;
// };
// const babys = (first,last) => ({name:`${first}` `${last}`, age:0});

(function (age) {
    console.log("running the annon function");
    return `you are cool and ${age}`
})(23);

const wes = {
    name: "wes",
    sayHi: function () {
        console.log(this);
        return `hi wes ?`
    },
    sayhello(){
        console.log("how far");
        return`alex`
    },
    sayhim: ()=>{
        console.log('hello');
    }
}
 const button = document.querySelector('.clickme')