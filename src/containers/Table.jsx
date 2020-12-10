import { Table as TableBase } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredUsers } from '../redux/selectors/User';
import { getColor } from '../helpers';
import { deleteUserHandler } from '../redux/actions/User';
import { openNotification } from '../helpers';

const Table = () => {

    const users = useSelector((state) => getFilteredUsers(state));
    const dispatch = useDispatch();

    const onRemoveItem = (id) => {
        if (window.confirm("Вы уверены что хотите удалить ?")) {
            dispatch(deleteUserHandler(id));
            openNotification("Удаление пользователя", "Пользователь успешно удален", "success");
        }
    };

    const onEditItem = (id) => {

    }

    return <TableBase
        data={users}
        getColor={getColor}
        onRemoveItem={onRemoveItem}
    />
}

export default Table;