import React, { useState, useEffect, Component, useMemo } from "react";
import DataTable from "react-data-table-component";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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
        setTimmer(0);
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

export class DisableEnableButon extends Component {
    constructor() {
        super();
        this.state = {
            isDisable: false,
        };
    }

    enableDisableButton() {
        this.setState({
            isDisable: !this.state.isDisable,
        });
    }

    render() {
        return (
            <>
                hi
                <button type="button" onClick={this.enableDisableButton.bind(this)}>
                    Enable / Disable
                </button>
                <button type="button" disabled={this.state.isDisable}>
                    Enable / Disable Button
                </button>
            </>
        );
    }
}

export const ShowHideElement = () => {
    const [showHide, setShowHide] = useState(false);

    const showHideFun = () => {
        setShowHide(!showHide);
    };

    return (
        <>
            {showHide ? <TestComponetForShowHide /> : <h1>Component is already hide</h1>}

            <button type="button" onClick={() => showHideFun()}>
                Show / Hide
            </button>
        </>
    );
};

export const TestComponetForShowHide = () => {
    return <h1>Hi, this component is for tesing show hide component</h1>;
};

export const DataBiningExample = () => {
    const [name, setName] = useState("");

    const handleChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    };

    return (
        <h1>
            <input type="text" id="name" name="name" onChange={(e) => handleChange(e)} />
            <p>
                <b>{name}</b>
            </p>
        </h1>
    );
};

export const DynamicAddChildComponent = () => {
    const [mainArr, setMainArr] = useState({
        newData: [],
    });

    const handleClick = () => {
        setMainArr({ ...mainArr, newData: [...mainArr.newData, "newData"] });
        console.log(mainArr);
    };

    return (
        <>
            <button type="button" onClick={() => handleClick()}>
                button clicked
            </button>
        </>
    );
};

export const StateUnderDistrictExapmle = () => {
    const [city, setCity] = useState([]);
    const datas = [
        {
            name: "sonu",
            id: 15,
            city: [
                { cityKey: "1", cityName: "cuttack" },
                { cityKey: "2", cityName: "bhubaneswar" },
                { cityKey: "3", cityName: "khorda" },
                { cityKey: "4", cityName: "salipur" },
            ],
        },
        {
            name: "seema",
            id: 20,
            city: [
                { cityKey: "1", cityName: "sankarpur" },
                { cityKey: "2", cityName: "madhyakachha" },
                { cityKey: "3", cityName: "purbakachha" },
                { cityKey: "4", cityName: "paschimakachha" },
            ],
        },
        {
            name: "reema",
            id: 25,
            city: [
                { cityKey: "1", cityName: "rajastan" },
                { cityKey: "2", cityName: "hariana" },
                { cityKey: "3", cityName: "delhi" },
                { cityKey: "4", cityName: "noida" },
            ],
        },
    ];

    const getId = (e) => {
        datas.filter((data) => {
            // console.log(data.id)
            if (data.id == e.target.value) {
                setCity(data.city);
            }
        });
    };

    return (
        <>
            <select name="name" onChange={(e) => getId(e)}>
                <option value="">--SELECT--</option>
                {datas.map((data, index) => {
                    return <option value={data.id}>{data.name}</option>;
                })}
            </select>

            <select name="city">
                <option value="">--SELECT--</option>
                {city.map((data, index) => {
                    return <option value={data.cityKey}>{data.cityName}</option>;
                })}
            </select>
        </>
    );
};

