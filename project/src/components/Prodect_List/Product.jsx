// import "./Product.css";
// function Product({title,price,features}){
//     let isDiscount=price>200;
//     return(
//         <div className="Product">
//             <img src="/sample_shoe.jpg" alt="sample shoe"/>
//             <h3>{title}</h3>
//             <h5>{features}</h5>
//             <h6>{price}</h6>
//             <button id="purchase">Purchase</button>
//         </div>
//     );
// }
// export default Product;

import "./Product.css";
import Price from "./Price.jsx";
function Product({title,idx}){
    let oldprices=["$2,000","$2,000","$2,000","$3,000","$2,000","$2,000","$5,000","$2,000"];
    let newprices=["$1,000","$1,000","$1,000","$1,000","$1,000","$1,000","$1,000","$1,000"];
    let description=["Our collection of shoes for men comprises of the latest trends in every style and has something just perfect, for every occasion and for everybody",
    "Our collection of shoes for men comprises of the latest trends in every style and has something just perfect, for every occasion and for everybody",
    "Our collection of shoes for men comprises of the latest trends in every style and has something just perfect, for every occasion and for everybody",
    "Our collection of shoes for men comprises of the latest trends in every style and has something just perfect, for every occasion and for everybody",
    "Our collection of shoes for men comprises of the latest trends in every style and has something just perfect, for every occasion and for everybody",
    "Our collection of shoes for men comprises of the latest trends in every style and has something just perfect, for every occasion and for everybody",
    "Our collection of shoes for men comprises of the latest trends in every style and has something just perfect, for every occasion and for everybody",
    "Our collection of shoes for men comprises of the latest trends in every style and has something just perfect, for every occasion and for everybody",
    ]
    let image=[
        "https://github.com/developedbyed/3d-card-effect/blob/master/adidas.png?raw=true",
        "https://github.com/developedbyed/3d-card-effect/blob/master/adidas.png?raw=true",
        "https://github.com/developedbyed/3d-card-effect/blob/master/adidas.png?raw=true",
        "https://github.com/developedbyed/3d-card-effect/blob/master/adidas.png?raw=true",
        "https://github.com/developedbyed/3d-card-effect/blob/master/adidas.png?raw=true",
        "https://github.com/developedbyed/3d-card-effect/blob/master/adidas.png?raw=true",
        "https://github.com/developedbyed/3d-card-effect/blob/master/adidas.png?raw=true",
        "https://github.com/developedbyed/3d-card-effect/blob/master/adidas.png?raw=true",
    ]
    return(
        <div className="Product">
            <img src={image[idx]} alt="sample shoe" className="product-img"/>
            <h3 id="title">{title}</h3>
            <p>{description[idx]}</p>
            <Price oldprice={oldprices[idx]}  newprice={newprices[idx]}/>
            <button id="purchase-btn">Purchase</button>
        </div>
        
        
    );
}
export default Product;