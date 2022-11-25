import { setBackDataFlag, setStartPointData, setFinishPointData, setBackRout, setDataSetedFlag } from './../../../BLL/Reducers/responce-reducer';
import { setThereData } from './../../../BLL/Reducers/request-reducer';
import { getThereData } from 'BLL/Selectors/request-selector';
import { connect } from 'react-redux';
import { PointType, StateType, OneWayRouteType } from 'types/types';
import FindForm from './FindForm';

type MapStatePropsType = {
	thereData: string | null
}

type MapDispatchPropsType = {
	setThereData: (number: number) => void
	setDataSetedFlag: (flag: boolean) => void
	setBackDataFlag: (flag: boolean) => void
	setStartPointData: (data: PointType) => void
	setFinishPointData: (data: PointType) => void
	setBackRout: (rout: OneWayRouteType | null) => void
}

type OwnPropsType = {}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const mapStateToProps = (state: StateType): MapStatePropsType => {
	return {
		thereData: getThereData(state),
	}
}



const FindFormContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, StateType>(mapStateToProps, {
	setThereData,
	setBackDataFlag,
	setStartPointData,
	setFinishPointData,
	setBackRout,
	setDataSetedFlag
})(FindForm);
export default FindFormContainer;