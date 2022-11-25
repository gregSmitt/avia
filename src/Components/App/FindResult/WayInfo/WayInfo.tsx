import { Box } from '@mui/material';
import { FC } from 'react'
import { PointType } from 'types/types';
import Baggage from './Baggage/Baggage';
import PointInfo from './PointInfo/PointInfo';
import WayGraph from './WayGraph/WayGraph';
interface IProps {
	startPoint: PointType
	finishPoint: PointType
	routeTime: string
}



const WayInfo: FC<IProps> = ({ startPoint, finishPoint, routeTime }) => {
	return (
		<Box sx={{ display: 'flex' }}>
			<PointInfo point={startPoint} width='102px' />
			<WayGraph startSign={startPoint.sign} finishSign={finishPoint.sign} time={routeTime} />
			<PointInfo point={finishPoint} width='112px' />
			<Baggage />
		</Box>
	);
}

export default WayInfo;