import { createSelector } from 'reselect';
import { getFilterBy, getInputSearch } from './Filter';
import { filterByInput, filterByStatus } from '../../helpers';

export const getUsers = (state) => state.userState.users;

export const getFilteredUsers = createSelector([getFilterBy, getInputSearch, getUsers],
    (filterBy, inputSearch, users) => {
        console.log(inputSearch);
        if (filterBy.type === "all") {
            return filterByInput(users, inputSearch);
        }
        const filteredUsers = filterByStatus(users, filterBy.type);
        return filterByInput(filteredUsers, inputSearch);
    });