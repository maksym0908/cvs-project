import { combineReducers } from 'redux'
import { ClientReducer } from './client'
import { UserReducer, PaginationReducer, UserRegisterReducer } from './user'

const reducer = combineReducers({
    UserReducer,
    UserRegisterReducer,
    ClientReducer, 
    PaginationReducer
})

export default reducer 