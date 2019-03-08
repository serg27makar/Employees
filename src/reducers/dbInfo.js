const initialState = {
    visibleBar: '',
};

export default function dbInfo(state = initialState, action) {
    switch (action.type){
        case "SET_VISIBLEBAR":
            return {
                ...state,
                visibleBar: action.visibleBar
            };
        default:
            return state
    }
}

