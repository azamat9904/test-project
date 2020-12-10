import { useState, useRef, useEffect } from 'react';
import { Table as TableBase } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredUsers, getEditUserSuccess } from '../redux/selectors/User';
import { getColor } from '../helpers';
import { deleteUserHandler } from '../redux/actions/User';
import { openNotification } from '../helpers';

const Table = () => {
    const { users, editUserSuccess } = useSelector((state) => ({
        users: getFilteredUsers(state),
        editUserSuccess: getEditUserSuccess(state)
    }));

    const [chosenUser, setChosenUser] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const formRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (editUserSuccess) {
            setIsModalVisible(false);
            openNotification("Редактирование пользователя", "Пользователь успешно отредактирован", "success");
            setChosenUser(null);
        }
    }, [editUserSuccess]);

    const onRemoveItem = (id) => {
        if (window.confirm("Вы уверены что хотите удалить ?")) {
            dispatch(deleteUserHandler(id));
            openNotification("Удаление пользователя", "Пользователь успешно удален", "success");
        }
    };


    const onEditItem = (id) => {
        const foundUser = users.find((user) => user.key === id);
        setChosenUser({
            key: foundUser.key,
            email: foundUser.email,
            password: foundUser.password,
            repeatPassword: foundUser.password,
            status: foundUser.status,
            phone: foundUser.phone,
            fullname: foundUser.fullname,
            isCreation: false,
            created_at: foundUser.created_at
        });
        setIsModalVisible(true);
    }

    return <TableBase
        data={users}
        getColor={getColor}
        onRemoveItem={onRemoveItem}
        onEditItem={onEditItem}
        chosenUser={chosenUser}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        formRef={formRef}
    />
}

export default Table;