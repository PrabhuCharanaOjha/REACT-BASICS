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
import { LifeCycleMethodUpdatingChild, MountMethod, UnmountMethod } from "./child-of-lifecycle";

// ==================================================================
// MOUNTING START
// ==================================================================
export class LifeCycleMethodMounting extends Component {
    constructor(props) {
        super(props);
        console.log("life-cycle-method Contructor called 1")
        this.state = {
            name: "SONU",
            age: this.props.age
        }
    }

    static getDerivedStateFromProps(props, state) {
        // it hold the value of all props and states
        console.log("getDerivedStateFromProps called 2");
        // console.log(props, state);
        return null;
    }

    componentDidMount() {
        // get data from server and set the data to state
        console.log("componentDidMount method called 4")
    }

    render() {
        console.log("render method called 3")
        return (
            <div className="col-sm-3 text-center border border-2 border-black">
                IN THIS CLASS COMPONENT WE DESCRIBE LIFECYCLE MOUNTING METHOD
            </div>
        )
    }
}
// ==================================================================
// MOUNTING END
// ==================================================================


// ==================================================================
// UPDATING START
// ==================================================================

// go to child of lifecycle page
export class LifeCycleMethodUpdating extends Component {
    constructor() {
        super();
        this.state = {
            roll: 101
        }
    }

    handleClick = () => {
        this.setState({ roll: this.state.roll + 1 })
    }

    render() {

        console.log("life cycle page's updateing render method called");
        return (
            <div className="col-sm-3 text-center border border-2 border-black">
                IN THIS CLASS COMPONENT WE DESCRIBE LIFECYCLE UPDATEING METHOD
                <LifeCycleMethodUpdatingChild roll={this.state.roll} />
                <button type="button" className="btn btn-primary btn-sm btn-block" onClick={this.handleClick}>CLICK HERE</button><br />
                <small>getDerivedStateFromProps generally used for update the state using props value, because you can't directly update the state using props value</small>
            </div>
        )
    }
}
// ==================================================================
// UPDATING END
// ==================================================================

// ==================================================================
// UNMOUNTING START
// ==================================================================
export class LifeCycleMethodUnmounting extends Component {
    constructor() {
        super();
        this.state = {
            isMounted: false,
        }
    }

    handleClickMount = () => {
        this.setState({ isMounted: true });
    }

    handleClickUnmount = () => {
        this.setState({ isMounted: false });
    }


    render() {
        return (
            <div className="col-sm-3 text-center border border-2 border-black">
                IN THIS CLASS COMPONENT WE DESCRIBE LIFECYCLE UNMOUNTING METHOD
                <div id="uniqueId">{this.state.isMounted}</div>
                <button type="button" className="btn btn-primary btn-sm btn-block" onClick={this.handleClickMount}>CLICK HERE TO MOUNT</button><br />
                <button type="button" className="btn btn-primary btn-sm btn-block" onClick={this.handleClickUnmount}>CLICK HERE TO UNMOUNT</button><br />
                {this.state.isMounted ? <MountMethod/> : <UnmountMethod/>}

            </div>
        )
    }
}
// ==================================================================
// UNMOUNTING END
// ==================================================================
