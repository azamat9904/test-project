import React from 'react';
import { Modal as ModalBase } from 'antd';

const Modal = ({
    children,
    isModalVisible,
    setIsModalVisible,
    createdModal
}) => {

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <ModalBase
            title="Basic Modal"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            okText={createdModal ? 'Создать пользователя' : 'Редактировать пользователя'}
        >
            {children}
        </ModalBase>
    )
};

export default Modal;