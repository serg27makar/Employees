const initialState = {
    userId: '',
    userName:'',
    department:'',
    usersList:[],
};

export default function userInfo(state = initialState, action) {
    switch (action.type){
        case "SET_USERID":
            return {
                ...state,
                userId: action.userId
            };
        case "SET_USERNAME":
            return {
                ...state,
                userName: action.userName
            };
        case "SET_DEPARTMENT":
            return {
                ...state,
                department: action.department
            };
        case "SET_USERSLIST":
            return {
                ...state,
                usersList: action.usersList
            };
        default:
            return state
    }
}

