const initialState = {
    listEvents: []
}

const eventReducer = (state = initialState, action) => {
    switch (action.type){
        case "ADD_EVENT":
            state.listEvents.push(action.value);
            break;
        default:
            return state;
    }
}

export default eventReducer;