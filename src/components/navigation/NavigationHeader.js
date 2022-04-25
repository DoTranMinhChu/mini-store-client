import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { connect } from "react-redux";
import googleAPI from "../../services/googleAPI"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import changeClass from "../../styles/js/style";
class NavigationHeader extends React.Component {
    responseGoogle = (response) => {
        console.log(response);
        if (response.profileObj) {
            this.props.Login(response.profileObj)
        }
    }
    logout = () => {
        this.props.Logout();
    }
    render() {
        console.log("check : ", this.props.user)
        return (<>
            <nav className="navigation-box">
                <div className="user-box">
                    <FontAwesomeIcon id="toggle-taskbar" className="user-box__icon" icon={faBars} onClick={() => changeClass('taskbar', 'show')} />
                </div>
                <div className="logo-box"><a href="/" className="logo-box__logo">MiniStore</a></div>
                <div className="user-box">
                    {this.props.user?
                        <>
                            <div className="user-box__avatar-box circle"><img className="avatar img-responsive" src={this.props.user.imageUrl} alt=""></img></div>
                            <GoogleLogout
                                clientId={googleAPI.getClineID()}
                                buttonText="Logout"
                                render={renderProps => (
                                    <button onClick={renderProps.onClick} id="btn-logout" className="user-box__button--login">Logout</button>
                                )}
                                onLogoutSuccess={this.logout}
                            >
                            </GoogleLogout>
                        </> :
                        <>
                            <GoogleLogin
                                clientId={googleAPI.getClineID()}
                                render={renderProps => (
                                    <button onClick={renderProps.onClick} id="btn-login" className="user-box__button--login">Login</button>
                                )}
                                buttonText="Login"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                                cookiePolicy={"single_host_origin"}
                            />

                        </>
                    }
                </div>
            </nav>
        </>)
    }
}

export default NavigationHeader;
