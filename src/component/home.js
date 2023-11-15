import { ClassComponentWithProps, ClassComponentWithoutProps, FunctionalComponentWithArrowWithProps, FunctionalComponentWithArrowWithoutProps, PassArgumentToFunction, StateWithoConstructor, StateWithoutConstructor } from "./class-function-component"
import { LifeCycleMethodMounting, LifeCycleMethodUnmounting, LifeCycleMethodUpdating } from "./life-cycle-method"
import { CreateingUseState, UsinngUseEfffect } from "./react-hooks"
import { AllFormFieldGetSetData } from './formComponentOne';
import { AddNewRow } from "./formComponentTwo";
import { FunctionComponentLifeCycle } from "./life-cycle-function-component";
import Rahul from "./higherOrderComponent/rahul";
import Sonam from "./higherOrderComponent/sonam";
import { Counter } from "../features/counter/counter";

export const Home = () => {
    return (
        <div className="container">

            <div className="row border border-5 border-black py-3">
                <h1 className="text-center">HOME PAGE</h1>
                <div className="row">
                    <h1>CLASS COMPONENT AND FUNCTION COMPONENT</h1>
                    <ClassComponentWithoutProps />
                    <ClassComponentWithProps name="ClassComponentWithProps" />
                    <StateWithoutConstructor age='25' />
                    <StateWithoConstructor age="26" />
                    <PassArgumentToFunction />
                    <FunctionalComponentWithArrowWithoutProps />
                    <FunctionalComponentWithArrowWithProps name="sonu" />
                </div>
                <div className="row">
                    <h1 className="text-center">CLASS COMPONENT LIFECYCLE METHOD</h1>
                    <LifeCycleMethodMounting age="26" />
                    <LifeCycleMethodUpdating />
                    <LifeCycleMethodUnmounting />
                </div>
                <div className="row">
                    <h1 className="text-center">FUNCTION COMPONENT HOOKS</h1>
                    <CreateingUseState />
                    <UsinngUseEfffect />
                    <FunctionComponentLifeCycle/>
                </div>
                <div className="row">
                    <h1 className="text-center">FORM SUBMIT</h1>
                    <AllFormFieldGetSetData />
                </div>
                <div className="row">
                    <h1 className="text-center">FORM ADD ROW FUNCTION</h1>
                    <AddNewRow/>
                </div>
                <div className="row">
                    <h1 className="text-center">HIGHER ORDER COMPONENT</h1>
                    <Rahul/>
                    <Sonam/>
                </div>
                <div>
                    <Counter/>
                </div>

            </div>
        </div>
    )
}