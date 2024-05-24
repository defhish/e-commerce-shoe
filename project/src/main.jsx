
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Auth0Provider
      domain="dev-ufg3sbrpr0btzdlb.us.auth0.com"
      clientId="ldRSFKTmSMuwJhoaWYmJVzELa2hfsob0"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
    <App />
    </Auth0Provider>
 
);
