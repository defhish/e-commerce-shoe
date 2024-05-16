import logo from "./header-imgs/log.jpg";
import Authentication from "./Authetication";
import "./header.css";

export default function Header() {
   
    
    return(
        <>
           <div className="navbar">
           
           <img src={logo} alt="" className="logo"/>
           
            <nav className="nav_links">
              
             <ul className="navOption">
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
             </ul>
             </nav>

             
             <a href="#" className="message icon-images">
                    <img src="https://cdn0.iconfinder.com/data/icons/cryptocurrency-137/128/1_profile_user_avatar_account_person-132-512.png" alt="Profile" />
              </a>
              <a href="#" className="profile icon-images">
                    <img src="https://cdn1.iconfinder.com/data/icons/neutro-essential/32/email-512.png" alt="Message" />
              </a>
            
           <Authentication></Authentication>
           </div>
        </>
    )
}