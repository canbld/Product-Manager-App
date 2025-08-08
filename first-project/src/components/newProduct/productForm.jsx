import "./productForm.css";
import { useState } from "react";

const ProductForm = (props) => {
  // const [productTitle, setProductTitle] = useState("");
  // const [, setProductPrice] = useState("");
  // const [imageURL, setimageURL] = useState("");
  // const titleChangeHandler = (event) => {
  //   setProductTitle(event.target.value);
  // };
  // const priceChangeHandler = (event) => {
  //   setProductPrice(event.target.value);
  // };
  // const imageChangeHandler = (event) => {
  //   setimaggURL(event.target.value);
  // };
  //BÖYLE YAPMAK YERİNE AŞAĞIDAKİ GİBİ OBJE HALİYLE DE TEK USESTATE OLARAK YAPILABİLİR
  const [productData, setproductData] = useState({
    productTitle: "",
    productPrice: "",
    imageURL: "",
  });

  const titleChangeHandler = (event) => {
    //setProductTitle(event.target.value); 1.yol
    // setNewProductData({
    //   ...newProductData,
    //   productTitle: event.target.value,
    // }); //2.yol
    setproductData((prevState) => {
      return { ...prevState, productTitle: event.target.value };
    }); //3.yol
  };
  const priceChangeHandler = (event) => {
    setproductData({
      ...productData,
      productPrice: event.target.value,
    });
  };
  const imageChangeHandler = (event) => {
    setproductData({
      ...productData,
      imageURL: event.target.value,
    });
  };
  //console.log(productData);

  const submitHandler = (event) => {
    event.preventDefault();
    const newProductData = {
      id: props.products.length + 1,
      productTitle: productData.productTitle,
      productPrice: productData.productPrice,
      imageURL: productData.imageURL,
    };

    props.setProducts((prevState) => [...prevState, newProductData]);
    console.log(newProductData);

    setproductData({
      productTitle: "",
      productPrice: "",
      imageURL: "",
    });
  };

  return (
    <form className="product-form" onSubmit={submitHandler}>
      <div className="product-form-input">
        <label>Ürün adı : {productData.productTitle}</label>
        <input
          type="text"
          placeholder="Ürün Adı Giriniz"
          onChange={titleChangeHandler}
          value={productData.productTitle}
        />
      </div>
      <div className="product-form-input">
        <label>Ürün fiyatı : {productData.productPrice}</label>
        <input
          type="text"
          placeholder="Ürün Fiyatı Giriniz"
          onChange={priceChangeHandler}
          value={productData.productPrice}
        />
      </div>
      <div className="product-form-input">
        <label>Ürün resmi : </label>
        <input
          type="text"
          placeholder="Ürün Resmi Giriniz"
          onChange={imageChangeHandler}
          value={productData.imageURL}
        />
      </div>
      <button className="product-form-button">Ürün Ekle</button>
      <button
        className="product-form-back-button"
        type="button"
        onClick={() => props.setIsOpen(false)}
      >
        Vazgeç
      </button>
    </form>
  );
};

//child'dan parent'a veri aktarımı
//props.onSaveProduct(newProductData);PARENT'DA FONK YAZIYORUZ
export default ProductForm;
