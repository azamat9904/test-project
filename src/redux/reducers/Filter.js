import { actionTypes } from '../actions/Filter';
import { produce } from 'immer';

const initialState = {
    filterBy: {
        name: 'Клиент',
        type: 'Client'
    },
    inputSearch: null
};

const Filter = produce((draft, action) => {
    switch (action.type) {
        case actionTypes.SET_FILTER_BY:
            draft.filterBy = action.payload;
            break;
        case actionTypes.SET_INPUT_TEXT:
            draft.inputText = action.payload;
        default:
            break;
    }
}, initialState);


export default Filter;