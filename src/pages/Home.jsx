import React from 'react';
import { Divider } from 'antd';
import { MainContainer } from '../hoc';
import { StatusFilter, UserSearch, Table, AddUser } from '../containers';
import usersSvg from '../assets/img/group.svg';

const Home = () => {

    return (
        <div className="main-page">
            <MainContainer>
                <Divider orientation="left">
                    <h3 className="main-page__title">Управления пользователями <img src={usersSvg} alt="users" /></h3>
                </Divider>
                <div className="add-user-block">
                    <AddUser />
                </div>
                <div className="page-actions">
                    <UserSearch />
                    <StatusFilter />
                </div>
                <div className="table">
                    <Table />
                </div>
            </MainContainer>
        </div>
    )
}

export default Home;