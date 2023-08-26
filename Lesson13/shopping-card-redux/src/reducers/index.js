//kết hợp state trong một store

import { combineReducers } from 'redux'
import listProduct from './listProduct'
import notify from './notify'


const reducer = combineReducers({
    listProduct: listProduct,
    notify: notify
})

export default reducer;