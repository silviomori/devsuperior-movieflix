import { AuthContext } from 'AuthContext';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { getTokenData, requestBackendLogin } from 'util/auth';
import { saveAuthData } from 'util/storage';
import './styles.css';

type FormData = {
  username: string;
  password: string;
};

const SignIn = () => {
  const history = useHistory();
  const { setAuthContextData } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data);
        setAuthContextData({ authenticated: true, tokenData: getTokenData() });
        history.push('/movies');
      })
      .catch((error) => console.log('error: ', error));
  };

  return (
    <div className="base-card login-card">
      <h1>Sign-In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register('username', {
              required: 'Required field',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            type="text"
            className={`form-control base-input ${
              errors.username ? 'is-invalid' : ''
            }`}
            placeholder="Email"
            name="username"
          />
          <div className="invalid-feedback d-block">
            {errors.username?.message}
          </div>
        </div>
        <div className="mb-2">
          <input
            {...register('password', { required: 'Required field' })}
            type="password"
            className={`form-control base-input ${
              errors.password ? 'is-invalid' : ''
            }`}
            placeholder="Password"
            name="password"
          />
          <div className="invalid-feedback d-block">
            {errors.password?.message}
          </div>
        </div>
        <a href="/admin/auth/recover" className="login-link-recover">
          Esqueci a senha
        </a>
        <div className="login-submit">
          <button className="btn btn-primary">Sign In</button>
        </div>
        <div className="signup-container">
          <span className="not-registered">New to MovieFlix?</span>
          <a href="/admin/auth/register" className="login-link-register">
            Create account
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
