import React, { useState, useRef, useEffect } from 'react';
import { AddUser as AddUserBase } from '../components';
import { openNotification } from '../helpers';
import { useSelector } from 'react-redux';
import { getAddUserSuccess } from '../redux/selectors/User';

const initialValues = {
    email: '',
    fullname: '',
    password: '',
    repeatPassword: '',
    phone: '',
};

const AddUser = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const formRef = useRef(null);
    const addUserSuccess = useSelector((state) => getAddUserSuccess(state));

    const showModal = () => {
        setIsModalVisible(true);
    };

    useEffect(() => {
        if (addUserSuccess) {
            setIsModalVisible(false);
            openNotification("Добавление пользователя", "Пользователь успешно добавлен", "success");
        }
    }, [addUserSuccess]);

    return <AddUserBase
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        showModal={showModal}
        formRef={formRef}
        initialValues={initialValues}
    />
};

export default AddUser;