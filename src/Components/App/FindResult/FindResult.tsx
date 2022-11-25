import { Box, SxProps } from '@mui/material';
import { FC } from 'react'
import { Navigate } from 'react-router-dom';
import { RouteType } from 'types/types';
import Cost from './Cost/Cost';
import OneWayRoute from './OneWayRoute';
interface IProps {
	routs: RouteType[]
	isBackRout: boolean
	isDataSeted: boolean
	setRoutTimeInterval: (id: number) => void
}

const containerStyles: SxProps = {
	width: '980px',
	mt: '68px',
	display: 'flex',
	boxShadow: '0px 0px 14px rgba(112, 121, 153, 0.3)',
	borderRadius: '15px',
}


const FindResult: FC<IProps> = ({ routs, isBackRout, setRoutTimeInterval, isDataSeted }) => {
	const tickets = routs.map(route => {
		return (
			<Box sx={containerStyles} key={route.id}>
				<Box>
					<OneWayRoute
						route={route.thereRout}
						isBackRoute={isBackRout}
						setRoutTimeInterval={setRoutTimeInterval}
					/>
					{isBackRout && route.backRout &&
						<OneWayRoute
							route={route.backRout}
							isBackRoute={isBackRout}
							setRoutTimeInterval={setRoutTimeInterval}
							withDotted
						/>
					}
				</Box>
				<Cost
					cost={(route.backRout && isBackRout) ? route.backRout.cost + route.thereRout.cost : route.thereRout.cost}
					isBackRout={isBackRout}
				/>
			</Box>
		);
	})
	if (isDataSeted) {
		return <>{tickets}</>
	} else return <Navigate to='/avia' />
}

export default FindResult;