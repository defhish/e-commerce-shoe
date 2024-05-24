
import ImageSlider from "../components/slider_content/Product_Title.jsx";
import ProductTab from "../components/Prodect_List/ProductTab.jsx";
import Discount from "../components/Discount/discount.jsx";
import NewsLetter from "../components/Monthly News Letter/newsLetter.jsx";

const LandingPage = () => {
  const images = [
    {
     
      title: "NIKE 1 SPORTS SHOES",
      subtitle: "NIKE METCON SHOES",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio ad laudantium iste tenetur ab asperiores temporibus rerum eius autem eaque. Necessitatibus a ducimus, delectus similique mollitia reiciendis consequatur dolorem? Vitae.",
    },
    {
      title: "NIKE 2  SPORTS SHOES",
      subtitle: "NIKE METCON SHOES",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio ad laudantium iste tenetur ab asperiores temporibus rerum eius autem eaque. Necessitatibus a ducimus, delectus similique mollitia reiciendis consequatur dolorem? Vitae.",
    },
    {
     
      title: "NIKE 3 SPORTS SHOES",
      subtitle: "NIKE METCON SHOES",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio ad laudantium iste tenetur ab asperiores temporibus rerum eius autem eaque. Necessitatibus a ducimus, delectus similique mollitia reiciendis consequatur dolorem? Vitae.",
    },
    {
     
      title: "NIKE 4 SPORTS SHOES",
      subtitle: "NIKE METCON SHOES",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio ad laudantium iste tenetur ab asperiores temporibus rerum eius autem eaque. Necessitatibus a ducimus, delectus similique mollitia reiciendis consequatur dolorem? Vitae.",
    },
  ];
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "28px",
          padding: "0 9%",
          flex: "1 1 460px",
        }}
      >
        <ImageSlider slides={images}></ImageSlider>
      </div>

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
