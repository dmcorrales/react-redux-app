import { Table, Divider } from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';
const { Column, ColumnGroup } = Table;

const User = (props) => {

    return(<div>
        <Table dataSource={props.data}>
            <ColumnGroup title="User">
                <Column title="Id" dataIndex="id" key="id" />
                <Column title="Nickname" dataIndex="username" key="username" />
            </ColumnGroup>

            <Column title="Nombre" dataIndex="name" key="name" />
            <Column title="Correo electrónico" dataIndex="email" key="email" />
            <Column title="Estado" dataIndex="enables" key="enables" />

            <Column
            title="Acción"
            key="action"
            render={(text, record) => (
                <span>
                <Link to={'/user/edit/'+record.id}> Editar </Link> 
                <Divider type="vertical" />
                <a onClick={() => props.deleteUser(record.id)}>Eliminar</a>
                </span>
            )}
            />
        </Table>
    </div>);
}

export default User;