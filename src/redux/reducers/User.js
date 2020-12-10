import { actionTypes } from '../actions/User';

import { produce } from 'immer';

const initialState = {
    users: [],
    addUserSuccess: false,
    editUserSuccess: false
};

const User = produce((draft, action) => {
    switch (action.type) {
        case actionTypes.SET_USERS:
            draft.users = action.payload;
            break;
        case actionTypes.ADD_USER:
            draft.users.push(action.payload);
            draft.addUserSuccess = true;
            break;
        case actionTypes.DELETE_USER:
            draft.users.splice(action.payload, 1);
            break;
        case actionTypes.ADD_USER_STARTED:
            draft.addUserSuccess = false;
            break;
        case actionTypes.EDIT_USER_STARTED:
            draft.editUserSuccess = false;
            break;
        case actionTypes.EDIT_USER:
            draft.users.splice(action.payload.neeededUserIndex, 1, action.payload.user);
            draft.editUserSuccess = true;
            break;
        default:
            break;
    }
}, initialState)

export default User;