import React from 'react';
import { Layout } from 'antd';
import LocalStorageHelper from '../_helpers/localStorage.helper';
const { Header } = Layout;


function HeaderComponent(props) {
 return(
    <React.Fragment>
        <Header style={{ background: '#fff', padding: 0 }}>
            <a onClick={() => LocalStorageHelper.logout()} style={{float: 'right', marginRight: '20px'}}>SALIR</a>
        </Header>
    </React.Fragment>
 );
}

export default HeaderComponent;