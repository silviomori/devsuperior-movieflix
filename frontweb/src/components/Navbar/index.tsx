import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <div className="bg-primary">
      <div className="container navbar-container">
        <div>
          <Link to="/movies">
            <h1>MovieFlix</h1>
          </Link>
        </div>
        <div className="navbar-signout-container">
          <Link to="/">
            <button className="btn">Sing out</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
