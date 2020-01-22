import React from 'react';
import BreadcrumbComponent from '../../../containers/breadcrumb';
import Header from '../../../containers/header';
import Sidebar from '../../../containers/sidebar';
import { Layout, Skeleton, Card } from 'antd';
import { connect } from 'react-redux';
import EditUser from './edit-user';
import getUserById from '../../../actions/getUserById';
import editUser from '../../../actions/editUser';
import ModalHelper from '../../../_helpers/modal.helper';

class EditUserComponent extends React.Component{
    state = {
        collapsed: false,
    };
    
    componentDidMount(){
        this.props.getUserById(this.props.match.params.id);
    }

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    onSubmit = (formData) => {
        this.props.editUser(formData);
    }

    render(){
        const { collapsed, users } = this.props;
        console.log(users)
        return(
            <Layout style={{ minHeight: '100vh' }}>
               <Sidebar collapsed={collapsed} onCollapse={this.onCollapse} /> 
               <Layout>
                   <Header/>
                   <Layout.Content style={{ margin: '0 16px' }}>
                       <BreadcrumbComponent />
                       <Card>
                            {(users.users === null || users.users === undefined || users.users === '') ? 
                            <Skeleton></Skeleton>
                            :
                            <EditUser onSubmit={this.onSubmit} id={this.props.match.params.id}></EditUser>    
                            }
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
    editUser
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUserComponent);