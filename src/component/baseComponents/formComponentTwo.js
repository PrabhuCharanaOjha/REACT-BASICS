import React, { useState } from 'react'
import DatePicker from 'react-datepicker';

// import { Component } from "react";

export const AddNewRow = () => {
    const [mainRow, setMainRow] = useState([0])
    const [datePicker, setDatePicker] = useState(new Date())
    const [timePicker, setTimePicker] = useState(new Date())

    const [isButtonVisible, setButtonVisibility] = useState(true);

    const [isButtonEnabled, setButtonEnabled] = useState(true);

    const handleDisableButton = () => {
        setButtonEnabled(false);
    }

    const handleEnableButton = () => {
        setButtonEnabled(true);
    }

    const handleButtonClick = () => {
        setButtonVisibility(!isButtonVisible);
    }

    const AddNewRowFun = (e) => {
        setMainRow([...mainRow, mainRow[mainRow.length - 1] + 1])
        console.log(e.target)
    }
    const RemoveRowFun = (key) => {
        console.log(key);
        setMainRow(mainRow.filter((item) => item !== key))
    }


    return (
        <div>
            <table className="table table-striped table-inverse table-responsive">
                <thead className="thead-inverse">
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {mainRow.map((value, index) => (
                        <tr key={value}>
                            <td>
                                <div className="form-group">
                                    <label htmlFor="">User Name</label>
                                    <input type="text" name="userName" id="userName" className="form-control" />
                                </div>
                            </td>
                            <td>
                                <div className="form-group">
                                    <label htmlFor="">User Date of Birth</label>
                                    <DatePicker dateFormat="d-MM-yyyy" className="form-control" selected={datePicker} onChange={(date) => setDatePicker(date)} />
                                </div>
                            </td>
                            <td>
                                <div className="form-group">
                                    <label htmlFor="">User Time</label>
                                    <DatePicker showTimeSelect showTimeSelectOnly timeFormat="h:mm aa" timeCaption="Time" dateFormat="h:mm aa" className="form-control" selected={timePicker} onChange={(time) => setTimePicker(time)} />
                                </div>
                            </td>
                            <td>
                                <button type="button" name="" id={value} className="btn btn-primary btn-sm btn-block" onClick={AddNewRowFun}>Add</button>
                                {index === 0 ? (<button type="button" name="" id={value} className="btn btn-danger btn-sm btn-block" onClick={() => RemoveRowFun(value)} disabled>Remove</button>) : (<button type="button" name="" id={value} className="btn btn-danger btn-sm btn-block" onClick={() => RemoveRowFun(value)}>Remove</button>)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button onClick={handleButtonClick}>Toggle Button</button>

                {isButtonVisible && (
                    <button>Button to Hide/Show</button>
                )}
            </div>

            <div>
                <button onClick={handleDisableButton}>Disable Button</button>
                <button onClick={handleEnableButton}>Enable Button</button>

                <button disabled={!isButtonEnabled}>My Button</button>
            </div>
        </div>
    )
}

// export class AddNewRow extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             inputFields: [''], // Initialize with one input field
//         };
//     }

//     handleAddInputField = () => {
//         this.setState((prevState) => ({
//             inputFields: [...prevState.inputFields, ''], // Add a new empty input field
//         }));
//     }

//     handleChangeInput = (index, event) => {
//         const updatedInputFields = [...this.state.inputFields];
//         updatedInputFields[index] = event.target.value;
//         this.setState({ inputFields: updatedInputFields });
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleAddInputField}>Add Input Field</button>
//                 {this.state.inputFields.map((value, index) => (
//                     <input
//                         key={index}
//                         type="text"
//                         value={value}
//                         onChange={(e) => this.handleChangeInput(index, e)}
//                     />
//                 ))}
//             </div>
//         );
//     }
// }