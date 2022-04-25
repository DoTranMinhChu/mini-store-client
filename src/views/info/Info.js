import React from "react";
import { connect } from "react-redux";

class Info extends React.Component {
    state = {
        fullName: this.props.infomation.fullName,
        email: this.props.infomation.email,
        phoneNumber: this.props.infomation.phoneNumber,
        address: this.props.infomation.address
    }
    handleChangeFullName = (event, stateProperty) => {
        if (stateProperty) {
            this.setState({
                [stateProperty]: event.target.value
            })
        }
    }
    handleSaveInfomation = (event) => {
        event.preventDefault();
        this.props.SaveInfomation(this.state)
    }
    render() {
        console.log(">> Check state : ", this.state)
        return (
            <>
                <form className="form" onSubmit={this.handleSaveInfomation}>
                    <div className="form-items">
                        <label className="form-items__name">Full Name<i className="form-items__require">*</i></label>
                        <input value={this.state.fullName} type="text" className="form-items__input" onChange={(event) => this.handleChangeFullName(event, 'fullName')} />
                    </div>
                    <div className="form-items">
                        <label className="form-items__name">Email<i className="form-items__require">*</i></label>
                        <input value={this.state.email} type="email" className="form-items__input" onChange={(event) => this.handleChangeFullName(event, 'email')} />
                    </div>
                    <div className="form-items">
                        <label className="form-items__name">Phone number<i className="form-items__require">*</i></label>
                        <input value={this.state.phoneNumber} type="text" className="form-items__input" onChange={(event) => this.handleChangeFullName(event, 'phoneNumber')} />
                    </div>
                    <div className="form-items">
                        <label className="form-items__name">Address<i className="form-items__require">*</i></label>
                        <input value={this.state.address} type="text" className="form-items__input" onChange={(event) => this.handleChangeFullName(event, 'address')} />
                    </div>
                    <div className="form-items--center">
                        <button type="submit" className="form-items__button--save" >Save</button>
                    </div>
                </form>

            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        infomation: state.infomation
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        SaveInfomation: (infomation) => dispatch({ type: 'SAVE_INFOMATION', payload: infomation }),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Info);
