import { Link } from 'react-router-dom';
import './styles.css';

const SignIn = () => {
  return (
    <div className="base-card login-card">
      <h1>Sign-In</h1>
      <form>
        <div className="mb-4">
          <input
            type="text"
            className="form-control base-input"
            placeholder="Email"
            name="username"
          />
        </div>
        <div className="mb-2">
          <input
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
          <Link to="/movies">
            <button className="btn btn-primary">Sign In</button>
          </Link>
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
