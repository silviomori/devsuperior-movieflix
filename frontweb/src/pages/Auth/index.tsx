import './styles.css';
import { ReactComponent as MovieFlixInitialSVG } from 'assets/images/movieflix-initial.svg';
import SignIn from './SignIn';

const Auth = () => {
  return (
    <div className="container auth-container">
      <div className="auth-banner-container">
        <div>
          <h1>Movie Reviews</h1>
          <p>Tell everyone what you think of your favorite movie</p>
        </div>
        <MovieFlixInitialSVG />
      </div>
      <div className="auth-form-container">
        <SignIn />
      </div>
    </div>
  );
};

export default Auth;
