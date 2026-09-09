import { useEffect, useState } from "react";

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch("https://shopapp-api2026-d8e8grb7edb9g8g8.indiasouthcentral-01.azurewebsites.net/api/products")
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(error => console.error("Failed to load products:", error));

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