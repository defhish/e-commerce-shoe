import Header from "./common/header/header.jsx";
import Product_Title from "./components/slider_content/Product_Title.jsx";
import ProductTab from "./components/Prodect_List/ProductTab.jsx";
import Discount from "./components/Discount/discount.jsx";
import NewsLetter from "./components/Monthly News Letter/newsLetter.jsx";
import Footer from "./common/footer/footer.jsx";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <Header></Header>
      <Product_Title></Product_Title> 
      <ProductTab></ProductTab>
      <Discount></Discount>
      <NewsLetter></NewsLetter>

      <Outlet />

      <Footer></Footer>
    </>
  );
}

export default App;
