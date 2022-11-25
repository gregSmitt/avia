import { Box, SxProps } from '@mui/material';
import { FC } from 'react'
import FindInput from './FindInput/FindInput';
interface IProps {
}


const Dashed: FC = () => <Box sx={{ flexGrow: 3, height: '1px', borderBottom: ' 1px dashed #FFFFFF', position: 'relative', top: '32px', mr: '2px' }}></Box>

const FindInputs: FC<IProps> = () => {

	const containerStyles: SxProps = {
		height: '100px',
		width: '100%',
		backgroundColor: 'primary.main',
		borderRadius: '15px 15px 0 0',
		p: '17px 29px 0px 30px',
		boxSizing: 'border-box',
		display: 'flex'
	}


	return (
		<Box sx={containerStyles}>
			<Box sx={{ display: 'flex', width: '441px', justifyContent: 'space-between', mr: '24px' }}>
				<FindInput label={'Откуда'} placeholder='Город вылета' formName='aPoint' required />
				<FindInput label={'Куда'} placeholder='Город прилета' formName='bPoint' required />
			</Box>
			<Box sx={{ display: 'flex', width: '438px', position: 'relative', top: '3px' }}>
				<FindInput value={'22.11.22'} label={'Туда'} placeholder='дд.мм.гг' formName='thereData' dataInput required />
				<Dashed />
				<FindInput label={'Обратно'} placeholder='дд.мм.гг' formName='backData' dataInput />
			</Box>
		</Box>
	);
}

export default FindInputs;