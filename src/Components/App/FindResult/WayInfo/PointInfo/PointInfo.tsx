import { Box, SxProps, Typography } from '@mui/material';
import { formatDateToDDMMYY } from 'Common/Helpers/formatFuctions';
import { FC } from 'react'
import { PointType } from 'types/types';
interface IProps {
	width: string,
	point: PointType
}

const timeStyles: SxProps = {
	mt: '4px',
	mb: '8px',
	fontWeight: 700,
	fontSize: '24px',
	lineHeight: '28px',
	color: '#232323',
}
const textStyle: SxProps = {
	fontWeight: 500,
	fontSize: '14px',
	lineHeight: '16px',
	color: '#5C5C5C',
}



const PointInfo: FC<IProps> = ({ width, point: { city, time, data } }) => {
	return (
		<Box sx={{ width: width }}>
			<Typography sx={timeStyles}>{time}</Typography>
			<Typography sx={textStyle}>{city}</Typography>
			<Typography sx={textStyle}>{formatDateToDDMMYY(data, true)}</Typography>
		</Box>
	);
}

export default PointInfo;