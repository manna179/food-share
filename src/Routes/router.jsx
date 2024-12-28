import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Login from "../LoginPage/Login";
import Register from "../LoginPage/Register";
import MyFoodRequest from "../FoodRoutes/MyFoodRequest";
import ManageFood from "../FoodRoutes/ManageFood";
import AddsFood from "../FoodRoutes/AddsFood";
import AvailableFoods from "../FoodRoutes/AvailableFoods";
import FoodDetails from "../FoodRoutes/FoodDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";
import AllFoods from "../FoodRoutes/AllFoods";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addsFood",
        element: (
          <PrivateRoute>
            <AddsFood></AddsFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/myFoodRequest",
        element: (
          <PrivateRoute>
            <MyFoodRequest></MyFoodRequest>
          </PrivateRoute>
        ),
      },
      {
        path: "/manageFood",
        element: (
          <PrivateRoute>
            <ManageFood></ManageFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/availableFoods",
        element: (
          <PrivateRoute>
            <AvailableFoods></AvailableFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "/allFoods",
        element: <AllFoods></AllFoods>,
      },
      {
        path: "/foods/:id",
        element: (
          <PrivateRoute>
            <FoodDetails></FoodDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
