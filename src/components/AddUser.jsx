import React from 'react';
import { Button } from 'antd';
import { Modal } from '../hoc';

const AddUser = ({
    isModalVisible,
    setIsModalVisible,
    showModal
}) => {
    return <div className="add-user">
        <div className="add-user__btn">
            <Button onClick={showModal}>Добавить пользователя</Button>
        </div>
        <div className="add-user__modal">
            <Modal
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
            >Hello world</Modal>
        </div>
    </div>
};

export default AddUser;