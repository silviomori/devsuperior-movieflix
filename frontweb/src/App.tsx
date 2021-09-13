import './assets/styles/custom.scss';
import './App.css';
import Navbar from 'components/Navbar';
import MovieDetails from 'pages/MovieDetails';

function App() {
  return (
    <>
      <Navbar />
      <MovieDetails title="Movie 1" />
    </>
  );
}

export default App;
