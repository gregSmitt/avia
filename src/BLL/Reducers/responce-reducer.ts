import { actionType, OneWayRouteType, PointType, ResponseStateType } from 'types/types';


const initialState: ResponseStateType = {
	isDataSeted: false,
	isBackData: false,
	routs: [{
		id: 1,
		thereRout: {
			companyData: {
				name: 'S7 Airlines',
				logo: null
			},
			startPoint: {
				time: '9:20',
				city: 'Москва',
				data: 1,
				sign: 'SVO'
			},
			finishPoint: {
				time: '11:05',
				city: 'Ростов На Дону',
				data: 1,
				sign: 'ROV'
			},
			isReturnable: false,
			routeTime: 'В пути 1 ч 55 мин',
			cost: 4150,
			intervals: [
				{
					id: 1,
					isChanged: true,
					startTime: '9:20',
					finishTime: '11:05'
				},
				{
					id: 2,
					isChanged: false,
					startTime: '10:20',
					finishTime: '12:05'
				},
				{
					id: 3,
					isChanged: false,
					startTime: '11:20',
					finishTime: '13:05'
				},
			]
		},
		backRout: {
			companyData: {
				name: 'S7 Airlines',
				logo: null
			},
			startPoint: {
				time: '9:20',
				city: 'Ростов На Дону',
				data: 2,
				sign: 'ROV'
			},
			finishPoint: {
				time: '11:05',
				city: 'Москва',
				data: 2,
				sign: 'SVO'
			},
			isReturnable: false,
			routeTime: 'В пути 1 ч 55 мин',
			cost: 4150,
			intervals: []
		}
	}
	]
}
const SET_BACK_DATA_FLAG = 'request/SET_BACK_DATA_FLAG';
const SET_START_POINT_DATA = 'request/SET_START_POINT_DATA';
const SET_FINISH_POINT_DATA = 'request/SET_FINISH_POINT_DATA';
const SET_ROUT_TIME_INTERVAL = 'request/SET_TIME_INTERVAL';
const SET_BACK_ROUT = 'request/SET_BACK_ROUT';
const SET_DATA_SETED_FLAG = 'request/SET_DATA_SETED_FLAG';

export const responceReducer = (state: ResponseStateType = initialState, action: actionType) => {
	switch (action.type) {
		case SET_BACK_DATA_FLAG:
			return {
				...state,
				isBackData: action.flag
			}
		case SET_DATA_SETED_FLAG:
			return {
				...state,
				isDataSeted: action.flag
			}
		case SET_START_POINT_DATA:
			return {
				...state,
				routs: state.routs.map(rout => {
					if (rout.id === 1) {
						return {
							...rout,
							thereRout: {
								...rout.thereRout,
								startPoint: { ...action.pointData }
							}
						}
					}
					return rout
				})
			}
		case SET_FINISH_POINT_DATA:
			return {
				...state,
				routs: state.routs.map(rout => {
					if (rout.id === 1) {
						return {
							...rout,
							thereRout: {
								...rout.thereRout,
								finishPoint: { ...action.pointData }
							}
						}
					}
					return rout
				})
			}
		case SET_ROUT_TIME_INTERVAL:
			return {
				...state,
				routs: state.routs.map(rout => {
					if (rout.id === 1) {
						return {
							...rout,
							thereRout: {
								...rout.thereRout,
								startPoint: {
									...rout.thereRout.startPoint,
									time: rout.thereRout.intervals.find(i => i.id === action.id)?.startTime
								},
								finishPoint: {
									...rout.thereRout.finishPoint,
									time: rout.thereRout.intervals.find(i => i.id === action.id)?.finishTime
								},
								intervals: rout.thereRout.intervals.map(i => {
									if (i.id === action.id) {
										return {
											...i,
											isChanged: true
										}
									} else return {
										...i,
										isChanged: false
									}
								})
							}
						}
					}
					return rout
				})
			}
		case SET_BACK_ROUT:
			return {
				...state,
				routs: state.routs.map(rout => {
					if (rout.id === 1) {
						return {
							...rout,
							backRout: { ...action.rout }
						}
					}
					return rout
				})
			}
		default: return state;
	}
}

export const setBackDataFlag = (flag: boolean): actionType => ({ type: SET_BACK_DATA_FLAG, flag: flag });
export const setDataSetedFlag = (flag: boolean): actionType => ({ type: SET_DATA_SETED_FLAG, flag: flag });
export const setStartPointData = (data: PointType): actionType => ({ type: SET_START_POINT_DATA, pointData: data });
export const setFinishPointData = (data: PointType): actionType => ({ type: SET_FINISH_POINT_DATA, pointData: data });
export const setRoutTimeInterval = (intervalId: number): actionType => ({ type: SET_ROUT_TIME_INTERVAL, id: intervalId });
export const setBackRout = (rout: OneWayRouteType | null): actionType => ({ type: SET_BACK_ROUT, rout: rout });

