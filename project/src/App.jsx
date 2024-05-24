import Header from "./common/header/header.jsx";
<<<<<<< HEAD
import Product_Title from "./components/slider_content/Product_Title.jsx";
import ProductTab from "./components/Prodect_List/ProductTab.jsx";
// import First from "./assets/1.png";
// import Second from "./assets/2.png";
// import Third from "./assets/3.png";
// import Four from "./assets/4.png";
import Discount from "./components/Discount/discount.jsx";
import NewsLetter from "./components/Monthly News Letter/newsLetter.jsx";
import Footer from "./common/footer/footer.jsx";


=======
import Footer from "./common/footer/footer.jsx";
>>>>>>> a6b9995bf361f7a9ec375002f571b7ad5536ef96
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
<<<<<<< HEAD

  // const images = [
  //   { url:First,title:'NIKE 1 SPORTS SHOES',subtitle:'NIKE METCON SHOES',description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio ad laudantium iste tenetur ab asperiores temporibus rerum eius autem eaque. Necessitatibus a ducimus, delectus similique mollitia reiciendis consequatur dolorem? Vitae.' },
  //   { url:Second,title:'NIKE 2  SPORTS SHOES',subtitle:'NIKE METCON SHOES', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio ad laudantium iste tenetur ab asperiores temporibus rerum eius autem eaque. Necessitatibus a ducimus, delectus similique mollitia reiciendis consequatur dolorem? Vitae.'},
  //   { url:Third,title:'NIKE 3 SPORTS SHOES',subtitle:'NIKE METCON SHOES', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio ad laudantium iste tenetur ab asperiores temporibus rerum eius autem eaque. Necessitatibus a ducimus, delectus similique mollitia reiciendis consequatur dolorem? Vitae.'},
  //   { url:Four,title:'NIKE 4 SPORTS SHOES',subtitle:'NIKE METCON SHOES', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio ad laudantium iste tenetur ab asperiores temporibus rerum eius autem eaque. Necessitatibus a ducimus, delectus similique mollitia reiciendis consequatur dolorem? Vitae.' },
  // slides={images}];

  return (
    <>
      <Header></Header>
      <Product_Title></Product_Title> 
      <ProductTab></ProductTab>
      <Discount></Discount>
      <NewsLetter></NewsLetter>
=======
  return (
    <>
      <div className="container">
        <Header></Header>
      </div>

      <Outlet />
>>>>>>> a6b9995bf361f7a9ec375002f571b7ad5536ef96
      <Footer></Footer>
    </>
  );
}

export default App;
