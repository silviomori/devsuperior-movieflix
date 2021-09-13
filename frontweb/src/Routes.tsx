import Navbar from 'components/Navbar';
import PrivateRoute from 'components/PrivateRoute';
import Auth from 'pages/Auth';
import Catalog from 'pages/Catalog';
import MovieDetails from 'pages/MovieDetails';
import { BrowserRouter, Switch } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <PrivateRoute path="/" redirectTo="/movies" exact
        allowAuthenticated={false}
      >
        <Auth />
      </PrivateRoute>
      <PrivateRoute path="/movies" exact>
        <Catalog />
      </PrivateRoute>
      <PrivateRoute path="/movies/:movieId">
        <MovieDetails />
      </PrivateRoute>
    </Switch>
  </BrowserRouter>
);

export default Routes;
