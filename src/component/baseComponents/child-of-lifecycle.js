/*
LIFECYCLE METHOD
1.MOUNTING
     i => constructor
     ii => static getDerivedStateFromProps
     iii => render
     iv => componentDidMount
2.UPDATING
    i => static getDerivedStateFromProps
    ii => shouldComponentUpdate
    iii => render
    iv => getSnapshotBeforeUpdate
    v => componentDidUpdate
3.Unmounting 
    i => componentWillUnmount
*/

import { Component } from "react";

// ==================================================================
// UPDATING START
// ==================================================================
export class LifeCycleMethodUpdatingChild extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            mroll:this.props.roll
        }
    }
    
    // getDerivedStateFromProps generally used for update the state using props value, because you can't directly update the state using props value
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps called 1");
        console.log(props,state);
        return {mroll:props.roll}
    }

    // it allow to you, component update or not. by using true and false, if you want to update the component then return true else return false
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate called 2");
        console.log(nextProps, nextState);
        return true;
    }
    
    // just before component update
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate called 4");
        console.log(prevProps, prevState);
        return 45;
    }
    
    // after component update
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("componentDidUpdate called 5");
        console.log(prevProps, prevState, snapshot);
    }
    render(){
        console.log("child of life cycle page's updateing render method called 3");
        return(
            <h3 className="text-center">
                THIS IS CHILD OF LIFECYCE UPDATEING METHOD, MROLL IS {this.state.mroll}
            </h3>
        )
    }
}
// ==================================================================
// UPDATING START
// ==================================================================


export class MountMethod extends Component{
    componentDidMount() {
        // get data from server and set the data to state
        console.log("componentDidMount mounted");
    }

    render(){
        return(
            <h3 className="text-center">
                THIS COMPONENT IS MOUNTED
            </h3>
        )
    }
}
export class UnmountMethod extends Component{
    componentWillUnmount(){
        console.log("componentDidMount unMounted");
    }
    render(){
        return(
            <h3 className="text-center">
                THIS COMPONENT IS UNMOUNTED
            </h3>
        )
    }
}



// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================


export class UpdatingLyfeCycleTest2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            roll:this.props.roll
        }
    }


    // getDerivedStateFromProps carry props and value, we used this because while props value updated by parent omponent in state is not updated mean this.state.roll is not showing update value, by using getDerivedStateFromProps we update the state.

    // getDerivedStateFromProps generally used for update the state using props value, because you can't directly update the state value while props value is updated

    static getDerivedStateFromProps(props, state){
        console.log("static getDerivedStateFromProps called");
        // console.log(props, state);
        if(props.roll !== state.roll){
            return {roll:props.roll}
        }
        return null;
    }


    // it helps you to render component after update the state/props, if u want to render then return true else return false
    // it run before render method
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate called before render");
        // console.log(" nextProps=> ",nextProps," nextState=> ",nextState );
        if(nextState.roll < 107){
            return true;
        }else{
            return false;
        }
    }


    // it run before just before update
    getSnapshotBeforeUpdate(pervProps, prevState){
        console.log("getSnapshotBeforeUpdate called");
        console.log(" pervProps=> ",pervProps," prevState=> ",prevState )
        return 45;
    }

    // it run before just after update
    componentDidUpdate(pervProps, prevState, snapshot){
        console.log("componentDidUpdate called");
        console.log(" pervProps=> ",pervProps," prevState=> ",prevState," snapshot=> ",snapshot )
    }

    render(){
        console.log("render called");
        return(
            <>
                hi i am UpdatingLyfeCycleTest2, and my roll number is {this.state.roll}
            </>
        )
    }
}