import { SxProps, Typography } from '@mui/material';
import { FC } from 'react'
import c from './WayGraph.module.scss'
interface IProps {
	startSign: string
	finishSign: string
	time: string
}
interface ISignProps {
	text: string
}

const Graph: FC = () => {
	return (
		<div className={c.graph}>
			<div className={c.left}></div>
			<div className={c.right}></div>
		</div>
	);
}

const Sign: FC<ISignProps> = ({ text }) => <p className={c.sign}>{text}</p>

const WayGraph: FC<IProps> = ({ startSign, finishSign, time }) => {
	return (
		<div className={c.container}>
			<div className={c.container__signs}>
				<Sign text={startSign} />
				<Sign text={finishSign} />
			</div>
			<Graph />
			<p className={c.time}>{time}</p>
		</div>
	);
}

export default WayGraph;