import { Box, InputAdornment, OutlinedInputProps, TextField, SxProps, Typography } from '@mui/material';
import { FC } from 'react';
import DataRangeIcon from 'Common/Components/DataRangeIcon';
import { useFormContext, Controller } from "react-hook-form";
import { CssDataField, CssTextField } from './CssFields';
import InputMask from "react-input-mask";

interface IProps {
	label: string
	placeholder: string
	formName: string
	dataInput?: boolean
	value?: string
	required?: boolean
}



const FindInput: FC<IProps> = ({ label, placeholder, dataInput, value, formName, required }: IProps) => {

	const labelStyles: SxProps = {
		fontStyle: 'normal',
		fontWeight: 400,
		fontSize: '11px',
		lineHeight: '13px',
		color: '#FFFFFF',
	}

	const isValue: boolean = value ? true : false;


	const inputProps: Partial<OutlinedInputProps> | undefined = dataInput ? {
		startAdornment: (
			<InputAdornment position="start">
				<DataRangeIcon isValue={isValue} />
			</InputAdornment>
		),
	} : undefined;


	const { control } = useFormContext();
	const isRequired = required ? true : false

	if (dataInput) {
		return (
			<Box>
				<Typography component={'p'} sx={labelStyles}>{label}</Typography>
				<Controller
					control={control}
					name={formName}
					rules={{
						pattern: /[0-9]{2}.[0-9]{2}.[0-9]{2}/,
						required: isRequired,
					}}

					render={({ field }) => (
						<InputMask
							mask="99.99.99"
							{...field}
						>
							<CssDataField
								{...field}
								placeholder={placeholder}
								variant="outlined"
								InputProps={inputProps} />
						</InputMask>
					)}
				/>
			</Box>
		);
	} else {
		return (
			<Box>
				<Typography component={'p'} sx={labelStyles}>{label}</Typography>
				<Controller
					control={control}
					name={formName}
					rules={{ required: isRequired }}
					render={({ field }) => (
						<CssTextField
							{...field}
							placeholder={placeholder}
							variant="outlined"
							InputProps={inputProps} />
					)}
				/>
			</Box>
		);
	}
}

export default FindInput;