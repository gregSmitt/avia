import { StateType, PointType, RouteType } from 'types/types';
import { createSelector } from 'reselect';


const getRoutsSelector = (state: StateType): RouteType[] => {
	return state.answerState.routs;
}
export const getRouts = createSelector(getRoutsSelector,
	(routs: RouteType[]) => routs
);

const getIsBackRoutSelector = (state: StateType): boolean => {
	return state.answerState.isBackData;
}
export const getIsBackRout = createSelector(getIsBackRoutSelector,
	(isBackRout: boolean) => isBackRout
);

const getIsDataSetedSelector = (state: StateType): boolean => {
	return state.answerState.isDataSeted;
}
export const getIsDataSeted = createSelector(getIsDataSetedSelector,
	(isDataSeted: boolean) => isDataSeted
);




