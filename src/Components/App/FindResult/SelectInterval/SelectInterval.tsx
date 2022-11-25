import { Box, SxProps } from '@mui/material';
import { FC } from 'react';
import { IntervalType } from 'types/types';
import IntervalButton from './IntervalButton/IntervalButton';
interface IProps {
	intervals: IntervalType[]
	setTicketInterval: (id: number) => void
}

const containerStyles: SxProps = {
	display: 'flex',
	mt: '23px'
}


const SelectInterval: FC<IProps> = ({ intervals, setTicketInterval }) => {
	const intervalComponents = intervals.map(i => {
		return <IntervalButton key={i.id} interval={i} setTicketInterval={setTicketInterval} />
	});
	return (
		<Box sx={containerStyles}>
			{intervalComponents}
		</Box>
	);
}

export default SelectInterval;