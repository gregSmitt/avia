import { Box, ThemeProvider, createTheme } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import FindFormContainer from './FindForm/FindFormContainer';
import FindResultContainer from './FindResult/FindResultContainer';

const theme = createTheme({
	palette: {
		primary: {
			main: '#5C87DB',
			light: '#8BA5D8'
		},
		secondary: {
			main: '#5C5C5C'
		}
	},
});


function App() {

	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Routes>
					<Route path="avia/" element={<FindFormContainer />} />
					<Route path="avia/info" element={<FindResultContainer />} />
				</Routes>
			</Box>
		</ThemeProvider>
	);
}

export default App;
