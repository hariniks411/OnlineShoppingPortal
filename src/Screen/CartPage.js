import React from "react";

function CartPage() {
  const [product, setproduct] = React.useState([]);
  React.useEffect(() => {
    if (localStorage.getItem("Product") != null) {
      const user = localStorage.getItem("User");
      const cart = JSON.parse(localStorage.getItem("Product")).filter(
        (p) => user._id === p.user._id
      );
      setproduct(cart);
    }
  }, []);
  return (
    <div>
      <ul>
        {product &&
          product.map((p) => {
            return <li>{p.name}</li>;
          })}
      </ul>
    </div>
  );
}

export default CartPage;
