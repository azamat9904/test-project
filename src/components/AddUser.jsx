import React from 'react';
import { Button } from 'antd';
import { Modal } from '../hoc';
import { Form } from '../containers';

const AddUser = ({
    isModalVisible,
    setIsModalVisible,
    showModal,
    formRef,
    initialValues
}) => {
    return <div className="add-user">
        <div className="add-user__btn">
            <Button onClick={showModal}>Добавить пользователя</Button>
        </div>
        <div className="add-user__modal">
            {
                isModalVisible && <Modal
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}
                    title={"Добавление пользователя"}
                    formRef={formRef}
                    modalCreation
                ><Form formRef={formRef} initialValues={initialValues} /></Modal>
            }
        </div>
    </div>
};

export default AddUser;