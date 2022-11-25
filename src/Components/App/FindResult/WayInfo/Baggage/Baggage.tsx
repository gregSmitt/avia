import { Box, SxProps } from '@mui/material';
import { FC } from 'react'
import bagImageSmall from 'Common/Images/bag_small.svg';
import bagImage from 'Common/Images/bag_big.svg';
import c from './Baggage.module.scss';
interface IProps {
}


const Baggage: FC<IProps> = (props) => {

	return (
		<Box className={c.container}>
			<img src={bagImageSmall} alt="" className={c.small} />
			<img src={bagImage} alt="" className={c.big} />
		</Box>
	);
}

export default Baggage;