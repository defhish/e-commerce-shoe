import Product from "./Product.jsx";
function ProductTab() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          margin: "2rem",
        }}
      >
        <Product title="Adidas ZX" idx={0} />
        <Product title="Adidas ZX" idx={1} />
        <Product title="Adidas ZX" idx={2} />
        <Product title="Adidas ZX" idx={3} />
        <Product title="Adidas ZX" idx={4} />
        <Product title="Adidas ZX" idx={5} />
      </div>
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          height: "4rem",
          width: "10rem",
          border: "none",
          display: "block",
          margin: "2rem auto",
          fontSize: "1.3rem",
          cursor: "pointer",
        }}
      >
        More
      </button>
    </>
  );
}
export default ProductTab;
