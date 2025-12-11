let num = parseInt(prompt("Enter any number:"));
console.log("Table of", num);
for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}