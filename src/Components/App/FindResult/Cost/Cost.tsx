import { Box, SxProps, Typography } from '@mui/material';
import { FC } from 'react';
interface IProps {
	isBackRout?: boolean
	cost: number
}

const containerStyles: SxProps = {
	borderLeft: '1px solid #DDE3EE',
}
const textStyles: SxProps = {
	mt: '80px',
	ml: '48px',
	fontWeight: 700,
	fontSize: '32px',
	lineHeight: '38px',
	color: '#232323',
}
const textStylesShifted: SxProps = {
	...textStyles,
	mt: '141px',
	ml: '46px',
}
const numberWithSpaces = (x: string | number): string => {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const Cost: FC<IProps> = ({ isBackRout, cost }) => {

	return (
		<Box sx={containerStyles}>
			<Typography sx={isBackRout ? textStylesShifted : textStyles}>{numberWithSpaces(cost)} ₽</Typography>
		</Box>
	);
}

export default Cost;