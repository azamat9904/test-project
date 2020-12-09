export const actionTypes = {
    SET_FILTER_BY: "SET_FILTER_BY",
    SET_INPUT_TEXT: "SET_INPUT_TEXT"
};

export const setFilterBy = (filterBy) => ({
    type: actionTypes.SET_FILTER_BY,
    payload: filterBy
});

export const setInputText = (text) => ({
    type: actionTypes.SET_INPUT_TEXT,
    payload: text
});
