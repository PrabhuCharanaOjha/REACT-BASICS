import { useEffect, useState } from 'react'

// create and set State using useState in fuctional component
export const CreateingUseState = () => {

    const [name, setName] = useState('no name');

    const handleClickSetState = () => {
        setName("SONU");
    }

    return (
        <div className="col-sm-3 text-center border border-2 border-black">
            THIS IS INITIALIZATION OF USESTATE
            <div>THE NAME IS = {name}</div>
            <button type="button" className="btn btn-primary btn-sm btn-block" onClick={handleClickSetState}>CLICK HERE TO SET NAME / STATE</button><br />
        </div>
    )

}

// useEfect in fuctional component
export const UsinngUseEfffect = () => {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(50);

    const handleIncreament = () => {
        setCountOne(countOne + 1)
    }

    const handleDecrement = () => {
        setCountTwo(countTwo - 1)
    }

    useEffect(() => {
        console.log("user effect always called");
    })

    useEffect(() => {
        console.log("user effect called once, when page render");
    }, [])

    useEffect(() => {
        console.log("user effect called for only countTwo");
    }, [countTwo])


    return (
        <div className="col-sm-3 text-center border border-2 border-black">
            THIS IS INITIALIZATION OF USEEFECT
            <div>
                COUNT ONE = {countOne}<button type="button" className="btn btn-primary btn-sm btn-block" onClick={handleIncreament}>CLICK HERE TO INCREMENT</button> <br />
                COUNT TWO = {countTwo}<button type="button" className="btn btn-primary btn-sm btn-block" onClick={handleDecrement}>CLICK HERE TO DECREMENT</button>
            </div>
        </div>
    )
}

// export const UsingUseMemo = () => {
//     const [countOne, setCountOne] = useState(0);
//     const [countTwo, setCountTwo] = useState(10);
//     const handleIncreament = () => {
//         setCountOne(countOne + 1)
//     }

//     const checkData = useMemo(() => {
//         console.log(countTwo)
//         return (
//             setCountTwo(countTwo+1)
//         )
//     }, [countOne])

//     return (
//         <div className="col-sm-3 text-center border border-2 border-black">
//             THIS IS INITIALIZATION OF USESTATE
//             <div>
//                 COUNT {countOne}<br />
//                 <button type="button" className="btn btn-primary btn-sm btn-block" onClick={handleIncreament}>CLICK HERE TO INCREMENT</button>
//             </div>
//             <ChildComponentHooksDemoOne countTwo={checkData} />
//         </div>
//     )

// }

// export const UsinngUseCallback = () => {
//     const [countOne, setCountOne] = useState(0);
//     const [countTwo, setCountTwo] = useState([]);

//     const handleIncreament = () => {
//         setCountOne(countOne + 1)
//     }

//     const AddTodo = useCallback(() => {
//         setCountTwo((prev) => [...prev, 'New Entry']);
//     },[])


//     // const AddTodo = () => {
//     //     setCountTwo((prev) => [...prev, 'New Entry']);
//     // }


//     return (
//         <div className="col-sm-3 text-center border border-2 border-black">
//             THIS IS INITIALIZATION OF USESTATE
//             <div>
//                 COUNT {countOne}<br />
//                 <button type="button" className="btn btn-primary btn-sm btn-block" onClick={handleIncreament}>CLICK HERE TO INCREMENT</button>
//             </div>
//             <ChildComponentHooksDemoTwo countTwo={countTwo} AddTodo={AddTodo} />
//         </div>
//     )
// }
