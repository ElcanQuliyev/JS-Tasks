// let a = Number(prompt("Enter A!"));
// let b = Number(prompt("Enter B!"));

// if (a > b) {
//     console.log("A greater number");
// } else if (a < b) {
//     console.log("B greater number");
// } else {
//     console.log("A equals B");
// }


let a = Number(prompt("Enter A!"));
let b = Number(prompt("Enter B!"));
let c = Number(prompt("Enter C!"));

// if (a > b && a > c) {
//     console.log(a);
// } else if (b > a && b > c ) {
//     console.log(b);
// } else {
//     console.log(c);
// }

// if(a>b){
//     if(a>c){
//         console.log(a);
//     }else{
//         console.log(c);
//     }
// }else{
//     if(b>c){
//         console.log(b);
//     }
//     else{
//         console.log(c);
//     }
// }

console.log(a > b && a > c ? a : b > a && b > c ? b : c);

