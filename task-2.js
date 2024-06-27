// let money=Number(prompt("enter money"));
// let months=Number(prompt("enter month"));
// let total=(money*17/100)+money
// let monthly=(total/months);
// alert(`total: ${total}, monthly= ${monthly}`);

// let money=Number(prompt("enter money"));
// let months=Number(prompt("enter month"));
// let owner= confirm("Are you owner?");
// let total;
// let monthly;
// if(owner==true){
//     total=(money*15/100)+money;
//     monthly=total/months;
// }else{
//     total=(money*20/100)+money;
//     monthly=total/months;
// }
// alert(`total: ${total}, monthly= ${monthly}`);

let money = Number(prompt("enter money"));
let months = Number(prompt("enter month"));
let owner = confirm("Are you owner?");
let percent;
if (owner == true) {
    percent = 15;
} else {
    percent20;
}
let total = (money * percent / 100) + money;
let monthly = total / months;
alert(`total: ${total}, monthly= ${monthly}`);


