// const  isRainFalling = true
// console.log(isRainFalling)

// if(isRainFalling==true){
//     console.logI("stay")
// }
// else{
//     console.log("leave")
// }


// //palindrome

// const isPalindrome = prompt("enter a word").toLowerCase()
// const reverse=isPalindrome.split('').reverse().join('')
// console.log(reverse)
// console.log(isPalindrome)
// console.log(reverse==isPalindrome)

// if(isPalindrome==reverse){
//     document.write("it is palindrome")
// }
// else{
//     document.write("not a palindrome")
// }

// //age to vote

// var num=20
// if(num>=18){
//     console.log("eligible for voting")

// }
// else{
//     console.log("not eligible")

// }

// //marks

// const isMarks = prompt("enter marks")
 

// if(isMarks>=90){
//     console.log('A grade')
// }
// else
// {
//     if(isMarks>=80){
//     console.log('B grade')
//     }
// else{
// if(isMarks>=70){
//         console.log('C grade')
//     }
// else{
//    if(isMarks>=60){
//        console.log('D grade')
//    }
// else{
// if(isMarks>=50){
//    console.log('E grade')
// }

// else {
//    console.log('fail')
// }

// }
// }
// }
// }

// //even or odd

// var num = 5
// if(num%2==0){
//     console.log('even')
// }
// else{
//     console.log('odd')
// }

let income = 300000; 
let tax = 0;

if (income <= 250000) {
    tax = 0;
} else if (income > 250000 && income <= 500000) {
    tax = (income - 250000) * 0.05;
} else if (income > 500000 && income <= 1000000) {
    tax = 12500 + (income - 500000) * 0.20;
} else {
    tax = 112500 + (income - 1000000) * 0.30;
}

console.log("Total tax payable:", tax);




let units = 350;
let bill = 0;

if (units <= 100) {
    bill = units * 1;
} else if (units > 100 && units <= 300) {
    bill = 100 * 1 + (units - 100) * 1.5;
} else {
    bill = 100 * 1 + 200 * 1.5 + (units - 300) * 2;
}

console.log("Total electricity bill amount:", bill);

// weight

const weight = parseFloat(prompt("Enter the weight of the parcel (in kg):"));
const destination = prompt("Enter the destination (Local, National, or International):");


let cost;

if (weight <= 1) {
  if (destination === "Local") {
    cost = 5;
  } else if (destination === "National") {
    cost = 8;
  } else {
    cost = 15;
  }
} else if (weight <= 5) {
  if (destination === "Local") {
    cost = 10;
  } else if (destination === "National") {
    cost = 15;
  } else {
    cost = 30;
  }
} else if (weight <= 10) {
  if (destination === "Local") {
    cost = 20;
  } else if (destination === "National") {
    cost = 25;
  } else {
    cost = 50;
  }
} else {
  if (destination === "Local") {
    cost = 30;
  } else if (destination === "National") {
    cost = 35;
  } else {
    cost = 70;
  }
}


console.log(`Total shipping cost: ${cost}rs`);
