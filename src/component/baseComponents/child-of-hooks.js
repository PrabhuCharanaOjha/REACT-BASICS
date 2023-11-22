import React, { useEffect } from 'react'

export const ChildComponentHooksDemoOne = ({ countTwo }) => {
    console.log("Child Component Hooks Demo One called");
    console.log(countTwo);
    return (
        <div>Child Component Hooks Demo One value {countTwo}</div>
    )
}


export const ChildComponentHooksDemoTwo = ({ countTwo, AddTodo }) => {
    console.log("Child Component Hooks Demo Two called");
    console.log(countTwo);
    console.log(AddTodo);
    return (
        <>
            <div>Child Component Hooks Demo Two</div>
            {countTwo.map((data, index) => {
                return (
                    <h3 key={index} className='text-cneter'>{data + " => " + index}</h3>
                )
            })}
            <button type="button" className="btn btn-primary btn-sm btn-block" onClick={AddTodo}>CLICK HERE TO ADD TODO</button>

        </>
    )
}

export const ChildComponentHooksDemoThree = () => {
    useEffect(() => {
        console.log("chield render for hook life cycle");
        return(()=>{
            console.log("component Unmounted in hooks");
        })
    })
    return (
        <div>Child Component Hooks Demo Three</div>
    )
}

