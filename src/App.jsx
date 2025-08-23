import Header from "../components/Header.jsx";
import Body from "../components/Body.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import About from "../components/About.jsx"; // Assuming About is imported from components/About.jsx
import Contact from "../components/Contact.jsx"; // Assuming Contact is imported from components/Contact.jsx
import Error from "../components/Error.jsx"; // Assuming Error is imported from components/Error.jsx
import RestaurantPage from "../components/RestaurantPage.jsx";
import Shimmer from "./../components/Shimmer";
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />, // Assuming Error is imported from components/Error.jsx
    children: [
      {
        path: "/",
        element: <Body />, // Assuming Body is imported from components/Body.jsx
      },
      {
        path: "/about",
        element: <About />, // Assuming About is imported from components/About.jsx
      },
      {
        path: "/contact",
        element: <Contact />, // Assuming Contact is imported from components/Contact.jsx
      },
      {
        path: "/Body",
        element: <Body />, // Assuming Body is imported from components/Body.jsx
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantPage />, // Assuming RestaurantPage is imported from components/RestaurantPage.jsx
      },

      {
        path: "/Shimmer",
        element: <Shimmer />, // Assuming Shimmer is imported from components/Shimmer.jsx
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
export default AppLayout;
