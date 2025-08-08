import "./productItem.css";
import ConstBrand from "./constBrand";
import { useState } from "react";
import Counter from "../counter";

// parantez içi product olabilir
const ProductItem = ({ product, setProducts, products }) => {
  const { imageURL, productTitle, productPrice } = product; //DİYEREK PROPS. KULLANIMINDAN KAÇINILABİLİR veya = product denilerek product. kullanımından da açınılabilir
  // let title = productTitle;

  //useState hook kullanımı
  const [title, setTitle] = useState(productTitle);
  const handleButton = () => setTitle("GÜNCELLENDİ");
  const deleteHandler = () => {
    setProducts(products.filter((item) => item.id !== product.id));
  };
  //props children ile kullanırsak :
  const [sayi, setSayi] = useState(Number(productPrice));

  console.log(product);
  return (
    <div className="productItem">
      <div className="productImg">
        <img src={imageURL} alt="" />
      </div>
      <div className="productInfo">
        <ConstBrand>
          <h2>{title}</h2>
          <Counter sayi={sayi} setSayi={setSayi}>
            <h3>{sayi} TL</h3>
          </Counter>
          <button onClick={handleButton}>Güncelle</button>
          <button onClick={deleteHandler}>Ürünü sil</button>
        </ConstBrand>
      </div>
    </div>
  );
};
export default ProductItem;
