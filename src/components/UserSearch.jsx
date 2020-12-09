import React from 'react';
import { Input } from 'antd';

const UserSearch = ({
    inputValue,
    setInputValue,
    search
}) => {
    return <div className="users-search">
        <Input.Search
            placeholder="input search text"
            allowClear
            value={inputValue}
            onChange={setInputValue}
            onSearch={search}
        />
    </div>
};

export default UserSearch;