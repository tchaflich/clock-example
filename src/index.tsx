import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("react-root");
const root = createRoot(container!);
root.render(<h1>It works! :D</h1>)
