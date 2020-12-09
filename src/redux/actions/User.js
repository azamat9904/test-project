export const actionTypes = {
    SET_USERS: "SET_USERS"
};

export const setUsers = (users) => ({
    type: actionTypes.SET_USERS,
    payload: users
});

export const initUsers = () => {
    const users = localStorage.getItem('users');
    if (users) {
        users = JSON.parse(users);
        return setUsers(users);
    }
    return setUsers([]);
}