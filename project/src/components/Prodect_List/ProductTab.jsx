// import Product from "./Product.jsx";
// function ProductTab(){
//     let description=["long-lasting","durable","fast"];
//     return(
//         <div>
//             <h3>Explore the widest collection of sportswear</h3>
//             <Product title="Shoes1" price={200} features={description}/>
//             <Product title="Shoes2" price={400} features={description}/>
//             <Product title="Shoes3" price={200} features={description}/>
//             <Product title="Shoes4" price={400} features={description}/>
//             <Product title="Shoes5" price={200} features={description}/>
//             <Product title="Shoes6" price={400} features={description}/>
//             <Product title="Shoes7" price={200} features={description}/>
//             <Product title="Shoes8" price={400} features={description}/>
//             <br/>
//             <button id="more">More</button>
//         </div>
//     );
// }
// export default ProductTab;

import Product from "./Product.jsx";
function ProductTab(){
    let styles={
        display:"flex",
        
    }
    return(
        <div style={styles}>
            <Product title="Adidas ZX" idx={0}/>
            <Product title="Adidas ZX" idx={1} />
            {/* <Product title="Adidas ZX" idx={2}/>
            <Product title="Adidas ZX" idx={3} />
            <Product title="Adidas ZX" idx={4}/>
            <Product title="Adidas ZX" idx={5} />
            <Product title="Adidas ZX" idx={6}/>
            <Product title="Adidas ZX" idx={7} /> */}
        </div>
    );
}
export default ProductTab;