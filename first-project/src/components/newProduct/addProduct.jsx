import "./addProduct.css";

const AddProduct = (props) => {
  return (
    <button className="add-new-product" onClick={() => props.setIsOpen(true)}>
      Yeni Ürün Ekle
    </button>
  );
};

export default AddProduct;
