let name = "Gitanshu";
let length = name.length;
for (let i = 0; i < length; i++) 
{
     console.log(name);
    }






    let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}
console.log("Sum of first 10 natural numbers is:", sum);





let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = [];
for (let i = 0; i < arr.length; i++) {
       if (arr[i] % 2 !== 0) {
            oddNumbers.push(arr[i]);
               }
}

console.log("Odd Numbers:", oddNumbers);




let str = "Gitanshu";
let reversed = "";

for (let i = str.length - 1; i >= 0;i--)
     {
    reversed += str[i];
}

console.log(reversed);





let s = "Rishi";
let i = s.length-1
console.log(i)