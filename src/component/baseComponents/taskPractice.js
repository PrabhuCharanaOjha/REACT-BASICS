import React, { useState, Component } from "react";

export const TimmerComponent = () => {
    const [timmer, setTimmer] = useState(0);
    const [active, setActive] = useState(0);

    const startFun = () => {
        setActive(
            setInterval(() => {
                setTimmer((prev) => prev + 1);
            }, 1000),
        );
        console.log("start function called");
    };
    const pauseFun = () => {
        clearInterval(active);
        console.log("pause function called");
    };
    const resetFun = () => {
        clearInterval(active);
        setTimmer(0)
        console.log("reset function called");
    };

    return (
        <>
            {timmer}
            <br />

            <button type="btn btn-sm btn-info" onClick={() => startFun()}>
                Start
            </button>
            <button type="btn btn-sm btn-warning" onClick={() => pauseFun()}>
                Pause
            </button>
            <button type="btn btn-sm btn-danger" onClick={() => resetFun()}>
                Reset
            </button>
        </>
    );
};


export class DisableEnableButon extends Component{

    constructor(){
        super();
        this.state = {
            isDisable:false,
        }
    }

    enableDisableButton(){
        this.setState({
            isDisable:!this.state.isDisable,
        })
    }

    render(){
        return(
            <>
            hi
                <button type="button" onClick={this.enableDisableButton.bind(this)}>Enable / Disable</button>
                <button type="button" disabled={this.state.isDisable}>Enable / Disable Button</button>

            </>
        )
    }

}

export const ShowHideElement = () => {
    const [showHide, setShowHide] = useState(false)

    const showHideFun = () => {
        setShowHide(!showHide);
    }

    return(
        <>
            {showHide?<TestComponetForShowHide/>: <h1>Component is already hide</h1>} 

            <button type="button" onClick={() => showHideFun()}>Show / Hide</button>          
        </>
    )
}

export const TestComponetForShowHide = () => {

    return(
        <h1>Hi, this component is for tesing show hide component</h1>
    )
}


export const DataBiningExample = () => {
    const [name, setName] = useState("");

    const handleChange = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
    }

    return(
        <h1>            
            <input type="text" id="name" name="name"  onChange={(e) => handleChange(e)} />
            <p><b>{name}</b></p>
        </h1>
    )
}

export const DynamicAddChildComponent = () => {
    const [mainArr, setMainArr] = useState({
        newData:[]
    });

    const handleClick = () => {
        setMainArr({...mainArr,
            newData:[...mainArr.newData, "newData"]
    })
        console.log(mainArr);
    }

    return(
        <>
            
            <button type="button" onClick={() => handleClick()}>button clicked</button>
        </>
    )
}