import ProductItem from "./productItem";
import "./products.css";
import NewProduct from "../newProduct/newProduct";
import { useState } from "react";

const Products = () => {
  // const imageURL =
  //   "https://images.unsplash.com/photo-1534616042650-80f5c9b61f09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2xhc3MlMjBvZiUyMHdhdGVyfGVufDB8fDB8fHww";
  // const productTitle = "Sodalı Su";
  // const productPrice = 40; DİZİ YAPISI VARKEN BUNA İHTİYAÇ YOK

  const [products, setProducts] = useState([]);
  return (
    <div>
      <NewProduct setProducts={setProducts} products={products} />
      <h1>PRODUCTS</h1>
      <div className="products">
        {/* Conditional Content */}
        {products.length === 0 ? (
          <p>Henüz görüntülenecek bir ürün yok.</p>
        ) : (
          products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              setProducts={setProducts}
              products={products}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
