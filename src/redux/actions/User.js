const getLocalStorageUsers = () => {
    let users = localStorage.getItem('users');
    if (users)
        return JSON.parse(users);

    return [];
};

export const actionTypes = {
    SET_USERS: "SET_USERS",
    ADD_USER: "ADD_USER",
    DELETE_USER: "DELETE_USER",
    ADD_USER_STARTED: "ADD_USER_STARTED"
};

export const setUsers = (users) => ({
    type: actionTypes.SET_USERS,
    payload: users
});

export const addUser = (user) => ({
    type: actionTypes.ADD_USER,
    payload: user
});

export const deleteUser = (index) => ({
    type: actionTypes.DELETE_USER,
    payload: index
});

export const initUsers = () => {
    const users = getLocalStorageUsers();
    return setUsers(users);
}

export const addUserStarted = () => ({
    type: actionTypes.ADD_USER_STARTED
});

export const addUserHandler = (user) => {
    const users = getLocalStorageUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    return addUser(user);
}

export const deleteUserHandler = (id) => {
    let users = getLocalStorageUsers();
    const neeededUserIndex = users.findIndex((user) => user.key === id);
    users.splice(neeededUserIndex, 1);
    localStorage.setItem('users', JSON.stringify(users));
    return deleteUser(neeededUserIndex);
}