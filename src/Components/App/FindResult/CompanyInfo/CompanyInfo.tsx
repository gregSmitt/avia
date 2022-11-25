import { Avatar, Box, SxProps, Typography } from '@mui/material';
import { FC } from 'react';
import defaultLogo from 'Common/Images/s7.svg';
import { CompanyDataType } from 'types/types';
interface IProps {
	isBackRout?: boolean
	companyData?: CompanyDataType
}

const containerStyles: SxProps = {
	width: '132px',
	mt: '54px',
	mr: '25px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center'
}
const containerStylesShifted: SxProps = {
	...containerStyles,
	mt: '56px',
}
const nameStyles: SxProps = {
	fontSize: '18px',
	lineHeight: '21px',
	color: '#5C5C5C'
}
const nameStylesShifted: SxProps = {
	...nameStyles,
	ml: '10px'
}
const avatarStyles: SxProps = {
	width: '39px',
	height: '39px',
	m: '0px 0px 8px 1px'
}
const avatarStylesShifted: SxProps = {
	...avatarStyles,
	m: '0px 0px 8px 11px'
}




const CompanyInfo: FC<IProps> = ({ isBackRout, companyData }) => {
	return (
		<Box sx={isBackRout ? containerStylesShifted : containerStyles}>
			<Avatar
				sx={isBackRout ? avatarStylesShifted : avatarStyles}
				src={companyData?.logo ? companyData?.logo : defaultLogo}
			/>
			<Typography component={'p'} sx={isBackRout ? nameStylesShifted : nameStyles}>
				{companyData?.name}
			</Typography>
		</Box>
	);
}

export default CompanyInfo;