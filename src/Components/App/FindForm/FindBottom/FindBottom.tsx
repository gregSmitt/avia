import { Box, SxProps } from '@mui/material';
import { FC } from 'react'
import { useFormContext } from "react-hook-form";
import CssButton from './CssButton';
interface IProps {
}

const bottomContainer: SxProps = {
	width: '100%',
	borderRadius: '0 0 15px 15px',
	boxShadow: '0px 0px 14px rgba(112, 121, 153, 0.3)',
	flexGrow: 3,
	padding: '23px 29px',
	boxSizing: 'border-box',
	display: 'flex',
	justifyContent: 'end'
}


const FindBottom: FC<IProps> = (props: IProps) => {
	const { formState: { isValid } } = useFormContext();
	return (
		<Box sx={bottomContainer} >
			<CssButton variant="contained" type='submit' disabled={!isValid}>
				Найти билеты
			</CssButton>
		</Box>
	);
}

export default FindBottom;


