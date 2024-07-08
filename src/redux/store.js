import { combineReducers, createStore } from "redux"
import todoReducer from "./reducers/todoReducers"
import mockReducers from "./reducers/mockReducers"

const baseReducers = combineReducers({todoReducer, mockReducers})

const store = createStore(baseReducers)

export default store