import { Box, SxProps } from '@mui/material';
import { FC } from 'react'
import { OneWayRouteType } from 'types/types';
import CompanyInfo from './CompanyInfo/CompanyInfo';
import DottedLine from './DottedLine/DottedLine';
import SelectInterval from './SelectInterval/SelectInterval';
import Sticker from './Sticker/Sticker';
import WayInfo from './WayInfo/WayInfo';

interface IProps {
	route: OneWayRouteType
	isBackRoute: boolean
	setRoutTimeInterval: (id: number) => void
	withDotted?: boolean
}

const ticketContainerStyles: SxProps = {
	height: '200px',
	display: 'flex',
	position: 'relative'
}
const ticketSmallContainerStyles: SxProps = {
	...ticketContainerStyles,
	height: '165px',
}

const OneWayRoute: FC<IProps> = ({
	route: {
		isReturnable,
		companyData,
		routeTime,
		startPoint,
		finishPoint,
		intervals },
	isBackRoute,
	setRoutTimeInterval,
	withDotted
}) => {
	return (
		<Box sx={isBackRoute ? ticketSmallContainerStyles : ticketContainerStyles}>
			{withDotted && <DottedLine />}
			<Sticker isReturnable={isReturnable} />
			<CompanyInfo
				companyData={companyData}
				isBackRout={isBackRoute}
			/>
			<Box sx={{ mt: '37px' }}>
				<WayInfo
					routeTime={routeTime}
					startPoint={startPoint}
					finishPoint={finishPoint}
				/>
				{!isBackRoute &&
					<SelectInterval
						setTicketInterval={setRoutTimeInterval}
						intervals={intervals}
					/>
				}
			</Box>
		</Box>
	);
}

export default OneWayRoute