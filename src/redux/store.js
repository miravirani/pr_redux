import { combineReducers, createStore, compose, applyMiddleware } from "redux"
import todoReducer from "./reducers/todoReducers"
import mockReducers from "./reducers/mockReducers"
import { thunk } from "redux-thunk"

const baseReducers = combineReducers({
    todoReducer,
    mockReducers,
})

const store = createStore(baseReducers, compose(applyMiddleware(thunk)))

export default store