import { SxProps, Typography } from '@mui/material';
import { FC } from 'react'
interface IProps {
	isReturnable: boolean
}

const stickerStyles: SxProps = {
	height: '26px',
	bgcolor: 'primary.light',
	fontStyle: 'normal',
	fontWeight: 600,
	fontSize: '12px',
	lineHeight: '14px',
	borderTopLeftRadius: '15px',
	borderBottomRightRadius: '15px',
	color: '#fff',
	boxSizing: 'border-box',
	p: '6px 24px 6px 23px',
	position: 'absolute',
	top: 0,
	left: 0,

}


const Sticker: FC<IProps> = ({ isReturnable }) => {

	return (
		<Typography component={'span'} sx={stickerStyles} >
			{isReturnable ? 'Возвратный' : 'Невозвратный'}
		</Typography>
	);
}

export default Sticker;