import React from 'react';
import { Button } from 'antd';
import { Modal } from '../hoc';
import { Form } from '../containers';

const AddUser = ({
    isModalVisible,
    setIsModalVisible,
    showModal,
    handleOk,
    formRef
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
                    handleOk={handleOk}
                    modalCreation
                ><Form formRef={formRef} /></Modal>
            }
        </div>
    </div>
};

export default AddUser;