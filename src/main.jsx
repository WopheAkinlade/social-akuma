import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./routes/ErrorPage";
import Root from "./routes/root";
import Post from "./routes/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {path:"/home", element: <Post />},
      {path:"/home", element: <Post />},
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
