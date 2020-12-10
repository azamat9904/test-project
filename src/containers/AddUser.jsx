import React, { useState, useRef } from 'react';
import { AddUser as AddUserBase } from '../components';
import { openNotification } from '../helpers';

const AddUser = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const formRef = useRef(null);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = (e) => {
        formRef.current.submit();
        setIsModalVisible(false);
        openNotification("Добавление пользователя", "Пользователь успешно добавлен", "success");
    };

    return <AddUserBase
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        showModal={showModal}
        handleOk={handleOk}
        formRef={formRef}
    />
};

export default AddUser;