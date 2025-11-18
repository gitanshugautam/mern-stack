import React from 'react'
import { useState } from 'react'

const State = () => {
    const [count,setCount] = useState(0)
    return (
        <div>
           <p>this is count value:{count}</p> 
           <button onClick={()=> setCount(count+1)}>increment</button>
        </div>
    )
}

export default State