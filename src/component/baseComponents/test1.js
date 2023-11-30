import { Component, useState, useEffect, useCallback, useMemo, useRef } from "react";
import { UpdatingLyfeCycleTest2 } from "./child-of-lifecycle";
import {Test2} from './test2'


export class ThisIsTheClassComponent extends Component {
	render() {
		return <h1>hi this is class comonent</h1>;
	}
}

export class ThisIsClassComponentWithProps extends Component {
	render() {
		return <h1>hi my name is {this.props.name}</h1>;
	}
}

export class ThisIsClassComponentStateWithOutConstructor extends Component {
	state = {
		name: "sonu",
		age: this.props.age,
	};

	render() {
		return (
			<h1>
				hi my name is {this.state.name}, and my age is {this.state.age}. we get this state without constructor
			</h1>
		);
	}
}

export class ThisIsClassComponentStateWithConstructor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "sonu",
			age: this.props.age,
		};
	}
	render() {
		return (
			<h1>
				hi my name is {this.state.name}, and my age {this.state.age}. we get this state with constructor
			</h1>
		);
	}
}

export class ThisIsClassComponentWithButtonClickEvent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "sonu",
			age: "36",
		};
	}

	handleClick() {
		if (this.state.age === "36") {
			this.setState({ age: "26" });
		} else {
			this.setState({ age: "36" });
		}
	}

	render() {
		return (
			<>
				<h1>
					hi my name is {this.state.name}, and my age {this.state.age}. we get this state with constructor
				</h1>

				<button type="button" className="btn btn-sm btn-warning" onClick={() => this.handleClick()}>
					click here to change age
				</button>
			</>
		);
	}
}

export function ThisIsFunctionalComponent(props) {
	return (
		<h1>
			hi my name is {props.name}, and my age {props.age}. we get this value / props using functional componet
		</h1>
	);
}

export const ThisIsArrowFunctionComponent = (props) => {
	return (
		<h1>
			hi my name is {props.name}, and my age {props.age}. we get this value / props using Arrow function componet
		</h1>
	);
};

export const LiftingStateUpExample = (props) => {
	return (
		<>
			<button type="button" onClick={() => props.handleDecriment()}>
				decriment
			</button>
			{props.count}
			<button type="button" onClick={() => props.handleIncriment()}>
				incriment
			</button>
		</>
	);
};

//============================================================================================================
//============================================================================================================
//============================================================================================================
//============================================================================================================

// ============================================================================================================
//Mounting start
//============================================================================================================
// Mounting
// 		i = constructor
//		ii = getDerivedStateFromProps
//		iii = render method
//		iv = componentDidMount

export class LifeCycleMethodMounting extends Component {
	// i = constructor called 1st
	constructor(props) {
		super(props);
		this.state = {
			name: "sonu",
			age: this.props.age,
		};
		// console.log("constructor called... 1st")
	}

	// ii = static getDerivedStateFromProps called 2nd ant it carry state and props
	static getDerivedStateFromProps(props, state) {
		// console.log("getDerivedStateFromProps called... 2nd");
		// console.log("props => ",props);
		// console.log("state => ",state);
		return null;
	}

	// iv = componentDidMount called after component mounted
	componentDidMount() {
		// console.log("componentDidMount called... 4th");
	}

	render() {
		// iii = render method called 3rd
		// console.log("render called... 3rd");
		return (
			<h1>
				hi my name is {this.state.name}, and my age is {this.state.age}
			</h1>
		);
	}
}
// ============================================================================================================
//Mounting end
//============================================================================================================

// ============================================================================================================
//updating start
//============================================================================================================
// updateing
//		i = static getDerivedStateFromProps
//		ii = shouldComponentUpdate
//		iii = render
//		iv = getSnapshotBeforeUpdate
//		v = componentDidUpdate

export class LifeCycleMethodUpdating extends Component {
	constructor() {
		super();
		this.state = {
			roll: 102,
		};
	}

	handleIncriment = () => {
		this.setState({ roll: this.state.roll + 1 });
	};

	render() {
		return (
			<>
				<UpdatingLyfeCycleTest2 roll={this.state.roll} />
				<button type="button" onClick={() => this.handleIncriment()}>
					incriment
				</button>
			</>
		);
	}
}

// ============================================================================================================
//updating end
//============================================================================================================

// ============================================================================================================
//unmounting start
//============================================================================================================
// unmounting
//		i = componentWillUnmount

