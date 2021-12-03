import { IonRouterOutlet } from '@ionic/react';
import { AuthContext } from 'contexts/auth';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Home from 'pages/Home';
import About from 'pages/About';
import Login from 'pages/auth/Login';
import Register from 'pages/auth/Register';
import EditProfile from 'pages/main/profile/EditProfile';

import MainTabs from 'components/MainTabs';

const Routes: React.FC = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <IonRouterOutlet id="main">
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/about" component={About} />
      <PrivateRoute path="/main" component={MainTabs} />
      <PrivateRoute path="/edit-profile" component={EditProfile} />

      {currentUser ? <Redirect exact to="/main" /> : <Redirect exact to="/" />}
    </IonRouterOutlet>
  );
};

export default Routes;
