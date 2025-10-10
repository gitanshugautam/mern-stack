
// const a = "hello"

// console.log(a.test("hello"))


// const a = `hello
// world
// ram`
// const regex = /world$/m
// console.log (a.match(regex))


// const regex = /^hello/
// console.log(regex.text("hello world"))


function isValidEmail(email){
    const regex  = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test (email);
}

console.log(isValidEmail("gitanshu.gautam@abcd.com"));
console.log(isValidEmail("rishii@email"))