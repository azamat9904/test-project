import React, { useState } from 'react';
import { AddUser as AddUserBase } from '../components';

const AddUser = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    return <AddUserBase
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        showModal={showModal}
    />
};

export default AddUser;