import React,{useContext} from 'react'
import {MainCounter} from './baseComponentMainPageTwo'
export const Test4 = () => {

	const {count, setCount, handleIncriment, handleDecriment} = useContext(MainCounter)
	return(
		<>
		<h1>this test 4 counter is {count}</h1>
		</>
	)
}