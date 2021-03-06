import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from 'contexts/auth';

const PrivateRoute: React.FC<any> = ({ component: RouteComponent, ...rest }: any) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        currentUser ? <RouteComponent {...routeProps} /> : <Redirect exact to="/" />
      }
    />
  );
};

export default PrivateRoute;
