
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={
    restaurants: []
}, action) {
    switch(action.type){
        case 'ADD_RESTAURANT':
            // console.log(action)
        return {...state, restaurants: [...state.restaurants, action.restaurant]}
        
        case 'DELETE_RESTAURANT':
            let filtered = state.restaurants.filter(rest => rest.id !== action.id)
            return {...state, restaurants: filtered}
        default: 
        return state
    }
}
