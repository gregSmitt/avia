import { Box, SxProps } from '@mui/material';
import { FC, useEffect } from 'react'
import FindBottom from './FindBottom/FindBottom';
import FindInputs from './FindInputs/FindInputs';
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { PointType, OneWayRouteType } from 'types/types';
import { useNavigate } from 'react-router-dom';
import { toUpper, fromDDMMYYtoNumber } from 'Common/Helpers/formatFuctions';
interface IProps {
	thereData: string | null

	setThereData: (number: number) => void
	setBackDataFlag: (flag: boolean) => void
	setStartPointData: (data: PointType) => void
	setFinishPointData: (data: PointType) => void
	setBackRout: (rout: OneWayRouteType | null) => void
	setDataSetedFlag: (flag: boolean) => void
}

type Inputs = {
	aPoint: string | null
	bPoint: string | null
	thereData: string | null
	backData?: string | null
};

const containerStyles: SxProps = {
	width: '962px',
	height: '186px',
	mt: '68px',
	display: 'flex',
	flexDirection: 'column'
}

const FindForm: FC<IProps> = ({
	thereData,
	setThereData,
	setBackDataFlag,
	setStartPointData,
	setFinishPointData,
	setBackRout,
	setDataSetedFlag }) => {
	const navigate = useNavigate();
	useEffect(() => {
		if (thereData) {
			setValue("thereData", thereData);
		} else {
			setThereData(new Date().getTime());
		}
	}, [thereData]);


	const methods = useForm<Inputs>({
		mode: 'onBlur',
		defaultValues: {
			aPoint: '',
			bPoint: '',
			thereData: '',
			backData: ''
		}
	});


	const { handleSubmit, setValue } = methods;
	const onSubmit: SubmitHandler<Inputs> = ({ aPoint, bPoint, thereData, backData }) => {
		if (aPoint && thereData && bPoint) {
			setDataSetedFlag(true);
			setStartPointData({
				time: '9:20',
				city: toUpper(aPoint),
				data: fromDDMMYYtoNumber(thereData),
				sign: 'SVO'
			})
			setFinishPointData({
				time: '11.05',
				city: toUpper(bPoint),
				data: fromDDMMYYtoNumber(thereData),
				sign: 'ROV'
			})

			setBackRout(backData ? {
				companyData: {
					name: 'S7 Airlines',
					logo: null
				},
				startPoint: {
					time: '9:20',
					city: toUpper(bPoint),
					data: fromDDMMYYtoNumber(backData),
					sign: 'ROV'
				},
				finishPoint: {
					time: '11:05',
					city: toUpper(aPoint),
					data: fromDDMMYYtoNumber(backData),
					sign: 'SVO'
				},
				isReturnable: false,
				routeTime: '1 час, 55 мин',
				cost: 4150,
				intervals: []
			}
				: null)
		}

		setBackDataFlag(backData ? true : false);

		navigate('/avia/info');
	}

	return (
		<FormProvider {...methods} >
			<Box component={'form'} onSubmit={handleSubmit(onSubmit)} sx={containerStyles}>
				<FindInputs />
				<FindBottom />
			</Box>
		</FormProvider>
	);
}

export default FindForm;