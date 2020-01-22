import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { TextField  } from 'redux-form-antd';
const Login = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return(
        <form onSubmit={handleSubmit}>
        <div>
          <label>Usuario</label>
          <div>
            <Field
              name="username"
              component={TextField}
              type="text"
              placeholder="Username"
            />
          </div>
        </div>
        <div>
          <label>Contraseña</label>
          <div>
            <Field
              name="password"
              component={TextField}
              type="password"
              placeholder="Last Name"
            />
          </div>
        </div>
        
        <div>
          <button type="submit" disabled={pristine || submitting}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    );
}

export default reduxForm({
    form: 'loginForm', // a unique identifier for this form
  })(Login);