import React from "react";
import product from "../product.json";

function Home() {
  React.useEffect(() => {
    if ("Product" in localStorage) {
      console.log("Cart is Empty");
    } else {
      localStorage.setItem("Product", null);
    }
  }, []);

  const handleAddtoCart = (product) => {
    if ("Product" in localStorage) {
      product["user"] = JSON.parse(localStorage.getItem("User"));
      if (JSON.parse(localStorage.getItem("Product")) != null) {
        const cart = JSON.parse(localStorage.getItem("Product"));
        console.log(cart);
        cart.push(product);
        localStorage.setItem("Product", JSON.stringify(cart));
      } else {
        const newcart = [];
        newcart.push(product);
        localStorage.setItem("Product", JSON.stringify(newcart));
      }
    } else {
      localStorage.setItem("Product", null);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {product.map((p) => {
        return (
          <div
            classname="card"
            key={p._id}
            style={{
              borderRadius: "10px",
              background: "#dfdede",
              width: "20%",
              margin: "4px 4px",
              padding: "5px",
            }}
          >
            <img class="card-img-top" src={p.imageUrl} alt=""></img>
            <div classname="card-body">
              <p>
                {p.name}
                <button onClick={() => handleAddtoCart(p)}>Add to Cart</button>
              </p>

              <footer class="blockquote-footer">
                Rs <cite title="Source Title">{p.price}</cite>
              </footer>
            </div>
          </div>
        );
      })}

      <a href="/Cart">Go to Cart Page</a>
    </div>
  );
}

export default Home;
