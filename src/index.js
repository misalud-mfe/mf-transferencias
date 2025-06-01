import React from "react";
import { createRoot } from "react-dom/client";
import Transferencias from "./components/Transferencias";


const container = document.getElementById("root");
const root = createRoot(container);

root.render(<Transferencias />);
