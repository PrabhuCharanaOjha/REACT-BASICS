import {createContext, useState} from 'react'
import {ThisIsTheClassComponent, ThisIsClassComponentWithProps, ThisIsClassComponentStateWithOutConstructor, ThisIsClassComponentStateWithConstructor, ThisIsClassComponentWithButtonClickEvent, ThisIsFunctionalComponent, ThisIsArrowFunctionComponent, LiftingStateUpExample, LifeCycleMethodMounting, LifeCycleMethodUpdating, LifeCycleMethodUnmountingOne, ArrowFunctionWithUseEffet, UseCallbackEffectWithArrowFun, UseMemoEffectWithArrowFun, UseRefEffectWithArrowFun, ContextApiTestOne} from "./test1"
import {TimmerComponent, DisableEnableButon, ShowHideElement, DataBiningExample,DynamicAddChildComponent, StateUnderDistrictExapmle, AddDynammicRowAndWithDelete, DarkTheme, DataTableInit} from './taskPractice'
export const MainCounter = createContext();
export function BaseComponentMainPageTwo(){
	const[count, setCount] = useState(0);

	const handleIncriment = () => {
		setCount(count+1)
	}

	const handleDecriment = () => {
		setCount(count-1)
	}

	return(
		<MainCounter.Provider value={{count, setCount, handleIncriment, handleDecriment}}>
			<div className="container">
				{/* <ThisIsTheClassComponent/> */}
				{/* <ThisIsClassComponentWithProps name="putul"/> */}
				{/* <ThisIsClassComponentStateWithOutConstructor age="25" /> */}
				{/* <ThisIsClassComponentStateWithConstructor age="25" /> */}
				{/* <ThisIsClassComponentWithButtonClickEvent /> */}
				{/* <ThisIsFunctionalComponent name="sonu" age="25" /> */}
				{/* <ThisIsArrowFunctionComponent name="sonu" age="25" /> */}
				{/* <div>main count => {count}</div> */}
				{/* <LiftingStateUpExample count={count} handleIncriment={handleIncriment} handleDecriment={handleDecriment}/> */}
				{/* <LifeCycleMethodMounting age="25" /> */}
				{/* <LifeCycleMethodUpdating/> */}
				{/* <LifeCycleMethodUnmountingOne/> */}
				{/* <ArrowFunctionWithUseEffet/> */}
				{/* <UseCallbackEffectWithArrowFun/> */}
				{/* <UseMemoEffectWithArrowFun/> */}
				{/* <UseRefEffectWithArrowFun/> */}
				{/* <ContextApiTestOne count={count} handleIncriment={handleIncriment} handleDecriment={handleDecriment}/> */}
				<TimmerComponent />
				{/* <DisableEnableButon /> */}
				{/* <ShowHideElement/> */}
				{/* <DataBiningExample/> */}
				{/* <DynamicAddChildComponent/> */}
				{/* <StateUnderDistrictExapmle/> */}
				{/* <AddDynammicRowAndWithDelete/> */}
				<DarkTheme/>
				<DataTableInit/>

			</div>
		</MainCounter.Provider>
	)
}