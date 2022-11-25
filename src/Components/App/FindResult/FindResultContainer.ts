import { setRoutTimeInterval } from './../../../BLL/Reducers/responce-reducer';
import { getRouts, getIsBackRout, getIsDataSeted } from 'BLL/Selectors/responce-selector';
import { connect } from 'react-redux';
import { StateType, RouteType } from 'types/types';
import FindResult from './FindResult';

type MapStatePropsType = {
	routs: RouteType[]
	isBackRout: boolean
	isDataSeted: boolean
}

type MapDispatchPropsType = {
	setRoutTimeInterval: (id: number) => void
}

type OwnPropsType = {}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const mapStateToProps = (state: StateType): MapStatePropsType => {
	return {
		routs: getRouts(state),
		isBackRout: getIsBackRout(state),
		isDataSeted: getIsDataSeted(state)
	}
}



const FindResultContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, StateType>(mapStateToProps, {
	setRoutTimeInterval
})(FindResult);
export default FindResultContainer;