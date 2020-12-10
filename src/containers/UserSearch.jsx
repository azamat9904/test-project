import React, { useState, useCallback } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { UserSearch as UserSearchBase } from '../components';
import { setInputText } from '../redux/actions/Filter';

const UserSearch = () => {
    const [inputValue, setInputValue] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        if (!inputValue.trim())
            dispatch(setInputText(""));

    }, [inputValue, dispatch]);

    const onInputValueChange = (e) => {
        setInputValue(e.target.value);
    };

    const onSearch = useCallback(() => {
        dispatch(setInputText(inputValue));
    }, [inputValue, dispatch]);

    return <UserSearchBase
        inputValue={inputValue}
        setInputValue={onInputValueChange}
        search={onSearch}
    />
};

export default UserSearch;