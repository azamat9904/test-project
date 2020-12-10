import React from 'react';
import { Modal as ModalBase } from 'antd';

const Modal = ({
    title,
    children,
    isModalVisible,
    setIsModalVisible,
    modalCreation,
    handleOk
}) => {


    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <ModalBase
            title={title}
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            okText={modalCreation ? 'Создать пользователя' : 'Редактировать пользователя'}
            
        >
            {children}
        </ModalBase>
    )
};

export default Modal;