import React from 'react';
import { Table as TableBase, Tag } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import { getReadableDate } from '../helpers';
import { EditUser as EditUserBase } from '../components';

const { Column } = TableBase;

const Table = ({
    data,
    getColor,
    onRemoveItem,
    onEditItem,
    chosenUser,
    isModalVisible,
    setIsModalVisible,
    formRef
}) => {
    return (
        <>
            <TableBase dataSource={data} pagination={{ defaultPageSize: 3 }}>
                <Column title="Почта" dataIndex="email" key="email" />
                <Column title="Пароль" dataIndex="password" key="password" />
                <Column title="Телефон" dataIndex="phone" key="phone" />
                <Column title="ФИО" dataIndex="fullname" key="fullname" />
                <Column
                    title="Статус"
                    dataIndex="status"
                    key="status"
                    render={(status) => (<Tag color={getColor(status)}>
                        {status.toUpperCase()}
                    </Tag>
                    )}
                />
                <Column
                    title="Дата создания"
                    dataIndex="created_at"
                    key="created_at"
                    render={(date) => getReadableDate(date)}
                />
                <Column
                    title="Дата обновления"
                    dataIndex="updated_at"
                    key="updated_at"
                    render={(date) => getReadableDate(date)}
                />
                <Column title="Действия" key="actions" render={(user) => (<div className="user-actions">
                    <div className="user-actions__edit" onClick={() => onEditItem(user.key)}><EditOutlined /></div>
                    <div className="user-actions__delete" onClick={() => onRemoveItem(user.key)}><DeleteOutlined /></div>
                </div>
                )
                } />
            </TableBase >
            <EditUserBase
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
                formRef={formRef}
                initialValues={chosenUser}
            />
        </>
    )
}

export default Table;