
import ProductTab from "../components/Prodect_List/ProductTab.jsx";
import Discount from "../components/Discount/discount.jsx";
import NewsLetter from "../components/Monthly News Letter/newsLetter.jsx";

const LandingPage = () => {
  
  return (
    <>

      <div className="product-list">
        <h2
          style={{
            textAlign: "center",
            fontSize: "4rem",
            fontWeight: "400",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            marginBottom: "3rem",
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
