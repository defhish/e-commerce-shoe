import Button from '@mui/material/Button';
import { useAuth0 } from "@auth0/auth0-react";
import "./header.css"

export default function Authentication(){
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
    return (
        <>
          <ul className="Authetication">
            {
                  isAuthenticated ? (
                     <li>
                     <Button variant="contained" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</Button>
                     </li>
                  ) : (
                     <li>
                     <Button variant="contained" onClick={() => loginWithRedirect()}>Log In</Button>
                     </li>
                  )
                }
            </ul>
        </>
    )
}