import Header from "./common/header/header.jsx";
import Product_Title from "./components/slider_content/Product_Title.jsx";
import ProductTab from "./components/Prodect_List/ProductTab.jsx";
// import First from "./assets/1.png";
// import Second from "./assets/2.png";
// import Third from "./assets/3.png";
// import Four from "./assets/4.png";
import Discount from "./components/Discount/discount.jsx";
import NewsLetter from "./components/Monthly News Letter/newsLetter.jsx";
import Footer from "./common/footer/footer.jsx";


import "./App.css";

function App() {

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
      <Footer></Footer>
    </>
  )
}

export default App
