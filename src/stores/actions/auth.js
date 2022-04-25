export const Login = () => (dispatch) => {
    dispatch({ type: 'LOGIN', payload: user })
}
export const Logout = () => (dispatch) => {
    dispatch({ type: 'LOGOUT' })
}
