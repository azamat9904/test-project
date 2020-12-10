import React from 'react';
import { Input } from 'antd';

const UserSearch = ({
    inputValue,
    setInputValue,
    search
}) => {
    return <div className="users-search">
        <Input.Search
            placeholder="Поиск по почте или номеру"
            allowClear
            value={inputValue}
            onChange={setInputValue}
            onSearch={search}
        />
    </div>
};

export default UserSearch;