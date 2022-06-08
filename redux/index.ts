import {combineReducers} from 'redux'
import packages from "./packages";

const rootReducer = combineReducers({
    packages
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer