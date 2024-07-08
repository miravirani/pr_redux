import { combineReducers, createStore } from "redux"
import todoReducer from "./reducers/todoReducers"
import mockReducers from "./reducers/mockReducers"
import ImgbbReducers from "./reducers/ImgbbReducers"

const baseReducers = combineReducers({
    todoReducer,
    mockReducers,
    ImgbbReducers
})

const store = createStore(baseReducers)

export default store