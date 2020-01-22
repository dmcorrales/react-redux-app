import React from 'react';
import BreadcrumbComponent from '../../../containers/breadcrumb';
import Header from '../../../containers/header';
import Sidebar from '../../../containers/sidebar';
import { Layout, Skeleton, Card } from 'antd';
import { connect } from 'react-redux';
import getListUsers from '../../../actions/getListUsers';
import deleteUser from '../../../actions/deleteUser';
import User from './user';

class UserComponent extends React.Component{
    state = {
        collapsed: false,
    };

    
    componentDidMount(){
        const { getListUsers } = this.props;
        getListUsers();
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    deleteUserById = id =>{
       const { deleteUser, getListUsers} = this.props;

       deleteUser(id);
       getListUsers();
    }

    render(){
        const { collapsed, users } = this.props;
        let error = users.error;
        let isLoading = users.isLoading;
        return(
            <Layout style={{ minHeight: '100vh' }}>
               <Sidebar collapsed={collapsed} onCollapse={this.onCollapse} /> 
               <Layout>
                   <Header/>
                   <Layout.Content style={{ margin: '0 16px' }}>
                       <BreadcrumbComponent />
                       <Card>
                            {(isLoading || error)  ? <Skeleton /> : <User deleteUser={this.deleteUserById} data={users.users} />}
                       </Card>
                   </Layout.Content>
               </Layout>
            </Layout>
        );
    }
}

const mapStateToProps = (state) => ({
    users : state.users,
    deletedUser: state.deletedUser
});

const mapDispatchToProps = {
    getListUsers,
    deleteUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);