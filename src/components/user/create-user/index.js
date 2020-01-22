import React from 'react';
import BreadcrumbComponent from '../../../containers/breadcrumb';
import Header from '../../../containers/header';
import Sidebar from '../../../containers/sidebar';
import { Layout, Skeleton, Card } from 'antd';
import { connect } from 'react-redux';
import CreateUser from './create-user';
import getUserById from '../../../actions/getUserById';
import createUser from '../../../actions/createUser';
import ModalHelper from '../../../_helpers/modal.helper';

class CreateUserComponent extends React.Component{
    state = {
        collapsed: false,
    };
    
    componentDidMount(){
    }

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    onSubmit = (formData) => {
        console.log(formData)
        this.props.createUser(formData);
    }

    render(){
        const { collapsed, users } = this.props;
        return(
            <Layout style={{ minHeight: '100vh' }}>
               <Sidebar collapsed={collapsed} onCollapse={this.onCollapse} /> 
               <Layout>
                   <Header/>
                   <Layout.Content style={{ margin: '0 16px' }}>
                       <BreadcrumbComponent />
                       <Card>
                           
                            <CreateUser onSubmit={this.onSubmit}></CreateUser>    
    
                       </Card>
                   </Layout.Content>
               </Layout>
            </Layout>
        );
    }
}

const mapStateToProps = (state) => ({
    users : state.users
});

const mapDispatchToProps = {
    getUserById,
    createUser
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserComponent);