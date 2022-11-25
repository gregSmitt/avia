import { formatDateToDDMMYY } from 'Common/Helpers/formatFuctions';
import { StateType } from 'types/types';
import { createSelector } from 'reselect';



const getThereDataSelector = (state: StateType): number | null => {
	return state.requestState.thereData;
}
export const getThereData = createSelector(getThereDataSelector,
	(thereData: number | null): string | null => {
		if (thereData) {
			return formatDateToDDMMYY(thereData);
		} else return null;
	}
);
