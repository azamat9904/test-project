import React from 'react';
import { Modal } from '../hoc';
import { Form } from '../containers';

const EditUser = ({
    isModalVisible,
    setIsModalVisible,
    formRef,
    initialValues
}) => {
    return (
        <>
            {
                isModalVisible && <Modal
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}
                    title={"Редактирование пользователя"}
                    formRef={formRef}
                >
                    <Form
                        formRef={formRef}
                        initialValues={initialValues}
                    />
                </Modal>
            }
        </>
    )
};

export default EditUser;