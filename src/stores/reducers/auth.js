const initState = {
    user: {

    },
    infomation: {
    }
}

const auth = (state = initState, action) => {
    let { user,infomation } = state;
    let payload = action.payload;
    let index;
    switch (action.type) {
        case 'LOGIN':
            user = payload;
            if (!infomation.email) {
                infomation.email = user.email;
            }
            if (!infomation.fullName) {
                infomation.fullName = user.name;
            }
            return { ...state, user, infomation }
        case 'LOGOUT':
            user = {}
            infomation = {}
            return { ...state, infomation, user }
        case 'SAVE_INFOMATION':
            console.log("save")
            infomation = payload;
            return { ...state, infomation }
        default:
            return state;
    }
}

export default auth