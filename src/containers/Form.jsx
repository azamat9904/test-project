import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { generateId } from '../helpers';
import { addUserHandler, addUserStarted } from '../redux/actions/User';
import { Form as FormBase } from '../components';
import { getStatuses } from '../helpers/statuses';

const Form = ({
    formRef,
    initialValues
}) => {

    const [selectedStatus, setSelectedStatus] = useState(getStatuses()[0].type);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values, { resetForm }) => {
            const user = {
                key: generateId(),
                email: values.email,
                fullname: values.fullname,
                password: values.password,
                phone: values.phone,
                status: selectedStatus,
                created_at: new Date().toString(),
                updated_at: new Date().toString()
            }
            dispatch(addUserStarted());
            dispatch(addUserHandler(user));
            resetForm({});
        },
        validate: (values) => {
            const errors = {};

            if (!values.email) {
                errors.email = "Введите E-Mail";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Неверный E-Mail";
            }

            if (!values.password) {
                errors.password = "Введите пароль";
            } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(values.password)) {
                errors.password = "Слишком лёгкий пароль";
            }
            if (!values.repeatPassword) {
                errors.repeatPassword = "Введите пароль";
            } else if (values.repeatPassword !== values.password) {
                errors.repeatPassword = "Пароли не совпадают";
            }

            if (!values.fullname) {
                errors.fullname = "Укажите ФИО";
            }

            if (!values.phone) {
                errors.phone = "Введите номер телефона";
            } else if (!/^[0-9]*$/.test(values.phone) || values.phone.length < 5) {
                errors.phone = "Не валидный номер телефона";
            }
            return errors;
        }
    });

    return <FormBase
        getStatuses={getStatuses}
        values={formik.values}
        handleSubmit={formik.handleSubmit}
        handleChange={formik.handleChange}
        formRef={formRef}
        touched={formik.touched}
        errors={formik.errors}
        handleBlur={formik.handleBlur}
        isValid={formik.isValid}
        dirty={formik.dirty}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
    />
};

export default Form;