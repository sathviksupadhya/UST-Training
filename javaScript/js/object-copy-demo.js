let nameData ={firstName:"john",lastName:"smith"};
let personaldata = {age:20,gender:"male"};
//curly braces are object literals
console.log(nameData.firstName);
console.log(nameData.lastName);

let combinedData1 = Object.assign(nameData, personaldata);
console.log(combinedData1);

let combinedData2 = {...nameData,...personaldata};
console.log(combinedData2);


let evenNumbers = [2,4,6,8,10];
let copyEvenNumbers =[...evenNumbers];
console.log(copyEvenNumbers);

let oddNumbers = [1,2,3,4,5];
let copyOddNumbers = [...oddNumbers];
console.log(copyOddNumbers);

let combinedNumbers = [...evenNumbers,...oddNumbers];

console.log(combinedNumbers);