export class LifeCycleMethodUnmountingOne extends Component {
	constructor() {
		super();
		this.state = {
			active: false,
		};
	}
	handleClick() {
		if (this.state.active) {
			this.setState({ active: false });
		} else {
			this.setState({ active: true });
		}
	}
	render() {
		return (
			<>
				<button type="button" className="btn btn-sm btn-info" onClick={() => this.handleClick()}>
					Mount / Unmount
				</button>
				{this.state.active ? <LifeCycleMethodUnmountingTwo /> : null}
			</>
		);
	}
}

class LifeCycleMethodUnmountingTwo extends Component {
	// 	componentDidMount() {
	// 		console.log("component mounted");
	// 	}
	//
	// 	// unmount called before component removed
	// 	componentWillUnmount() {
	// 		console.log("component unmounted");
	// 	}
	render() {
		return <h1>chield for mounting unmounting</h1>;
	}
}

// ============================================================================================================
//unmounting end
//============================================================================================================

//============================================================================================================
//hooks start
//============================================================================================================

export const ArrowFunctionWithUseEffet = () => {
	const [countOne, setCountOne] = useState(0);
	const [countTwo, setCountTwo] = useState(50);

	const handleIncrement = () => {
		setCountOne(countOne + 1);
	};

	const handleDecrement = () => {
		setCountTwo(countTwo - 1);
	};

	useEffect(() => {
		console.log("use effect call for every one");
	});
	useEffect(() => {
		console.log("use effect call for, while countTwo will change");
	}, [countTwo]);

	return (
		<>
			<button type="button" className="btn btn-sm btn-info" onClick={() => handleIncrement()}>
				increment
			</button>{" "}
			value = {countOne} <br />
			<button type="button" className="btn btn-sm btn-info" onClick={() => handleDecrement()}>
				dncrement
			</button>{" "}
			value = {countTwo} <br />
		</>
	);
};

export const UseCallbackEffectWithArrowFun = () => {
	const [count, setCount] = useState(0);
	const [todos, setTodos] = useState([]);

	const increment = () => {
		setCount((c) => c + 1);
	};

	// const addTodo = () => {
	//   setTodos((t) => [...t, "New Todo"]);
	// };

	const addTodo = useCallback(() => {
		setTodos((t) => [...t, "New Todo"]);
	}, [todos]);

	return (
		<>
			<Todos todos={todos} addTodo={addTodo} />
			<hr />
			<div>
				Count: {count}
				<button onClick={increment}>+</button>
			</div>
		</>
	);
};

export const Todos = ({ todos, addTodo }) => {
	console.log("child render");
	return (
		<>
			<h2>My Todos</h2>
			{todos.map((todo, index) => {
				return <p key={index}>{todo}</p>;
			})}
			<button onClick={addTodo}>Add Todo</button>
		</>
	);
};

export const UseMemoEffectWithArrowFun = () => {

	const [count, setCount] = useState(0);
	const [active, setActive] = useState(false);


	// const expensiveCalculation = (num) => {
	// 	console.log("Calculating...");
	// 	for (let i = 0; i < 1000000000; i++) {
	// 		num += 1;
	// 	}
	// 	return num;
	// };

	const handleClick = () => {
		return setCount(count+1);
	}

	// const checkData = useMemo(() => {
	// 	return expensiveCalculation(count);
	// }, [count])

	return(
			<>
				<button onClick={handleClick}>counter</button>
				{/* <p>my new number = {checkData}</p> */}
				<button onClick={() => setActive(!active)}>
				{active? "You clicked me" : "click me please"}					
				</button>
			</>
	)


}



export const UseRefEffectWithArrowFun = () => {
	// const [count, setCount] = useState();
	const [val, setVal] = useState("");

	// useEffect(() => {
	// 	setCount(count+1)
	// })

	const count = useRef(0);
	const inputName = useRef("");
	console.log(count);

	useEffect(() => {
		count.current = count.current+1;
	})

	const handleClick = () => {
		console.log(inputName.current.value);
	}

	return(
			<h1>
				hi count = {count.current.value}

				<input type="text" name="inputName" ref={inputName} value={val} onChange={(e) => {setVal(e.target.value)}}/>
				<button onClick={handleClick}>get value</button>
			</h1>
	)
}



export const ContextApiTestOne = (props) => {

	return(
		<>
			<h1>Count  = {props.count}</h1>
			<button onClick={props.handleIncriment}>increment</button>
			<button onClick={props.handleIncriment}>increment</button>
			<Test2/>
		</>
	)
}


