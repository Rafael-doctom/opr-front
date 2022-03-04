import ActionTypes from "../actions/actionTypes";

const initialState = {
    prop: 1
};

export default function exampleReducer(state = initialState, action){
    switch(action.type){
        case(action.type === ActionTypes.EXAMPLE_TYPE):
            return ({...state, prop: action.prop});
        default:
            return state;
    }
};