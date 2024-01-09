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

export const CustomDataTable = () => {
    const datas = [
        {
            _id: {
                $oid: "65792fdb6d1d00005c00667d",
            },
            districtId: 2421,
            blockId: 2421004,
            schoolId: 21150112951,
            totalMark: 99,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "ANGUL",
            districtName: "ANGUL",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006697",
            },
            districtId: 2421,
            blockId: 2421004,
            schoolId: 21150100152,
            totalMark: 99,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "ANGUL",
            districtName: "ANGUL",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c0066bb",
            },
            districtId: 2421,
            blockId: 2421003,
            schoolId: 21150234801,
            totalMark: 98,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "ATHAMALLIK",
            districtName: "ANGUL",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c0066c3",
            },
            districtId: 2421,
            blockId: 2421008,
            schoolId: 21150303702,
            totalMark: 97,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "BANARPAL",
            districtName: "ANGUL",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006706",
            },
            districtId: 2421,
            blockId: 2421002,
            schoolId: 21150514501,
            totalMark: 100,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "KANIHA",
            districtName: "ANGUL",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006707",
            },
            districtId: 2421,
            blockId: 2421002,
            schoolId: 21150518601,
            totalMark: 97,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "KANIHA",
            districtName: "ANGUL",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c00670c",
            },
            districtId: 2421,
            blockId: 2421002,
            schoolId: 21150502203,
            totalMark: 99,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "KANIHA",
            districtName: "ANGUL",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006782",
            },
            districtId: 2405,
            blockId: 2405007,
            schoolId: 21080112002,
            totalMark: 98,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "BAHANAGA",
            districtName: "BALASORE",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006789",
            },
            districtId: 2405,
            blockId: 2405007,
            schoolId: 21080115001,
            totalMark: 100,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "BAHANAGA",
            districtName: "BALASORE",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c0067b5",
            },
            districtId: 2405,
            blockId: 2405004,
            schoolId: 21080203601,
            totalMark: 100,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "BALIAPAL",
            districtName: "BALASORE",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c0067b8",
            },
            districtId: 2405,
            blockId: 2405004,
            schoolId: 21080213402,
            totalMark: 98,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "BALIAPAL",
            districtName: "BALASORE",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c0067f4",
            },
            districtId: 2405,
            blockId: 2405005,
            schoolId: 21080407901,
            totalMark: 99,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "BHOGARAI",
            districtName: "BALASORE",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c0067f7",
            },
            districtId: 2405,
            blockId: 2405005,
            schoolId: 21080420401,
            totalMark: 100,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "BHOGARAI",
            districtName: "BALASORE",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c00680f",
            },
            districtId: 2405,
            blockId: 2405005,
            schoolId: 21080414272,
            totalMark: 98,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "BHOGARAI",
            districtName: "BALASORE",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006836",
            },
            districtId: 2405,
            blockId: 2405006,
            schoolId: 21080504202,
            totalMark: 100,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "JALESWAR",
            districtName: "BALASORE",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c00684f",
            },
            districtId: 2405,
            blockId: 2405010,
            schoolId: 21080624571,
            totalMark: 97,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "KHAIRA",
            districtName: "BALASORE",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006876",
            },
            districtId: 2405,
            blockId: 2405010,
            schoolId: 21080634302,
            totalMark: 98,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "KHAIRA",
            districtName: "BALASORE",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006889",
            },
            districtId: 2405,
            blockId: 2405018,
            schoolId: 21080705601,
            totalMark: 97,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "NILGIRI",
            districtName: "BALASORE",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c0068c7",
            },
            districtId: 2405,
            blockId: 2405002,
            schoolId: 21080932701,
            totalMark: 100,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "REMUNA",
            districtName: "BALASORE",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c0068d3",
            },
            districtId: 2405,
            blockId: 2405002,
            schoolId: 21080919702,
            totalMark: 99,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "REMUNA",
            districtName: "BALASORE",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c0068e2",
            },
            districtId: 2405,
            blockId: 2405009,
            schoolId: 21081115001,
            totalMark: 99,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "SIMULIA",
            districtName: "BALASORE",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c0068ee",
            },
            districtId: 2405,
            blockId: 2405009,
            schoolId: 21081103251,
            totalMark: 97,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "SIMULIA",
            districtName: "BALASORE",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c0068fd",
            },
            districtId: 2405,
            blockId: 2405008,
            schoolId: 21081215701,
            totalMark: 99,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "SORO",
            districtName: "BALASORE",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c0068fe",
            },
            districtId: 2405,
            blockId: 2405008,
            schoolId: 21081214002,
            totalMark: 100,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "SORO",
            districtName: "BALASORE",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c0068ff",
            },
            districtId: 2405,
            blockId: 2405008,
            schoolId: 21081207151,
            totalMark: 97,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "SORO",
            districtName: "BALASORE",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006910",
            },
            districtId: 2405,
            blockId: 2405008,
            schoolId: 21081600972,
            totalMark: 100,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "SORO",
            districtName: "BALASORE",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006921",
            },
            districtId: 2405,
            blockId: 2405008,
            schoolId: 21081207951,
            totalMark: 97,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "SORO",
            districtName: "BALASORE",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c00693d",
            },
            districtId: 2417,
            blockId: 2417004,
            schoolId: 21090104501,
            totalMark: 100,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "BASUDEVPUR",
            districtName: "BHADRAK",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006959",
            },
            districtId: 2417,
            blockId: 2417001,
            schoolId: 21090201101,
            totalMark: 97,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "BHADRAK",
            districtName: "BHADRAK",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006970",
            },
            districtId: 2417,
            blockId: 2417001,
            schoolId: 21090210103,
            totalMark: 99,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "BHADRAK",
            districtName: "BHADRAK",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c0069b2",
            },
            districtId: 2417,
            blockId: 2417002,
            schoolId: 21090415701,
            totalMark: 99,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "BONTH",
            districtName: "BHADRAK",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c0069b8",
            },
            districtId: 2417,
            blockId: 2417002,
            schoolId: 21090405202,
            totalMark: 100,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "BONTH",
            districtName: "BHADRAK",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c0069c6",
            },
            districtId: 2417,
            blockId: 2417002,
            schoolId: 21090419006,
            totalMark: 99,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "BONTH",
            districtName: "BHADRAK",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c0069fa",
            },
            districtId: 2417,
            blockId: 2417005,
            schoolId: 21090512401,
            totalMark: 97,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "CHANDABALI",
            districtName: "BHADRAK",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006a2e",
            },
            districtId: 2417,
            blockId: 2417006,
            schoolId: 21090715303,
            totalMark: 98,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "TIHIDI",
            districtName: "BHADRAK",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006a36",
            },
            districtId: 2417,
            blockId: 2417006,
            schoolId: 21090704251,
            totalMark: 100,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "TIHIDI",
            districtName: "BHADRAK",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006a46",
            },
            districtId: 2417,
            blockId: 2417006,
            schoolId: 21090700403,
            totalMark: 98,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "TIHIDI",
            districtName: "BHADRAK",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006a69",
            },
            districtId: 2409,
            blockId: 2409009,
            schoolId: 21240200202,
            totalMark: 97,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "BALANGIR",
            districtName: "BOLANGIR",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006a76",
            },
            districtId: 2409,
            blockId: 2409009,
            schoolId: 21240207601,
            totalMark: 100,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "BALANGIR",
            districtName: "BOLANGIR",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006a7e",
            },
            districtId: 2409,
            blockId: 2409009,
            schoolId: 21241501301,
            totalMark: 99,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "BALANGIR",
            districtName: "BOLANGIR",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006aa3",
            },
            districtId: 2409,
            blockId: 2409002,
            schoolId: 21240402201,
            totalMark: 97,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "BELPADA",
            districtName: "BOLANGIR",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006ab2",
            },
            districtId: 2409,
            blockId: 2409002,
            schoolId: 21240409401,
            totalMark: 98,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "BELPADA",
            districtName: "BOLANGIR",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006ace",
            },
            districtId: 2409,
            blockId: 2409013,
            schoolId: 21240509303,
            totalMark: 99,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "DEOGAON",
            districtName: "BOLANGIR",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006ad5",
            },
            districtId: 2409,
            blockId: 2409021,
            schoolId: 21240601601,
            totalMark: 97,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "GUDVELA",
            districtName: "BOLANGIR",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006b21",
            },
            districtId: 2409,
            blockId: 2409001,
            schoolId: 21241000502,
            totalMark: 99,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "PATNAGARH",
            districtName: "BOLANGIR",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006b2b",
            },
            districtId: 2409,
            blockId: 2409001,
            schoolId: 21241005851,
            totalMark: 98,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "PATNAGARH",
            districtName: "BOLANGIR",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006b41",
            },
            districtId: 2409,
            blockId: 2409001,
            schoolId: 21241016404,
            totalMark: 100,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "PATNAGARH",
            districtName: "BOLANGIR",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006b47",
            },
            districtId: 2409,
            blockId: 2409011,
            schoolId: 21241101551,
            totalMark: 100,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "PUINTALA",
            districtName: "BOLANGIR",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006b61",
            },
            districtId: 2409,
            blockId: 2409006,
            schoolId: 21241205401,
            totalMark: 98,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "SAINTALA",
            districtName: "BOLANGIR",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006b69",
            },
            districtId: 2409,
            blockId: 2409006,
            schoolId: 21241210701,
            totalMark: 99,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "SAINTALA",
            districtName: "BOLANGIR",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006bf1",
            },
            districtId: 2426,
            blockId: 2426003,
            schoolId: 21220343902,
            totalMark: 97,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "KANTAMAL",
            districtName: "BOUDH",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006bf4",
            },
            districtId: 2406,
            blockId: 2406036,
            schoolId: 21121501701,
            totalMark: 98,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "ATHGARH",
            districtName: "CUTTACK",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006c19",
            },
            districtId: 2406,
            blockId: 2406040,
            schoolId: 21120200202,
            totalMark: 98,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "BANKI",
            districtName: "CUTTACK",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006c2c",
            },
            districtId: 2406,
            blockId: 2406038,
            schoolId: 21120313401,
            totalMark: 98,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "BARAMBA",
            districtName: "CUTTACK",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006c43",
            },
            districtId: 2406,
            blockId: 2406038,
            schoolId: 21120309101,
            totalMark: 100,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "BARAMBA",
            districtName: "CUTTACK",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006c53",
            },
            districtId: 2406,
            blockId: 2406002,
            schoolId: 21120400106,
            totalMark: 98,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "BARANGA",
            districtName: "CUTTACK",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006c5b",
            },
            districtId: 2406,
            blockId: 2406002,
            schoolId: 21120404572,
            totalMark: 98,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "BARANGA",
            districtName: "CUTTACK",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006c63",
            },
            districtId: 2406,
            blockId: 2406002,
            schoolId: 21120402301,
            totalMark: 100,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "BARANGA",
            districtName: "CUTTACK",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006c69",
            },
            districtId: 2406,
            blockId: 2406001,
            schoolId: 21120502603,
            totalMark: 98,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "CUTTACK SADAR",
            districtName: "CUTTACK",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006c6f",
            },
            districtId: 2406,
            blockId: 2406001,
            schoolId: 21111103303,
            totalMark: 98,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "CUTTACK SADAR",
            districtName: "CUTTACK",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006c75",
            },
            districtId: 2406,
            blockId: 2406001,
            schoolId: 21120508402,
            totalMark: 100,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "CUTTACK SADAR",
            districtName: "CUTTACK",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006c76",
            },
            districtId: 2406,
            blockId: 2406001,
            schoolId: 21111100401,
            totalMark: 99,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "CUTTACK SADAR",
            districtName: "CUTTACK",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006c7a",
            },
            districtId: 2406,
            blockId: 2406001,
            schoolId: 21120511602,
            totalMark: 100,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "CUTTACK SADAR",
            districtName: "CUTTACK",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006c95",
            },
            districtId: 2406,
            blockId: 2406008,
            schoolId: 21120812601,
            totalMark: 99,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "MAHANGA",
            districtName: "CUTTACK",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006cc4",
            },
            districtId: 2406,
            blockId: 2406039,
            schoolId: 21120917754,
            totalMark: 99,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "NARSINGHPUR",
            districtName: "CUTTACK",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006cd2",
            },
            districtId: 2406,
            blockId: 2406039,
            schoolId: 21120920401,
            totalMark: 98,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "NARSINGHPUR",
            districtName: "CUTTACK",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006d07",
            },
            districtId: 2406,
            blockId: 2406007,
            schoolId: 21111104001,
            totalMark: 98,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "NISCHINTAKOILI",
            districtName: "CUTTACK",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006d08",
            },
            districtId: 2406,
            blockId: 2406007,
            schoolId: 21121108201,
            totalMark: 99,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "NISCHINTAKOILI",
            districtName: "CUTTACK",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006db2",
            },
            districtId: 2416,
            blockId: 2416003,
            schoolId: 21040217002,
            totalMark: 99,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "REAMAL",
            districtName: "DEOGARH",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006db5",
            },
            districtId: 2416,
            blockId: 2416003,
            schoolId: 21040207302,
            totalMark: 98,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "REAMAL",
            districtName: "DEOGARH",
        },
        {
            _id: {
                $oid: "65792fdb6d1d00005c006de7",
            },
            districtId: 2407,
            blockId: 2407006,
            schoolId: 21140102051,
            totalMark: 98,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "BHUBAN",
            districtName: "DHENKANAL",
        },
        {
            _id: {
                $oid: "65792fdc6d1d00005c006dff",
            },
            districtId: 2407,
            blockId: 2407001,
            schoolId: 21140200801,
            totalMark: 98,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "DHENKANAL SADAR",
            districtName: "DHENKANAL",
        },
        {
            _id: {
                $oid: "65792fdc6d1d00005c006e0d",
            },
            districtId: 2407,
            blockId: 2407001,
            schoolId: 21140203001,
            totalMark: 100,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "DHENKANAL SADAR",
            districtName: "DHENKANAL",
        },
        {
            _id: {
                $oid: "65792fdc6d1d00005c006e12",
            },
            districtId: 2407,
            blockId: 2407001,
            schoolId: 21140203501,
            totalMark: 98,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "DHENKANAL SADAR",
            districtName: "DHENKANAL",
        },
        {
            _id: {
                $oid: "65792fdc6d1d00005c006e2e",
            },
            districtId: 2407,
            blockId: 2407003,
            schoolId: 21140304951,
            totalMark: 98,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "GONDIA",
            districtName: "DHENKANAL",
        },
        {
            _id: {
                $oid: "65792fdc6d1d00005c006e3d",
            },
            districtId: 2407,
            blockId: 2407015,
            schoolId: 21140400401,
            totalMark: 97,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "HINDOL",
            districtName: "DHENKANAL",
        },
        {
            _id: {
                $oid: "65792fdc6d1d00005c006e77",
            },
            districtId: 2407,
            blockId: 2407004,
            schoolId: 21140512102,
            totalMark: 100,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "KAMAKHYANAGAR",
            districtName: "DHENKANAL",
        },
        {
            _id: {
                $oid: "65792fdc6d1d00005c006ea8",
            },
            districtId: 2407,
            blockId: 2407002,
            schoolId: 21140709201,
            totalMark: 99,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "ODAPADA",
            districtName: "DHENKANAL",
        },
        {
            _id: {
                $oid: "65792fdc6d1d00005c006eb5",
            },
            districtId: 2407,
            blockId: 2407002,
            schoolId: 21140713501,
            totalMark: 99,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "ODAPADA",
            districtName: "DHENKANAL",
        },
        {
            _id: {
                $oid: "65792fdc6d1d00005c006ed0",
            },
            districtId: 2407,
            blockId: 2407007,
            schoolId: 21140807651,
            totalMark: 98,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "PARJANG",
            districtName: "DHENKANAL",
        },
        {
            _id: {
                $oid: "65792fdc6d1d00005c006ef0",
            },
            districtId: 2424,
            blockId: 2424001,
            schoolId: 21200112072,
            totalMark: 99,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "GOSANI",
            districtName: "GAJAPATI",
        },
        {
            _id: {
                $oid: "65792fdc6d1d00005c006f0f",
            },
            districtId: 2424,
            blockId: 2424003,
            schoolId: 21200305101,
            totalMark: 99,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "KASHINAGAR",
            districtName: "GAJAPATI",
        },
        {
            _id: {
                $oid: "65792fdc6d1d00005c006f1b",
            },
            districtId: 2424,
            blockId: 2424004,
            schoolId: 21200405171,
            totalMark: 100,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "MOHANA",
            districtName: "GAJAPATI",
        },
        {
            _id: {
                $oid: "65792fdc6d1d00005c006f21",
            },
            districtId: 2424,
            blockId: 2424004,
            schoolId: 21200404301,
            totalMark: 97,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "MOHANA",
            districtName: "GAJAPATI",
        },
        {
            _id: {
                $oid: "65792fdc6d1d00005c006f25",
            },
            districtId: 2424,
            blockId: 2424004,
            schoolId: 21200401301,
            totalMark: 99,
            status: 2,
            created_date: "13-12-2023",
            created_time: "09:45:23",
            blockName: "MOHANA",
            districtName: "GAJAPATI",
        },
    ];

    const newData = datas.reduce((outputArr, iterateArr) => {
        if (Object.keys(outputArr).length === 0) {
            outputArr[1] = [iterateArr];
        } else {
            if (outputArr[Object.keys(outputArr).at(-1)].length % 10 === 0) {
                outputArr[parseInt(Object.keys(outputArr).at(-1)) + 1] = [iterateArr];
            } else {
                outputArr[Object.keys(outputArr).at(-1)] = [...outputArr[Object.keys(outputArr).at(-1)], iterateArr];
            }
        }

        return outputArr;
    }, {});

    const [activePage, setActivePage] = useState("1");
    // console.log(datas[activePage]);

    return (
        <>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">SL NO</th>
                        <th scope="col">DISTRICT NAME</th>
                        <th scope="col">BLOCK NAME</th>
                        <th scope="col">TOTAL MARK</th>
                    </tr>
                </thead>
                <tbody>
                    {newData[activePage].map((values, index) => {
                        return (
                            <tr>
                                <th scope="row">{index + 1 !== 10 ? parseInt(activePage) - 1 + "" + (index + 1) : activePage + "0"}</th>
                                <td>{values.districtName}</td>
                                <td>{values.blockName}</td>
                                <td>{values.totalMark}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#">
                            Previous
                        </a>
                    </li>
                    {Object.keys(newData).map((pageNumber, index) => {
                        return (
                            <li
                                class="page-item"
                                key={index}
                                onClick={() => {
                                    setActivePage(pageNumber);
                                }}
                            >
                                <a class="page-link" href="#">
                                    {pageNumber}
                                </a>
                            </li>
                        );
                    })}

                    <li class="page-item">
                        <a class="page-link" href="#">
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export const Calculator = () => {
    const [display, setDisplay] = useState("");

    const handleClickForSetDisplay = (value, type) => {
        setDisplay(display+""+value)
        // console.log(display)
    }
    return (
        <>
            <div className="card bg-dark text-light" style={{"width": "40rem"}}>
                <textarea className="m-4" defaultValue={display} readOnly></textarea>
                <div className="card-body">
                   <div className="row">
                        <button type="button" className="col-3 btn btn-dark border border-light rounded-0 text-center p-3" onClick={() => handleClickForSetDisplay(7, "number")}>7</button>
                        <button type="button" className="col-3 btn btn-dark border border-light rounded-0 text-center p-3" onClick={() => handleClickForSetDisplay(8, "number")}>8</button>
                        <button type="button" className="col-3 btn btn-dark border border-light rounded-0 text-center p-3" onClick={() => handleClickForSetDisplay(9, "number")}>9</button>
                        <button type="button" className="col-3 btn btn-dark border border-light rounded-0 text-center p-3" onClick={() => handleClickForSetDisplay("/", "divide")}>/</button>
                   </div>
                   <div className="row">
                        <button type="button" className="col-3 btn btn-dark border border-light rounded-0 text-center p-3" onClick={() => handleClickForSetDisplay(4, "number")}>4</button>
                        <button type="button" className="col-3 btn btn-dark border border-light rounded-0 text-center p-3" onClick={() => handleClickForSetDisplay(5, "number")}>5</button>
                        <button type="button" className="col-3 btn btn-dark border border-light rounded-0 text-center p-3" onClick={() => handleClickForSetDisplay(6, "number")}>6</button>
                        <button type="button" className="col-3 btn btn-dark border border-light rounded-0 text-center p-3" onClick={() => handleClickForSetDisplay("-", "minus")}>-</button>
                   </div>
                   <div className="row">
                        <button type="button" className="col-3 btn btn-dark border border-light rounded-0 text-center p-3" onClick={() => handleClickForSetDisplay(1, "number")}>1</button>
                        <button type="button" className="col-3 btn btn-dark border border-light rounded-0 text-center p-3" onClick={() => handleClickForSetDisplay(2, "number")}>2</button>
                        <button type="button" className="col-3 btn btn-dark border border-light rounded-0 text-center p-3" onClick={() => handleClickForSetDisplay(3, "number")}>3</button>
                        <button type="button" className="col-3 btn btn-dark border border-light rounded-0 text-center p-3" onClick={() => handleClickForSetDisplay("+", "plus")}>+</button>
                   </div>
                   <div className="row">
                        <button type="button" className="col-3 btn btn-dark border border-light rounded-0 text-center p-3" onClick={() => {setDisplay("")}}>CLS</button>
                        <button type="button" className="col-3 btn btn-dark border border-light rounded-0 text-center p-3" onClick={() => handleClickForSetDisplay(0, "number")}>0</button>
                        <button type="button" className="col-3 btn btn-dark border border-light rounded-0 text-center p-3" onClick={() => handleClickForSetDisplay(".", "number")}>.</button>
                        <button type="button" className="col-3 btn btn-dark border border-light rounded-0 text-center p-3" onClick={() => {setDisplay(eval(display).toString());}}>=</button>
                   </div>
                </div>
            </div>
        </>
    );
};
