import { requestReducer } from './Reducers/request-reducer';
import { combineReducers } from 'redux';
import { responceReducer } from './Reducers/responce-reducer';
import { configureStore } from '@reduxjs/toolkit'





const rootReducer = combineReducers({
	requestState: requestReducer,
	answerState: responceReducer,
})
const store = configureStore({
	reducer: rootReducer
})

export default store;