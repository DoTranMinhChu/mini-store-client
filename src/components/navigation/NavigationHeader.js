import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux";

import changeClass from "../../styles/js/style";

import googleAPI from "../../services/googleAPI"

import { Login, Logout } from "../../stores/actions/auth";

function NavigationHeader() {
    const dispatch = useDispatch()

    const responseGoogle = (response) => {
        if (response.profileObj) {
            dispatch(Login(response.profileObj))
        }
    }

    const logout = () => {

        dispatch(Logout())
    }
    const user = useSelector(state => state.auth.user)


    return (<>
        <nav className="navigation-box">
            <div className="user-box">
                <FontAwesomeIcon id="toggle-taskbar" className="user-box__icon" icon={faBars} onClick={() => changeClass('taskbar', 'show')} />
            </div>
            <div className="logo-box"><a href="/" className="logo-box__logo">MiniStore</a></div>
            <div className="user-box">
                {Object.keys(user).length !== 0 ?
                    <>
                        <div className="user-box__avatar-box circle"><img className="avatar img-responsive" src={user.imageUrl} alt=""></img></div>
                        <GoogleLogout
                            clientId={googleAPI.getClineID()}
                            buttonText="Logout"
                            render={renderProps => (
                                <button onClick={renderProps.onClick} id="btn-logout" className="user-box__button--login">Logout</button>
                            )}
                            onLogoutSuccess={logout}
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
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={"single_host_origin"}
                        />

                    </>
                }
            </div>
        </nav>
    </>)

}

export default NavigationHeader;
