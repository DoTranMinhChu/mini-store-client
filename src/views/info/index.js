import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SaveInfomation } from "../../stores/actions/auth";
function Info() {
    const [infomation, setInfomation] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        address: ''
    })
    const dispatch = useDispatch();
    const getInfo = useSelector(state => {
        return state.auth.infomation
    })

    const handleChangeFullName = (event, stateProperty) => {
        if (stateProperty) {
            setInfomation({ ...infomation, [stateProperty]: event.target.value })
        }
    }
    const handleSaveInfomation = (event) => {
        event.preventDefault();
        dispatch(SaveInfomation(infomation))
    }

    return (
        <>
            <form className="form" onSubmit={handleSaveInfomation}>
                <div className="form-items">
                    <label className="form-items__name">Full Name<i className="form-items__require">*</i></label>
                    <input value={infomation.fullName || getInfo.fullName || ''} type="text" className="form-items__input" onChange={(event) => handleChangeFullName(event, 'fullName')} />
                </div>
                <div className="form-items">
                    <label className="form-items__name">Email<i className="form-items__require">*</i></label>
                    <input value={infomation.email || getInfo.email || ''} type="email" className="form-items__input" onChange={(event) => handleChangeFullName(event, 'email')} />
                </div>
                <div className="form-items">
                    <label className="form-items__name">Phone number<i className="form-items__require">*</i></label>
                    <input value={infomation.phoneNumber || getInfo.phoneNumber || ''} type="text" className="form-items__input" onChange={(event) => handleChangeFullName(event, 'phoneNumber')} />
                </div>
                <div className="form-items">
                    <label className="form-items__name">Address<i className="form-items__require">*</i></label>
                    <input value={infomation.address || getInfo.address || ''} type="text" className="form-items__input" onChange={(event) => handleChangeFullName(event, 'address')} />
                </div>
                <div className="form-items--center">
                    <button type="submit" className="form-items__button--save" >Save</button>
                </div>
            </form>

        </>
    )

}

export default Info;
