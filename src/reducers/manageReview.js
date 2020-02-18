
import cuid from 'cuid';
export const cuidFn = cuid;

function manageReview(state=[], action) {
    switch(action.type){
        case 'ADD_REVIEW':
            const new_review={
                id:cuidFn(),
                text: action.review.text,
                restaurantId:action.review.restaurantId
            }
            return [...state, new_review]


        case 'DELETE_REVIEW':
      
            return state.filter(review=> review.id !== action.ids.reviewId)



        default:

        return state;
    }

}

export default manageReview;
