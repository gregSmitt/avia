//=================================================================== State ============================================================
export type RequestStateType = {
	aPoint: string | null
	bPoint: string | null
	thereData: number | null
	backData: number | null
}

export type PointType = {
	time: string
	city: string
	data: number
	sign: string
}

export type IntervalType = {
	id: number
	isChanged: boolean
	startTime: string
	finishTime: string
}
export type CompanyDataType = {
	name: string
	logo: string | null
}

export type OneWayRouteType = {
	companyData: CompanyDataType
	startPoint: PointType
	finishPoint: PointType
	routeTime: string
	cost: number
	isReturnable: boolean
	intervals: Array<IntervalType> | []
}

export type RouteType = {
	id: number //id предложения
	thereRout: OneWayRouteType
	backRout: OneWayRouteType | null
}

export type ResponseStateType = {
	isDataSeted: boolean
	isBackData: boolean
	routs: Array<RouteType>
}

export type StateType = {
	requestState: RequestStateType
	answerState: ResponseStateType
}

//==================================================================== Redux ==========================================================

export type actionType = {
	type: string
	mSeconds?: number
	text?: string
	flag?: boolean
	pointData?: PointType
	id?: number
	rout?: OneWayRouteType | null
}
