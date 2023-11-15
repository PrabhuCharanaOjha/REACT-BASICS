import React, { useEffect, useState } from 'react'
import { ChildComponentHooksDemoThree } from './child-of-hooks';

export const FunctionComponentLifeCycle = () => {
    // constructor in function component
    const [count, setCount] = useState(0);
    const [hide, setComponentStatus] = useState(true)

    // mounting
    useEffect(() => {
        console.log("component mounting in hooks")
    }, [])

    // updating
    useEffect(() => {
        console.log("component Updated in hooks")
    })

    const handleIncriment = () => {
        setCount(count + 1);
    }


    return (
        <div className="col-sm-3 text-center border border-2 border-black">
            THIS IS FUNCTIONAL COMPONENT LIFECYCLE METHOD
            <h4>Your Count is : {count}</h4>
            <button type="button" name="" id="" class="btn btn-primary btn-lg btn-block" onClick={handleIncriment}>incriment</button>
            {hide && <ChildComponentHooksDemoThree/>}            
            <button type="button" name="" id="" class="btn btn-primary btn-lg btn-block" onClick={()=> {setComponentStatus(hide===false)}}>Show/Hide</button>
        </div>
    )
}
