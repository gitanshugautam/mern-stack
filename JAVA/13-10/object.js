// const user = {
//     name: "ram",
//     age :20,
//     gender:"male",
// obj{

// }
// }

// const a = Object.keys(user)
// console.log(a)



// const b = Object.values(user)
// console.log(b)


// const c = Object.entries(user)
// console.log(c)

// const d = Object.fromentries(user)
// console.log(d)

// const e = Object.freeze(user)
// e.name = "shyam"
// console.log(e)




// const f = Object.entries(user)
// console.log(f)


// Object.seal(user)
// user.name = "rishi"
// console.log(user)









const user = {
    name : "Rishi",
    city : "mohali"
}

const a = JSON.stringify(user)
console.log(a)
const b = JSON.parse(a)
console.log(b)