export const AddDynammicRowAndWithDelete = () => {
    const [arr, setArr] = useState([1]);
    const [mainArr, setMainArr] = useState({
        test_1: "",
    });
    const [errorArr, setErrorArr] = useState({});
    const [login, setLogin] = useState(false);

    const AddRow = () => {
        var num = arr.at(-1) + 1;
        setMainArr({ ...mainArr, ["test_" + num]: "" });
        setArr([...arr, num]);
    };

    const RemoveRow = (val) => {
        setArr(arr.filter((item) => item != val));

        var filterData = Object.keys(mainArr).reduce((result, key) => {
            if (!["test_" + val].includes(key)) {
                result[key] = mainArr[key];
            }
            return result;
        }, {});

        console.log(filterData);
        setMainArr(filterData);
    };

    const handleChange = (val) => {
        setMainArr({ ...mainArr, [val.target.name]: val.target.value });
    };

    const validateForm = () => {
        // console.log(mainArr);
        setErrorArr({});
        const errormsg = Object.keys(mainArr)
            .filter((key) => {
                if (mainArr[key] === "") {
                    // console.log(key+" inputs field value is blank")
                    return key;
                }
            })
            .map((data) => {
                setErrorArr({ ...errorArr, [data]: data + " inputs field value is blank" });
            });
    };

    const viewData = () => {
        // console.log(mainArr);
        validateForm(mainArr);
    };

    useEffect(() => {
        if (Object.keys(errorArr).length === 0) {
            setLogin(true);
            console.log(true);
        }
    }, [errorArr]);

    // console.log(Object.keys(errorArr).length)

    return (
        <>
            {arr.map((data, index) => {
                return (
                    <div key={index}>
                        <span>
                            <input type="text" name={"test_" + data} value={mainArr["test_" + data]} onChange={(e) => handleChange(e)} />
                            hi i am {data}
                        </span>
                        <button type="button" onClick={() => AddRow()}>
                            Add
                        </button>
                        <button type="button" onClick={() => RemoveRow(data)}>
                            Delete
                        </button>
                        {/* <div className="invalid-feedback">{errorArr["test_" + data]}</div> */}
                        <strong className="invalid-feedback">{errorArr["test_" + data]}</strong>
                    </div>
                );
            })}

            <button type="button" onClick={() => viewData()}>
                View Data
            </button>
        </>
    );
};

export const DarkTheme = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        if (dark) {
            document.body.classList.add("darkMode");
        } else {
            document.body.classList.remove("darkMode");
        }
    }, [dark]);

    return (
        <>
            <button onClick={() => setDark(!dark)}>{dark ? "White" : "dark"}</button>
            <p>hi this is para graph</p>
        </>
    );
};

export const DataTableInit = () => {
    const [data, setData] = useState([]);
    const [filterDatas, setFilterDatas] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getDatass();
    }, []);

    useEffect(() => {
        const result = data.filter((item) => {
            return item.title.toLowerCase().match(search.toLowerCase());
        });
        console.log(result);
        setFilterDatas(result);
        console.log(filterDatas);
    }, [search]);

    const getDatass = async () => {
        try {
            const req = await fetch("https://fakestoreapi.com/products");
            const res = await req.json();
            // console.log(res)
            setData(res);
            setFilterDatas(res);
        } catch (err) {
            console.log(err);
        }
    };

    const customStyles = {
        header: {
            style: {
                minHeight: "56px",
            },
        },
        headRow: {
            style: {
                borderTopStyle: "solid",
                borderTopWidth: "1px",
                // borderTopColor: defaultThemes.default.divider.default,
            },
        },
        headCells: {
            style: {
                "&:not(:last-of-type)": {
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    // borderRightColor: defaultThemes.default.divider.default,
                },
            },
        },
        cells: {
            style: {
                "&:not(:last-of-type)": {
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    // borderRightColor: defaultThemes.default.divider.default,
                },
            },
        },
    };

    const columns = [
        {
            name: "Id",
            selector: (row) => row.id,
            sortable: true,
            wrap: true,
            maxWidth: "20px",
        },
        {
            name: "Title",
            selector: (row) => row.title,
            sortable: true,
            wrap: true,
        },
        {
            name: "Price",
            selector: (row) => row.price,
            sortable: true,
            wrap: true,
        },
        {
            name: "Description",
            selector: (row) => row.description,
            sortable: true,
            wrap: true,
        },
        {
            name: "Category",
            selector: (row) => row.category,
            sortable: true,
            wrap: true,
        },
        {
            name: "Image",
            selector: (row) => <img src={row.image} height={80} width={80} />,
        },
        {
            name: "Action",
            cell: (row) => (
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(row.id)}>
                    Delete
                </button>
            ),
        },
    ];

    const handleDelete = (id) => {
        const datas = filterDatas.filter((items) => {
            if (items.id !== id) {
                return items;
            }
        });
        setFilterDatas(datas);
    };

    const handleChange = ({ selectedRows }) => {
        console.log("deleted rows => ", selectedRows);
    };

    return (
        <>
            <h1 className="text-center">Product List</h1>
            <DataTable
                className="table table-bordered table-striped"
                columns={columns}
                data={filterDatas}
                // customStyles={customStyles}
                pagination
                dense
                subHeader
                subHeaderComponent={<input type="text" className="w-25 form-control" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)} />}
                persistTableHead
                selectableRows
                fixedHeader
                selectableRowHighlight
                highlightOnHover
                onSelectedRowsChange={handleChange}
            />
        </>
    );
};

