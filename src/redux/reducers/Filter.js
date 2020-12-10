import { actionTypes } from '../actions/Filter';
import { produce } from 'immer';
import { statuses } from '../../helpers';

const initialState = {
    filterBy: statuses[0],
    inputSearch: ""
};

const Filter = produce((draft, action) => {
    switch (action.type) {
        case actionTypes.SET_FILTER_BY:
            draft.filterBy = action.payload;
            break;
        case actionTypes.SET_INPUT_TEXT:
            draft.inputSearch = action.payload;
            break;
        default:
            break;
    }
}, initialState);


export default Filter;