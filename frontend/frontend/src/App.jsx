import { useEffect, useState } from "react";

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch("http://localhost:8080/api/products")
      .then(response => response.json())
      .then(data => setProducts(data));

  }, []);

  return (
    <div>
      <h1>My Shopping App</h1>

      <h2>Products</h2>

      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;