import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Override some default styles with our custom ones
import "./lib/customStyles";

createRoot(document.getElementById("root")!).render(<App />);
