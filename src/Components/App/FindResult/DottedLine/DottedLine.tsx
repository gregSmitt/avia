import { Box, SxProps } from '@mui/material';
import { FC } from 'react';

const styles: SxProps = {
	position: 'absolute',
	top: 0,
	right: 0,
	borderTop: '1px dashed #5C87DB',
	width: '90%'
}
const DottedLine: FC = () => {

	return (
		<Box sx={styles} ></Box>
	);
}

export default DottedLine;