export const ReactModalInit = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [formData, setFormData] = useState({
        userName: "",
        userEmail: "",
        userMobile: "",
        userAge: "",
        userGender: "",
        userDistrict: "",
        userLanguage: [],
        userProfilePicture: "",
        userDescription: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name);
        console.log(value);

        if (name === "userLanguagePython" || name === "userLanguageJavaScript" || name === "userLanguagePHP") {
            if (!formData.userLanguage.includes(value)) {
                setFormData({
                    ...formData,
                    userLanguage: [...formData.userLanguage, value],
                });
            } else {
                setFormData({
                    ...formData,
                    userLanguage: formData.userLanguage.filter((item) => item !== value),
                });
            }
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = () => {
        console.log(formData);
    };

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>
            <Modal show={show} onHide={handleClose}>
                <div className="bg-dark text-light">
                    <Modal.Header className="text-light" closeButton closeVariant="white">
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="form-group">
                                <label htmlFor="">User Name</label>
                                <input type="text" name="userName" id="userName" className="form-control" value={formData.userName} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">User Email</label>
                                <input type="email" name="userEmail" id="userEmail" className="form-control" value={formData.userEmail} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">User Mobile</label>
                                <input type="text" name="userMobile" id="userMobile" className="form-control" value={formData.userMobile} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Date of Birth</label>
                                <input type="number" name="userAge" id="userAge" className="form-control" value={formData.userAge} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">User Age</label>
                                <input type="number" name="userAge" id="userAge" className="form-control" value={formData.userAge} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">User Gender</label>
                                <div className="form-check">
                                    <input type="radio" name="userGender" id="userGender" className="form-check-input" value="male" checked={formData.userGender === "male"} onChange={handleInputChange} />
                                    <label htmlFor="">Mail</label>
                                    <br />
                                    <input type="radio" name="userGender" id="userGender" className="form-check-input" value="female" checked={formData.userGender === "female"} onChange={handleInputChange} />
                                    <label htmlFor="">Femail</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">User District</label>
                                <select className="form-control" name="userDistrict" id="userDistrict" value={formData.userDistrict} onChange={handleInputChange}>
                                    <option>Select</option>
                                    <option value="Cuttack">Cuttack</option>
                                    <option value="Bhubaneswar">Bhubaneswar</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">User Language</label>
                                <div className="form-check">
                                    <input type="checkbox" name="userLanguagePython" id="userLanguagePython" className="form-check-input" value="python" onChange={handleInputChange} />
                                    <label htmlFor="">Python</label>
                                    <br />
                                    <input type="checkbox" name="userLanguageJavaScript" id="userLanguageJavaScript" className="form-check-input" value="javaScript" onChange={handleInputChange} />
                                    <label htmlFor="">JavaScript</label>
                                    <br />
                                    <input type="checkbox" name="userLanguagePHP" id="userLanguagePHP" className="form-check-input" value="PHP" onChange={handleInputChange} />
                                    <label htmlFor="">PHP</label>
                                    <br />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">User Profile Picture</label>
                                <input type="file" name="userProfilePicture" id="userProfilePicture" className="form-control" value={formData.userProfilePicture} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">User Description</label>
                                <textarea className="form-control" name="userDescription" id="userDescription" rows="5" value={formData.userDescription} onChange={handleInputChange}></textarea>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </div>
            </Modal>
        </div>
    );
};
