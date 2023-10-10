import { createRoot } from "react-dom/client";
import Like from "./components/like";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Like />);
