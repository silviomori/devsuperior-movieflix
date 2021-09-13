import Navbar from 'components/Navbar';
import Auth from 'pages/Auth';
import Catalog from 'pages/Catalog';
import MovieDetails from 'pages/MovieDetails';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Auth />
      </Route>
      <Route path="/movies" exact>
        <Catalog />
      </Route>
      <Route path="/movies/:movieId" exact>
        <MovieDetails />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
