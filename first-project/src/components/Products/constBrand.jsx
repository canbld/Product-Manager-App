import "./constBrand.css";

//PARANTEZİN ARASINA PROPS YAZIP
const ConstBrand = (props) => {
  return (
    <div className="constBrand">
      <span>YemekSepeti.com</span>
      {props.children}
      {/* // {props.children}  satırını eklersen  import edildiği yerde component etiketleri arasındaki yazıyı da gösterir*/}
    </div>
  );
};
export default ConstBrand;
