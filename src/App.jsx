import Header from "../components/Header.jsx";
import Body from "../components/Body.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import About from "../components/About.jsx"; 
import Contact from "../components/Contact.jsx";
import Error from "../components/Error.jsx"; 
import RestaurantPage from "../components/RestaurantPage.jsx";
import Shimmer from "./../components/Shimmer";
import Footer from "../components/Footer.jsx";
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/Body",
        element: <Body />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantPage />,
      },

      {
        path: "/Shimmer",
        element: <Shimmer />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
export default AppLayout;
