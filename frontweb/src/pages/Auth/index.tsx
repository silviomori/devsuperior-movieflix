import './styles.css';
import { ReactComponent as MovieFlixInitialSVG } from 'assets/images/movieflix-initial.svg';

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
      <div className="auth-form-container">Sign-In Card</div>
    </div>
  );
};

export default Auth;
