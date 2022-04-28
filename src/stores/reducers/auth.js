import { LOGIN, LOGOUT, SAVE_INFOMATION } from '../../constant/authConstant'
import { toast } from 'react-toastify';
const initState = {
    user: {

    },
    infomation: {
    }
}

const auth = (state = initState, action) => {
    let { user, infomation } = state;
    let payload = action.payload;
    switch (action.type) {
        case LOGIN:
            user = payload;
            if (!infomation.email) {
                infomation.email = user.email;
            }
            if (!infomation.fullName) {
                infomation.fullName = user.name;
            }
            toast.success('Successful logout')   
            return { ...state, user, infomation }
        case LOGOUT:
            user = {}
            infomation = {}
            toast.success('Successful loign')
            return { ...state, infomation, user }
        case SAVE_INFOMATION:
            infomation = payload;
            toast.success('Successfully save information')         
            return { ...state, infomation }
        default:
            return state;
    }
}

export default auth