
import cuid from 'cuid';
export const cuidFn = cuid;

function manageRestaurant(state=[], action) {
    switch(action.type){
        case 'ADD_RESTAURANT':
            const new_restaurant={
                id:cuidFn(),
                text: action.restaurant,
                // reviews:[]
            }
            return  [...state, new_restaurant]

        case 'DELETE_RESTAURANT':

            return state.filter(restaurant=> restaurant.id !== action.restaurantId)

        default:
        return state;
    }

}

// case "REMOVE_AUTHOR":
//     idx = state.authors.findIndex(author => author.id === action.id);
//     return {
//       ...state,
//       books: [...state.books],
//       authors: [...state.authors.slice(0, idx), ...state.authors.slice(idx + 1)]
//     };
export default manageRestaurant;
