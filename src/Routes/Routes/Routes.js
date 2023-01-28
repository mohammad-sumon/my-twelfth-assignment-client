import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AdminDashboard from "../../Pages/Dashboard/AdminDashboard/AdminDashboard";
import BuyerDashboard from "../../Pages/Dashboard/BuyerDashboard/BuyerDashboard";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import SellerDashboard from "../../Pages/Dashboard/SellerDashboard/SellerDashboard";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Category from "../../Pages/Home/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SingUp from "../../Pages/SignUp/SingUp";
import AdminRoute from "../AdminRoute/AdminRoute";
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
        path: "/blogs",
        element: <Blogs></Blogs>,
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
          // <PrivateRoute>
          <Category></Category>
          // </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://used-products-resale-server-orpin.vercel.app/category/${params.id}`
          ),
      },
      {
        path: "/dashboard",
        element: (
          <AdminRoute>
            <AdminDashboard></AdminDashboard>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/sellerDashboard",
        element: (
          <PrivateRoute>
            <SellerDashboard></SellerDashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/buyerDashboard",
        element: (
          <PrivateRoute>
            <BuyerDashboard></BuyerDashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/payment",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/sellerDashboard/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/sellerDashboard/myProducts",
        element: <MyProducts></MyProducts>,
      },
    ],
  },
]);

export default router;
