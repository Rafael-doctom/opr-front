import ActionTypes from "../actions/actionTypes";

const initialState = {
	id: 150,
	name: "Marcos Antônio",
	cpf: 16546546554,
	state: "PB",
	city: "Campina Grande",
	email: "marcos@antonio.com",
};

// >>> Para testar legislador
// const initialState = {
// 	id: 20,
// 	name: "João Gomes",
// 	cpf: 16546546554,
// 	state: "PB",
// 	city: "João Pessoa",
// 	email: "joao@gomes.yahoo",
// 	partido: "PDT"
// };

export default function userReducer(state = initialState, action){
    switch(action.type){
        case(action.type === ActionTypes.SAVE_USER):
            return action.payload;
        case(action.type === ActionTypes.UPDATE_USER):
            return ({...state, ...action.payload});
        default:
            return state;
    }
};