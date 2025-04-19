import { createRoot } from "react-dom/client";
import "./app/styles/normalize.css";
import { App } from "./app/App";

createRoot(document.getElementById("root")!).render(<App />);
