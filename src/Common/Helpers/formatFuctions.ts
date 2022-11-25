export const toUpper = (str: string): string => {
	return str
		.toLowerCase()
		.split(' ')
		.map(word => word[0].toUpperCase() + word.substr(1))
		.join(' ');
}

export const formatDateToDDMMYY = (mSeconds: number, full?: boolean): string => {
	const getDataString = (number: number): string => {
		return (number < 10) ? `0${number}` : `${number}`
	}
	const date = new Date(mSeconds);
	const dd = date.getDate();
	const mm = date.getMonth() + 1;
	const yy = full ? date.getFullYear() : date.getFullYear() % 100;

	return `${getDataString(dd)}.${getDataString(mm)}.${getDataString(yy)}`;
}

export const fromDDMMYYtoNumber = (date: string): number => {
	const arr: string[] | number[] = date.split('.').map(Number);
	return new Date(arr[2] + 2000, arr[1] - 1, arr[0]).getTime();
}