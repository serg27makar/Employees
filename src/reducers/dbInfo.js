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
        case "SET_VISIBLEBODY":
            return {
                ...state,
                visibleBody: action.visibleBody
            };
        default:
            return state
    }
}

