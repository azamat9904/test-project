import { createSelector } from 'reselect';
import { getFilterBy, getInputSearch } from './Filter';
import { filterByInput, filterByStatus } from '../../helpers';

export const getUsers = (state) => state.userState.users;
export const getAddUserSuccess = (state) => state.userState.addUserSuccess;
export const getEditUserSuccess = (state) => state.userState.editUserSuccess;

export const getFilteredUsers = createSelector([getFilterBy, getInputSearch, getUsers],
    (filterBy, inputSearch, users) => {
        if (filterBy.type === "all") {
            return filterByInput(users, inputSearch);
        }
        const filteredUsers = filterByStatus(users, filterBy.type);
        return filterByInput(filteredUsers, inputSearch);
    });