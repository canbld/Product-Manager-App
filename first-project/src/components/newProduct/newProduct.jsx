import { useState } from "react";
import ProductForm from "./productForm.jsx";
import AddProduct from "./addProduct.jsx";

const NewProduct = (props) => {
  // const onSaveProduct = (newProductData) => {
  //   props.setProducts((prevState) => [...prevState, newProductData]);
  //   props.setProducts([newProductData,...props.products]) products'ı da göndermek gerek bu yol için
  // };

  //Conditional State
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="new-product-container">
      {isOpen ? (
        <ProductForm
          setProducts={props.setProducts}
          products={props.products}
          setIsOpen={setIsOpen}
        />
      ) : (
        <AddProduct setIsOpen={setIsOpen} />
      )}

      {/*onSaveProducts={onSaveProducts} */}
    </div>
  );
};

export default NewProduct;
