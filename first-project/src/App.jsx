import "./App.css";
import Products from "./components/Products/products";
import Counter from "./components/counter";
import { useState } from "react";

const App = () => {
  const [sayi, setSayi] = useState(1);

  return (
    <div className="App">
      <Products />
      <Counter sayi={sayi} setSayi={setSayi}>
        {sayi}
      </Counter>
    </div>
  );
};

export default App;
