import { useState } from "react"

export const AllFormFieldGetSetData = () => {

    const [formData, setFormData] = useState({
        userName: '',
        userEmail: '',
        userMobile: '',
        userAge: '',
        userGender: '',
        userDistrict: '',
        userLanguage: [],
        userProfilePicture: '',
        userDescription: '',
    })


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name)
        console.log(value)

        if (name === "userLanguagePython" || name === "userLanguageJavaScript" || name === "userLanguagePHP") {
            if (!formData.userLanguage.includes(value)) {
                setFormData({
                    ...formData,
                    userLanguage: [...formData.userLanguage, value],
                })
            }else{
                setFormData({
                    ...formData,
                    userLanguage: formData.userLanguage.filter((item) => item!==value),
                })
            }

        }else{
            setFormData({
                ...formData,
                [name]: value,
            })
        }

    }

    const handleSubmit = () => {
        console.log(formData);
    }


    return (
        <div>
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
                    <label htmlFor="">Mail</label><br />
                    <input type="radio" name="userGender" id="userGender" className="form-check-input" value="female" checked={formData.userGender === "female"} onChange={handleInputChange} />
                    <label htmlFor="">Femail</label>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="">User District</label>
                <select className="form-control" name="userDistrict" id="userDistrict" value={formData.userDistrict} onChange={handleInputChange} >
                    <option>Select</option>
                    <option value="Cuttack">Cuttack</option>
                    <option value="Bhubaneswar">Bhubaneswar</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="">User Language</label>
                <div className="form-check">
                    <input type="checkbox" name="userLanguagePython" id="userLanguagePython" className="form-check-input" value="python" onChange={handleInputChange} />
                    <label htmlFor="">Python</label><br />
                    <input type="checkbox" name="userLanguageJavaScript" id="userLanguageJavaScript" className="form-check-input" value="javaScript" onChange={handleInputChange} />
                    <label htmlFor="">JavaScript</label><br />
                    <input type="checkbox" name="userLanguagePHP" id="userLanguagePHP" className="form-check-input" value="PHP" onChange={handleInputChange} />
                    <label htmlFor="">PHP</label><br />
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

            <button type="button" className="btn btn-primary" onClick={handleSubmit}> Save </button>
        </div>
    )
}