import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {TextField} from 'redux-form-antd';
import { connect } from 'react-redux';
const EditUser=(props) => {
    return(
    <div>
        <form onSubmit={props.handleSubmit}>

                <Field name="id" component="input" type="hidden"></Field>

            <div>
                <label for="username">Nickname</label>
                <Field name="username" component={TextField} placeholder="Daniel" value="hola"></Field>
            </div>

            <div>
                <label for="name">Nombre completo</label>
                <Field name="name" component={TextField} placeholder="Daniel corrales"></Field>
            </div>

            <div>
                <label for="email">Correo electrónico</label>
                <Field name="email" component={TextField} placeholder="dcorrales@novopangea.com.co"></Field>
            </div>

            
            <div>
                <label for="phone">Teléfono</label>
                <Field name="phone" component={TextField} placeholder="+57 304 3530 490"></Field>
            </div>

            <div>
                <label for="password">Contraseña</label>
                <Field name="password" component={TextField} type="password" placeholder="Contraseña"></Field>
            </div>

            <button type="submit" name="submit" > Guardar</button>
        </form>
    </div>);
}

const mapStateToProps = (state) => {
    return {
      initialValues: {
        id: state.users.users.id,
        username: state.users.users.username,
        name: state.users.users.name,
        email: state.users.users.email,
        phone: state.users.users.phone,
      }
    }
  }


export default connect(mapStateToProps)(reduxForm({ form: 'editUserForm', enableReinitialize: true})(EditUser))
