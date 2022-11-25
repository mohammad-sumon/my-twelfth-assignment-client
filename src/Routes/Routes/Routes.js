import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AdminDashboard from "../../Pages/Dashboard/AdminDashboard/AdminDashboard";
import BuyerDashboard from "../../Pages/Dashboard/BuyerDashboard/BuyerDashboard";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import SellerDashboard from "../../Pages/Dashboard/SellerDashboard/SellerDashboard";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Category from "../../Pages/Home/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SingUp from "../../Pages/SignUp/SingUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SingUp></SingUp>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <Category></Category>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/dashboard",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "/dashboard/sellerDashboard",
        element: <SellerDashboard></SellerDashboard>,
      },
      {
        path: "/dashboard/buyerDashboard",
        element: <BuyerDashboard></BuyerDashboard>,
      },
      {
        path: "/dashboard/payment",
        element: <Payment></Payment>,
      },
    ],
  },
]);

export default router;
