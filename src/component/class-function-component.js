import { Component } from "react";
import PropTypes from 'prop-types';

// class component example without props
export class ClassComponentWithoutProps extends Component {
    render() {
        return (
            <div className="col-sm-3 text-center border border-2 border-black">THIS IS THE CLASS COMPONENT WITHOUT PROPS</div>
        )
    }
}

// class component example with props
export class ClassComponentWithProps extends Component {
    render() {
        return (
            <div className="col-sm-3 text-center border border-2 border-black">
                THIS IS THE CLASS COMPONENT WITH PROPS, THE PROPS IS
                <span className="text-danger"> {this.props.name}</span>
                <span className="text-danger"> {this.props.age}</span>
            </div>
        )
    }
}

// set props data type
ClassComponentWithProps.propTypes = {
    name: PropTypes.string,
}
// set props default values
ClassComponentWithProps.defaultProps = {
    age: ", AND THIS IS DEFAULT PROPS"
}

// state declair in class component without constructor
export class StateWithoutConstructor extends Component {
    state = {
        name: "SONU",
        age: this.props.age
    }
    render() {
        return (
            <div className="col-sm-3 text-center border border-2 border-black">
                THIS IS THE STATE WITHOUT CONSTRUCTOR IN CLASS COMPONENT
                <span className="text-danger">  NAME: {this.state.name}</span>
                <span className="text-danger"> AGE: {this.state.age}</span>
            </div>
        )
    }
}

// state declair in class component with constructor
export class StateWithoConstructor extends Component {
    constructor(props) {
        super(props);
        // create state
        this.state = {
            name: "SONU",
            age: this.props.age,
        }
    }

    // ho to handle function in class component
    handleClick = () => {
        if (this.state.name === "SONU") {
            // update state
            this.setState({
                name: "SEEMA",
                age: 23,
            })
        } else {
            this.setState({ age: 30 });
            console.log(this.state.name);
            this.setState({ name: 'SONU' });
        }
    }

    render() {
        return (
            <div className="col-sm-3 text-center border border-2 border-black">
                THIS IS THE STATE WITH CONSTRUCTOR IN CLASS COMPONENT
                <span className="text-danger">  NAME: {this.state.name}</span>
                <span className="text-danger"> AGE: {this.state.age}</span>
                <button type="button" className="btn btn-primary btn-sm btn-block" onClick={this.handleClick}>CLICK HERE</button>
            </div>
        )
    }
}


// passing argument to a function using class component
export class PassArgumentToFunction extends Component {

    handleClick = (value1, value2) => {
        alert("User name is " + value1 + " , and age is " + value2);
    }

    render() {
        return (
            <div className="col-sm-3 text-center border border-2 border-black">
                IN THIS CLASS COMPONENT WE PASS ARGUMENT TO A FUNCTION
                <button type="button" className="btn btn-primary btn-sm btn-block" onClick={() => this.handleClick('sonu', 26)}>CLICK HERE</button>
            </div>
        )
    }
}



// funntional component with arrow method with out Props
export const FunctionalComponentWithArrowWithoutProps = () => {
    function handleClick(e) {
        e.preventDefault(); //it stop the deault behaviour
        alert("Button Clicked");
    }
    return (
        <div className="col-sm-3 text-center border border-2 border-black">
            THIS IS FUNCTIONAL COMPONENT WITH OUT PROPS
            <a href="https://www.npmjs.com/package/prop-types" className="btn btn-primary btn-sm btn-block" onClick={handleClick}>
                CLICK HERE
            </a>
        </div>
    )
}

// funntional component with arrow method with Props
export const FunctionalComponentWithArrowWithProps = (props) => {
    function handleClick(name) {
        alert("Button Clicked, and the name is "+name);
    }
    return (
        <div className="col-sm-3 text-center border border-2 border-black">
            THIS IS FUNCTIONAL COMPONENT WITH PROPS 
            <button type="button" className="btn btn-primary btn-sm btn-block" onClick={() => handleClick(props.name)}>
                CLICK HERE
            </button>
        </div>
    )
}

