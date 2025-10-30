// const now = new Date()
// console.log(now)



// const date = new Date ("2025-03-22")
// console.log(date)



// const date = new Date (2025,9,30)
// console.log(date)



// const year = date.getFullYear()
// console.log(year)

// const month = date.getMonth()
// console.log(month)




// const day = date.getDay()
// console.log(day)



// const hour = date.getHours()
// console.log(hour)

// const minute = date.getMinutes()
// console.log(minute)



// const second = date.getSeconds()
// console.log(second)


// const miliseconds = date.getMilliseconds()
// console.log(miliseconds)


// const string = date.toDateString()
// console.log(string)



// const iso = date.toISOString()
// console.log(iso)




//---------------------------------------------------------------------------------------------



// let a;
// let b = null
// console.log(typeof(a))
// console.log(typeof(b))









function ouuterFunction(){
    let counter =0;
    function innerfunction(){
        counter = counter+2;
        console.log(counter)
    }
    return innerfunction
}

const closureFunction = ouuterFunction()
closureFunction()