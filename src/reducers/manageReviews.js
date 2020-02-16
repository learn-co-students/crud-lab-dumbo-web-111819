export default function manageReviews (state={
    reviews: []
}, action){
    let filteredReviews
    let updatedReviews

    switch(action.type){
        case 'ADD_REVIEW':
            // console.log(action);
            
            return {...state, reviews: [...state.reviews, action.review]}
        case 'DELETE_REVIEW':
            filteredReviews = state.reviews.filter(review => review.id !== action.id)
            // return state
            return {...state, reviews: filteredReviews}
        case 'DELETE_RESTAURANT':
            filteredReviews = state.reviews.filter(review => review.restaurantId !== action.id)
                return {...state, reviews: filteredReviews}
        case 'UPDATE_REVIEW':
            updatedReviews = state.reviews.map(review =>{
                if(review.id === action.id){
                    review.text = action.text
                }
                return review
            })
            //Why dont i need a return statement for this to work? 
            // console.log(updatedReviews)
            // return state
            // return {...state, reviews: updatedReviews}
        default:
            return state
    }
}