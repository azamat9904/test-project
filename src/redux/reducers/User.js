
import { produce } from 'immer';

const initialState = {
    users: []
};

const User = produce((draft, action) => {
    switch (action.type) {
        default:
            break;
    }
}, initialState)

export default User;