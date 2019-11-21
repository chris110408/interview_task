import {UPDATE_HOTEL_INFO,UPDATE_HOTELS} from '../actions/hotel'
const initialState = { hotel: {} ,hotels:[]};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_HOTELS:
            return {
                ...state,
                hotels:
                    action.payload

            };
        case UPDATE_HOTEL_INFO:
            return Object.assign({},state,{hotel:action.payload})
            ;
        default:
            return state;
    }
}
