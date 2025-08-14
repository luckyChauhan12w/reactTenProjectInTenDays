import ReactDOM from "react-dom/client"; // or ReactDOM.render for CRA older versions
import { BrowserRouter } from "react-router";
import App from "./App";
import PdtcProvider from "./context/PdtcProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PdtcProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PdtcProvider>
);
