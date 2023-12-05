// 1)
// var number = prompt("Enter number to print");
// document.getElementById('demo').innerHTML = number;


// 2)
// var number = prompt("Enter number to check");
// if (number % 4 == 0 || number % 3 == 0)
//     document.getElementById('demo').innerHTML = "yes";
// else
//     document.getElementById('demo').innerHTML = "no";


// 3)
// var num1 = prompt("Enter number 1");
// var num2 = prompt("Enter number 2");
// if (num1 > num2)
//     document.getElementById('demo').innerHTML = num1;
// else if (num1 < num2)
//     document.getElementById('demo').innerHTML = num2;


//4)
// var number = prompt("Enter number to check if it's +ve or -ve");
// if (number > 0)
//     document.getElementById('demo').innerHTML = "positive";
// else if (number < 0)
//     document.getElementById('demo').innerHTML = "negative";


//5)
// var num1 = prompt("Enter number 1");
// var num2 = prompt("Enter number 2");
// var num3 = prompt("Enter number 3");
// if (num1 > num2 && num1 > num3) {
//     document.getElementById('demo').innerHTML = "Max element =  " + num1;
//     if (num2 > num3)
//         document.getElementById('test').innerHTML = "Min element =  " + num3;
//     else
//         document.getElementById('test').innerHTML = "Min element =  " + num2;
// }
// else if (num2 > num1 && num2 > num3) {
//     document.getElementById('demo').innerHTML = "Max element =  " + num2;
//     if (num1 > num3)
//         document.getElementById('test').innerHTML = "Min element =  " + num3;
//     else
//         document.getElementById('test').innerHTML = "Min element =  " + num1;
// }
// if (num3 > num2 && num3 > num1) {
//     document.getElementById('demo').innerHTML = "Max element =  " + num3;
//     if (num1 > num2)
//         document.getElementById('test').innerHTML = "Min element =  " + num2;
//     else
//         document.getElementById('test').innerHTML = "Min element =  " + num1;
// }


//6)
// var number = prompt("Enter number to check");
// if (number % 2 == 0)
//     document.getElementById('demo').innerHTML = "Even";
// else
//     document.getElementById('demo').innerHTML = "Odd";


//7)
// var char = prompt("Enter chararacter to check");
// if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u')
//     document.getElementById('demo').innerHTML = "Vowel";
// else
//     document.getElementById('demo').innerHTML = "Consonant";


//9)
// var number = prompt("Enter number :");
// for (var i=1 ;i<=number; i++){
//     document.getElementById('demo').innerHTML += i +" ";
// }


//10)
// var number = prompt("Enter number :");
// document.write(number);
// for ( var i=1;i<=12;i++){
//     document.getElementById('demo').innerHTML += i*number +" ";
// }


//11)
// var number = prompt("Enter number");
// for (var i=1;i<=number;i++){
//     if(i%2 == 0){
//         document.getElementById('demo').innerHTML += i+" ";
//     }
// }


// 12)
// var num = prompt("Enter Number");
// var pow = prompt("Enter Power");
// var result = 1;
// for (var i = 1; i <= pow; i++) {;
//     result = result * num;
// }
// document.getElementById('demo').innerHTML += result;


// 12)
// var sub1 = Number(prompt("Enter Subject 1 :"));
// var sub2 = Number(prompt("Enter Subject 2 :"));
// var sub3 = Number(prompt("Enter Subject 3 :"));
// var sub4 = Number(prompt("Enter Subject 4 :"));
// var sub5 = Number(prompt("Enter Subject 5 :"));

// var sum = sub1 + sub2 + sub3 + sub4 + sub5;
// var avg = (sub1 + sub2 + sub3 + sub4 + sub5) / 5;
// var percantage = ((sub1 + sub2 + sub3 + sub4 + sub5)/500)*100;

// document.getElementById('demo').innerHTML += "Total marks = "+sum;
// document.getElementById('test').innerHTML += "Average Marks = "+avg;
// document.getElementById('cont').innerHTML += "Percantage = "+percantage;


// 13)
// var month = prompt("Enter month number :");
// if (month == 1)
//     document.getElementById('demo').innerHTML = "Days in Month: 31" ;
// else if (month == 2)
//     document.getElementById('demo').innerHTML = "Days in Month: 29" ;
// else if (month == 3)
//     document.getElementById('demo').innerHTML = "Days in Month: 31";
// else if (month == 4)
//     document.getElementById('demo').innerHTML = "Days in Month: 30";
// else if (month == 5)
//     document.getElementById('demo').innerHTML = "Days in Month: 31";
// else if (month == 6)
//     document.getElementById('demo').innerHTML = "Days in Month: 30";
// else if (month == 7)
//     document.getElementById('demo').innerHTML = "Days in Month: 31";
// else if (month == 8)
//     document.getElementById('demo').innerHTML = "Days in Month: 31";
// else if (month == 9)
//     document.getElementById('demo').innerHTML = "Days in Month: 30";
// else if (month == 10)
//     document.getElementById('demo').innerHTML = "Days in Month: 31";
// else if (month == 11)
//     document.getElementById('demo').innerHTML = "Days in Month: 30";
// else if (month == 12)
//     document.getElementById('demo').innerHTML = "Days in Month: 31";


