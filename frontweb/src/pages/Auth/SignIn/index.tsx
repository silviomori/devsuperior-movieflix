import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { requestBackendLogin } from 'util/auth';
import './styles.css';

type FormData = {
  username: string;
  password: string;
};

const SignIn = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
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
            {...register('username')}
            type="text"
            className="form-control base-input"
            placeholder="Email"
            name="username"
          />
        </div>
        <div className="mb-2">
          <input
            {...register('password')}
            type="password"
            className="form-control base-input"
            placeholder="Password"
            name="password"
          />
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
