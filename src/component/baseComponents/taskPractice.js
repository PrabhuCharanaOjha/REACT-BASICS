import React, { useState, useEffect, Component, useMemo } from "react";
import DataTable from "react-data-table-component";

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
    },[]);

    useEffect(() => {
        const result = data.filter((item) =>{
            return item.title.toLowerCase().match(search.toLowerCase());
        })
        console.log(result)
        setFilterDatas(result)
        console.log(filterDatas)
    }, [search])


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
    ];


    return (
        <>
            <h1 className="text-center">Product List</h1>
            <DataTable 
            columns={columns} 
            data={filterDatas} 
            customStyles={customStyles} 
            pagination 
            dense 
            subHeader
            subHeaderComponent={
                <input type="text" className="w-25 form-control" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)} />
            }
            persistTableHead
            />
        </>
    );
};
