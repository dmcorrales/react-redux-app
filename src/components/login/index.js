import React from 'react';
import { Card } from 'antd';
import { Alert } from 'antd';
import './style.css';
import Login from './login';
import fetchLogin from '../../actions/login';
import LocalStorageHelper from '../../_helpers/localStorage.helper';
import { connect } from 'react-redux';
class LoginComponent extends React.Component{

    componentDidMount(){
    }

    handleSubmit = (formValues, next) => {
        const { fetchLogin } = this.props; 
        fetchLogin(formValues);
    }

    validateToken(){
        if(LocalStorageHelper.validate() !== null)
            this.props.history.push("/user");
    }
    
    render(){
        const { login } = this.props; 
        this.validateToken();
        return(
                <center> 
                    <Card title="Login" style={{width:'80%', marginTop:'5%'}}>
                        {login.message !== "" ? <Alert message={login.message} type="error" />:<div></div>}
                        <Login onSubmit={this.handleSubmit}/>
                    </Card>
                </center>
        );
    }
}

const mapDispatchToProps = {
    fetchLogin,
}

const mapStateToProps = (state) => ({
    login:state.login,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
