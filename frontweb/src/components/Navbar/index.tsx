import { Link, useHistory } from 'react-router-dom';
import { removeAuthData } from 'util/storage';
import { AuthContext } from 'AuthContext';
import { useContext, useEffect } from 'react';
import { getTokenData, isAuthenticated } from 'util/auth';
import './styles.css';

const Navbar = () => {
  const history = useHistory();
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({ authenticated: true, tokenData: getTokenData() });
    } else {
      setAuthContextData({ authenticated: false });
    }
  }, [setAuthContextData]);

  const doLogout = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({ authenticated: false });
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
        {authContextData.authenticated ? (
          <div className="navbar-signout-container">
            <button type="button" className="btn" onClick={(e) => doLogout(e)}>
              Sing out
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
