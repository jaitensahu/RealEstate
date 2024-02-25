import "./App.css";
import Layout from "./Component/Layout/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AllCards from "./Component/AllCards/AllCards";
import LikedProperty from "./Component/LikedPropertyPage/LikedProperty";
import Context from "./Component/DataStore/Context";
import ErrorPage from "./Component/ErrorPage/ErrorPage";
function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement:<ErrorPage />,
      children: [
        {
          path: "/",
          element: (
            <AllCards
            />
          ),
        },
        {
          path: "/liked",
          element: (
            <LikedProperty
            />
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <Context>
        <RouterProvider router={router}></RouterProvider>
      </Context>
    </>
  );
}

export default App;
