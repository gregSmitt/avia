import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

let textFieldProperties = {
	'& .MuiInputBase-root': {
		backgroundColor: '#ffffff',
		borderRadius: '10px',
		width: '208px',
		height: '40px',
		fontStyle: 'normal',
		fontWeight: 700,
		fontSize: '14px',
		lineHeight: '16px',
		color: '#5C5C5C',
		padding: '12px',
		'& .MuiInputAdornment-root': {
			marginRight: '6px',
		},
		'& ::placeholder': {
			color: '#B7BAC1',
			opacity: 1
		},
		'&.Mui-focused .MuiSvgIcon-root': {
			color: '#5C87DB',
		},
	},
	'& .MuiOutlinedInput-input': {
		padding: '0px'
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderColor: 'transparent',
		},
		'&:hover fieldset': {
			borderColor: 'transparent',
		},
		'&.Mui-focused fieldset': {
			borderColor: 'transparent',
		},
	},
}

let dataFieldProperties = {
	...textFieldProperties,
	'& .MuiInputBase-root': {
		...textFieldProperties['& .MuiInputBase-root'],
		'& ::placeholder': {
			...textFieldProperties['& .MuiInputBase-root']['& ::placeholder'],
			color: '#E0E1E3'
		}
	}
}


export const CssTextField = styled(TextField)(textFieldProperties);

export const CssDataField = styled(TextField)(dataFieldProperties);