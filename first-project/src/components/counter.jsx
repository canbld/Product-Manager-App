import "./counter.css";

const Counter = (props) => {
  const { setSayi, sayi, children } = props;
  return (
    <div className="counterContainer">
      <button className="counterButton" onClick={() => setSayi(sayi + 1)}>
        +
      </button>
      {children}
      <button className="counterButton" onClick={() => setSayi(sayi - 1)}>
        -
      </button>
    </div>
  );
};
export default Counter;
