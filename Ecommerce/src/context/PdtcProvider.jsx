import { useState } from "react";
import { MyContext } from "./productContext";

function PdtcProvider({ children }) {
  const [product, setProduct] = useState(null);

  return (
    <MyContext.Provider value={{ product, setProduct }}>
      {children}
    </MyContext.Provider>
  );
}

export default PdtcProvider;
