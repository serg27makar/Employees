const initialState = {
    adminId: '',
    adminName:'',
};

export default function adminInfo(state = initialState, action) {
    switch (action.type){
        case "SET_ADMINID":
            return {
                ...state,
                adminId: action.adminId
            };
        case "SET_ADMINNAME":
            return {
                ...state,
                adminName: action.adminName
            };
        default:
            return state
    }
}

