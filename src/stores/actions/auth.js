import {
    LOGIN,
    LOGOUT,
    SAVE_INFOMATION
} from "../../constant/authConstant"

export const Login = (user) => (dispatch) => {
    dispatch({ type: LOGIN, payload: user })
}
export const Logout = () => (dispatch) => {
    dispatch({ type: LOGOUT })
}

export const SaveInfomation = (infomation) => (dispatch) => {
    dispatch({ type: SAVE_INFOMATION, payload: infomation })
}