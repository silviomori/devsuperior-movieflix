import { Link, useHistory } from 'react-router-dom';
import { removeAuthData } from 'util/storage';
import './styles.css';

const Navbar = () => {
  const history = useHistory();
  const doLogout = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    removeAuthData();
    history.replace('/');
  };
  return (
    <div className="bg-primary">
      <div className="container navbar-container">
        <div>
          <Link to="/movies">
            <h1>MovieFlix</h1>
          </Link>
        </div>
        <div className="navbar-signout-container">
          <button type="button" className="btn" onClick={(e) => doLogout(e)}>
            Sing out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
