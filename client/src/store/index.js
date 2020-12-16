import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import apiMiddleware from '../middleware/api'
import reducer from '../redux/index'

const store = createStore(reducer, applyMiddleware(apiMiddleware('http://localhost:5000/api'), thunk, promise, logger))

export default store

window.store = store 