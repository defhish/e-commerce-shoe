import Header from "./common/header/header.jsx";
import Footer from "./common/footer/footer.jsx";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <Header></Header>
      </div>

      <Outlet />
      <Footer></Footer>
    </>
  );
}

export default App;
