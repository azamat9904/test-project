import React from 'react';
import { Form, Input, Select } from 'antd';
import { validateField } from '../helpers';


const FormBase = ({
    getStatuses,
    values,
    handleSubmit,
    handleChange,
    formRef,
    touched,
    errors,
    handleBlur,
    selectedStatus,
    setSelectedStatus
}) => {

    return (
        <Form
            className="creation-form"
            onFinish={handleSubmit}
            ref={formRef}
            initialValues={{
                email: values.email,
                password: values.password,
                repeatPassword: values.repeatPassword,
                fullname: values.fullname,
                phone: values.phone
            }}
        >
            <Form.Item
                name="email"
                validateStatus={validateField("email", touched, errors)}
                hasFeedback
                help={!touched.email ? null : errors.email}
            >
                <Input
                    placeholder="Введите почту"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </Form.Item>
            <Form.Item
                name="fullname"
                validateStatus={validateField("fullname", touched, errors)}
                hasFeedback
                help={!touched.fullname ? null : errors.fullname}
            >
                <Input
                    placeholder="Введите ФИО"
                    value={values.fullname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </Form.Item>
            <Form.Item
                name="password"
                validateStatus={validateField("password", touched, errors)}
                hasFeedback
                help={!touched.password ? null : errors.password}
            >
                <Input.Password
                    placeholder="Введите пароль"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    allowClear
                />
            </Form.Item>
            <Form.Item
                name="repeatPassword"
                validateStatus={validateField("repeatPassword", touched, errors)}
                hasFeedback
                help={!touched.repeatPassword ? null : errors.repeatPassword}
            >
                <Input.Password
                    placeholder="Подтвердите пароль"
                    value={values.repeatPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    allowClear
                />
            </Form.Item>
            <Form.Item
                name="phone"
                validateStatus={validateField("phone", touched, errors)}
                hasFeedback
                help={!touched.phone ? null : errors.phone}
            >
                <Input
                    placeholder="Введите номер телефона"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </Form.Item>
            <Form.Item>
                <Select
                    value={selectedStatus}
                    onChange={setSelectedStatus}
                >
                    {
                        getStatuses().map((status, index) => (
                            <Select.Option
                                value={status.type}
                                key={index}
                            >{status.name}</Select.Option>
                        ))
                    }
                </Select>
            </Form.Item>
        </Form >
    )
}

export default FormBase;