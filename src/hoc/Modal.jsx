import React from 'react';
import { Modal as ModalBase } from 'antd';

const Modal = ({
    title,
    children,
    isModalVisible,
    setIsModalVisible,
    modalCreation,
    formRef
}) => {


    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleOk = () => {
        formRef.current.submit();
    };

    return (
        <ModalBase
            title={title}
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            okText={modalCreation ? 'Создать пользователя' : 'Редактировать пользователя'}
            cancelText={"Отменить"}
        >
            {children}
        </ModalBase>
    )
};

export default Modal;