import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Sidebar from "./routes/root";
import Error from "./routes/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />,
    errorElement: <Error />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
