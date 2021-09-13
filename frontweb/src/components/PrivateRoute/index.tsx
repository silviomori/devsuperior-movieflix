import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from 'util/auth';

type Props = {
  children: React.ReactNode;
  path: string;
  redirectTo?: string;
  exact?: boolean;
  allowAuthenticated?: boolean;
};

const PrivateRoute = ({
  children,
  path,
  redirectTo = "/",
  exact = false,
  allowAuthenticated = true,
}: Props) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={() =>
        isAuthenticated() === allowAuthenticated ? children : <Redirect to={redirectTo} />
      }
    />
  );
};

export default PrivateRoute;
