import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserSearch as UserSearchBase } from '../components';
import { setInputText } from '../redux/actions/Filter';

const UserSearch = () => {
    const [inputValue, setInputValue] = useState("");

    const dispatch = useDispatch();

    const onInputValueChange = (e) => {
        setInputValue(e.target.value);
    };

    const onSearch = () => {
        dispatch(setInputText(inputValue));
    };

    return <UserSearchBase
        inputValue={inputValue}
        setInputValue={onInputValueChange}
        search={onSearch}
    />
};

export default UserSearch;