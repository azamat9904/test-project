import { actionTypes } from '../actions/User';

import { produce } from 'immer';

const initialState = {
    users: []
};

const User = produce((draft, action) => {
    switch (action.type) {
        case actionTypes.SET_USERS:
            draft.users = action.payload;
            break;
        case actionTypes.ADD_USER:
            draft.users.push(action.payload);
            break;
        case actionTypes.DELETE_USER:
            draft.users.splice(action.payload, 1);
            break;
        default:
            break;
    }
}, initialState)

export default User;