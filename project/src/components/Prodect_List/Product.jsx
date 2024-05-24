import "./Product.css";

function Product({ title, idx }) {
  let oldprices = [
    "$2,000",
    "$2,000",
    "$2,000",
    "$3,000",
    "$2,000",
    "$2,000",
    "$5,000",
    "$2,000",
  ];
  let newprices = [
    "$1,000",
    "$1,000",
    "$1,000",
    "$1,000",
    "$1,000",
    "$1,000",
    "$1,000",
    "$1,000",
  ];
  let description = [
    "Our collection of shoes for men comprises of the latest trends in every style and has something just perfect, for every occasion and for everybody",
    "Our collection of shoes for men comprises of the latest trends in every style and has something just perfect, for every occasion and for everybody",
    "Our collection of shoes for men comprises of the latest trends in every style and has something just perfect, for every occasion and for everybody",
    "Our collection of shoes for men comprises of the latest trends in every style and has something just perfect, for every occasion and for everybody",
    "Our collection of shoes for men comprises of the latest trends in every style and has something just perfect, for every occasion and for everybody",
    "Our collection of shoes for men comprises of the latest trends in every style and has something just perfect, for every occasion and for everybody",
    "Our collection of shoes for men comprises of the latest trends in every style and has something just perfect, for every occasion and for everybody",
    "Our collection of shoes for men comprises of the latest trends in every style and has something just perfect, for every occasion and for everybody",
  ];
  let image = [
    "https://github.com/developedbyed/3d-card-effect/blob/master/adidas.png?raw=true",
    "https://github.com/developedbyed/3d-card-effect/blob/master/adidas.png?raw=true",
    "https://github.com/developedbyed/3d-card-effect/blob/master/adidas.png?raw=true",
    "https://github.com/developedbyed/3d-card-effect/blob/master/adidas.png?raw=true",
    "https://github.com/developedbyed/3d-card-effect/blob/master/adidas.png?raw=true",
    "https://github.com/developedbyed/3d-card-effect/blob/master/adidas.png?raw=true",
    "https://github.com/developedbyed/3d-card-effect/blob/master/adidas.png?raw=true",
    "https://github.com/developedbyed/3d-card-effect/blob/master/adidas.png?raw=true",
  ];

  return (
    <>
      <div>
        <div className="product-card">
          <div className="image-box">
            <img src={image[idx]} alt="sample shoe" className="product-img" />
          </div>
        </div>

        <div>
          <div className="product-card-title">{title}</div>
          <div className="product-card-price">
            Rs <span style={{ color: "red" }}>{oldprices[idx]}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
