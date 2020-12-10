import React, { useState, useRef, useEffect } from 'react';
import { AddUser as AddUserBase } from '../components';
import { openNotification } from '../helpers';
import { useSelector } from 'react-redux';
import { getAddUserSuccess } from '../redux/selectors/User';


const AddUser = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const addUserSuccess = useSelector((state) => getAddUserSuccess(state));

    const formRef = useRef(null);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = (e) => {
        formRef.current.submit();
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
        handleOk={handleOk}
        formRef={formRef}
    />
};

export default AddUser;