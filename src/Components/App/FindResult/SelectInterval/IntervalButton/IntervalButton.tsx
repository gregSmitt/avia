import { Box, SxProps, Typography } from '@mui/material';
import { FC } from 'react';
import { IntervalType } from 'types/types';
interface IProps {
	interval: IntervalType
	setTicketInterval: (id: number) => void
}

const containerStyles: SxProps = {
	height: '34px',
	border: '1px solid #B7BAC1',
	borderRadius: '10px',
	bgcolor: '#fff',
	mr: '20px',
	mt: '4px',
	display: 'flex',
	alignItems: 'center',
	flexWrap: 'nowrap',
	boxSizing: 'border-box',
	p: '0px 7px 0px 3px',
	cursor: 'pointer',
}
const containerStylesSelected: SxProps = {
	...containerStyles,
	height: '40px',
	border: 'none',
	bgcolor: '#DDE3EE',
	mt: '0px',
	mr: '17px',
	p: '0px 18px 0px 15px',
	cursor: 'default',
}
const textStyles: SxProps = {
	fontWeight: 500,
	fontSize: '18px',
	lineHeight: '21px',
	color: '#5C5C5C',
	wordWrap: 'break-word'
}
const textStylesSelected: SxProps = {
	...textStyles,
	color: '#232323'
}
const smallTextStyles: SxProps = {
	...textStyles,
	fontSize: '14px',
	lineHeight: '16px'
}
const smallTextStylesSelected: SxProps = {
	...smallTextStyles,
	color: '#232323'
}

const IntervalButton: FC<IProps> = ({ interval: { isChanged, startTime, finishTime, id }, setTicketInterval }) => {
	const setTicketIntervalHandler = () => {
		if (!isChanged) setTicketInterval(id);
	}

	return (
		<Box
			component='button'
			onClick={setTicketIntervalHandler}
			sx={isChanged ? containerStylesSelected : containerStyles}
		>
			<Typography sx={isChanged ? textStylesSelected : textStyles}>
				{startTime}&nbsp;-&nbsp;
			</Typography>
			<Typography sx={isChanged ? smallTextStylesSelected : smallTextStyles}>
				{finishTime}
			</Typography>
		</Box>
	);
}

export default IntervalButton;