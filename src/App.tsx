import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';

import Landing from 'pages/Landing';
import Login from 'pages/auth/Login';
import Register from 'pages/auth/Register';
import About from 'pages/About';
import EditProfile from 'pages/main/profile/EditProfile';

import MainTabs from 'components/MainTabs';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import 'theme/variables.css';
import 'theme/customTheme.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/about" component={About} />
        <Route path="/edit-profile" component={EditProfile} />
        <Route path="/main" component={MainTabs} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;