import { Table as TableBase } from '../components';
import { useSelector } from 'react-redux';
import { getFilteredUsers } from '../redux/selectors/User';

const Table = () => {

    const users = useSelector((state) => getFilteredUsers(state));

    const getColor = (status) => {
        let color = 'blue';
        if (status === 'Partner')
            color = 'geekblue';

        if (status === 'Admin')
            color = 'green';

        return color;
    }

    return <TableBase
        data={users}
        getColor={getColor}
    />
}

export default Table;