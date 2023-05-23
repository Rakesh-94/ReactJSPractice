import React, { useState } from 'react'

export const QuestionnoTwo = () => {
    let [count,Setcount] = useState(0)

    
    let decriment = ()=>{ return Setcount(count-=1)}
    
    let incriment = ()=>{ return Setcount(count += 1)}
    return (
        <div>
            <button onClick={decriment}>-</button>
            <h1>{count}</h1>
            <button onClick={incriment}>+</button>

        </div>
    )
}
