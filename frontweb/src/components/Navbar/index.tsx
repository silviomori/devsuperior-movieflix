import './styles.css';

const Navbar = () => {
  return (
    <div className="bg-primary">
      <div className="container navbar-container">
        <div>
          <a href="#link">
            <h1>MovieFlix</h1>
          </a>
        </div>
        <div className="navbar-signout-container">
          <button className="btn">Sing out</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
