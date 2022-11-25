import { RequestStateType, actionType } from 'types/types';


const initialState: RequestStateType = {
	aPoint: null,
	bPoint: null,
	thereData: null,
	backData: null,
}
const SET_THERE_DATA = 'request/SET_THERE_DATA';

export const requestReducer = (state: RequestStateType = initialState, action: actionType) => {
	switch (action.type) {
		case SET_THERE_DATA:
			return {
				...state,
				thereData: action.mSeconds
			}
		default: return state;
	}
}
export const setThereData = (number: number): actionType => ({ type: SET_THERE_DATA, mSeconds: number });



