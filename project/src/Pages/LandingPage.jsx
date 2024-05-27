import Product_Title from "../components/slider_content/Product_Title.jsx";
import ProductTab from "../components/Prodect_List/ProductTab.jsx";
import Discount from "../components/Discount/discount.jsx";
import NewsLetter from "../components/Monthly News Letter/newsLetter.jsx";

const LandingPage = () => {
  
  return (
    <>
    <div>
      <Product_Title></Product_Title>
    </div>
      <div className="product-list">
        <h2
          style={{
            textAlign: "center",
            fontSize: "3.5rem",
            fontWeight: "400",
            marginBottom: "3rem",
            marginTop:"3.5rem",
            fontFamily:"poppins",
          }}
        >
          Explore the widest collection of sportswear
        </h2>
        <ProductTab></ProductTab>
      </div>

      <Discount></Discount>
      <NewsLetter></NewsLetter>
    </>
  );
};

export default LandingPage;
