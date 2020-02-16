import {combineReducers} from 'redux'
import manageRestaurants from './manageRestaurant'
import manageReviews from './manageReviews'


let combinedStore = combineReducers({
    manageRestaurants,
    manageReviews
} )

export default combinedStore
