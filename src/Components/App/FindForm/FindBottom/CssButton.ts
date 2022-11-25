import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const CssButton = styled(Button)({
	background: 'primary.main',
	borderRadius: '10px',
	boxShadow: 'none',
	width: '158px',
	height: '40px',
	textTransform: 'none',
	'&:hover': {
		backgroundColor: '#3E67B7',
		borderColor: '#0062cc',
		boxShadow: 'none',
	},
	'&:active': {
		boxShadow: '0px 4px 4px rgba(92, 135, 219, 0.15)',
		backgroundColor: '#5C87DB',
		color: 'rgba(255, 255, 255, 0.5)'
	},
	'&:focus': {
		boxShadow: 'none',
	},
	'&.Mui-disabled': {
		backgroundColor: '#B7BAC1',
		color: '#fff'
	},
});

export default CssButton;