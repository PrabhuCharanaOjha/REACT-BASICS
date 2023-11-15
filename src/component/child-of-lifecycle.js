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