// 14)
// var sub1 = Number(prompt("Enter Physics mark :"));
// var sub2 = Number(prompt("Enter Chemistry mark :"));
// var sub3 = Number(prompt("Enter Biology mark :"));
// var sub4 = Number(prompt("Enter Mathematics mark :"));
// var sub5 = Number(prompt("Enter Computer mark :"));

// var percantage = ((sub1 + sub2 + sub3 + sub4 + sub5) / 500) * 100;
// document.getElementById('demo').innerHTML += "Percantage = " + percantage +"%";
// if (percantage >= 90)
//     document.getElementById('test').innerHTML += "Grad A";
// if (percantage >= 80 && percantage < 90)
//     document.getElementById('test').innerHTML += "Grad B";
// if (percantage >= 70 && percantage < 80)
//     document.getElementById('test').innerHTML += "Grad C";
// if (percantage >= 60 && percantage < 70)
//     document.getElementById('test').innerHTML += "Grad D";
// if (percantage >= 40 && percantage < 60)
//     document.getElementById('test').innerHTML += "Grad E";
// if (percantage < 40)
//     document.getElementById('test').innerHTML += "Grad F";


//15)
// var month = prompt("Enter month number: ");
// var result;
// switch (month) {
//     case "1":
//         result = 31;
//         document.getElementById('demo').innerHTML = result;
//         break;
//     case "2":
//         result = 28;
//         document.getElementById('demo').innerHTML = result;
//         break;
//     case "3":
//         result = 31;
//         document.getElementById('demo').innerHTML = result;
//         break;
//     case "4":
//         result = 30;
//         document.getElementById('demo').innerHTML = result;
//         break;
//     case "5":
//         result = 31;
//         document.getElementById('demo').innerHTML = result;
//         break;
//     case "6":
//         result = 30;
//         document.getElementById('demo').innerHTML = result;
//         break;
//     case "7":
//         result = 31;
//         document.getElementById('demo').innerHTML = result;
//         break;
//     case "8":
//         result = 31;
//         document.getElementById('demo').innerHTML = result;
//         break;
//     case "9":
//         result = 30;
//         document.getElementById('demo').innerHTML = result;
//         break;
//     case "10":
//         result = 31;
//         document.getElementById('demo').innerHTML = result;
//         break;
//     case "11":
//         result = 30;
//         document.getElementById('demo').innerHTML = result;
//         break;
//     case "12":
//         result = 31;
//         document.getElementById('demo').innerHTML = result;
//         break;
// } 


//16)
// var char = prompt("Enter char to check :");
// switch (true) {
//     case char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u':
//         document.getElementById('demo').innerHTML = "Vowel";
//         break;
//     default:
//         document.getElementById('demo').innerHTML = "Consonant";
// }


//17)
// var num1 = prompt("Enter 1st number :");
// var num2 = prompt("Enter 2nd number :");
// switch (true) {
//     case num1 > num2:
//         document.getElementById('demo').innerHTML = num1 + " is the maximum";
//         break;
//     case num1 < num2:
//         document.getElementById('demo').innerHTML = num2 + " is the maximum";
//         break;
// }



//18)
// var num = prompt("Enter number to check :");
// switch (true) {
//     case num%2 ==0:
//         document.getElementById('demo').innerHTML = num + " is even";
//         break;
//     case num%2 !=0:
//         document.getElementById('demo').innerHTML = num + " is odd";
//         break;
// }


//19)
// var num = prompt("Enter number to check :");
// switch (true) {
//     case num > 0:
//         document.getElementById('demo').innerHTML = num + " is positive";
//         break;
//     case num < 0:
//         document.getElementById('demo').innerHTML = num + " is negative";
//         break;
// }



//20)
// let result;
// const operator = prompt('Enter operator ( either +, -, * or / ): ');
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// switch(operator) {
//     case '+':
//          result = number1 + number2;
//         console.log(`${number1} + ${number2} = ${result}`);
//         break;

//     case '-':
//          result = number1 - number2;
//         console.log(`${number1} - ${number2} = ${result}`);
//         break;

//     case '*':
//          result = number1 * number2;
//         console.log(`${number1} * ${number2} = ${result}`);
//         break;

//     case '/':
//          result = number1 / number2;
//         console.log(`${number1} / ${number2} = ${result}`);
//         break;

//     default:
//         console.log('Invalid operator');
//         break;
// }