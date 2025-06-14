import {
  createBrowserRouter,
} from "react-router";
import Homelayout from "../layout/Homelayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AddProducts from "../pages/AddProducts";
import Queries from "../pages/Queries";
import ProductDetails from "../pages/ProductDetails";
import MyProduct from "../pages/MyProduct";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Homelayout,
    
    children: [
        {
            index: true,
            path: '/',
            loader:()=> fetch('http://localhost:3000/product'),
            Component: Home,
        },
        {
          path: '/addproduct',
          Component: AddProducts
        },
        {
          path: '/Queries',
          loader:()=> fetch('http://localhost:3000/product'),
          Component: Queries
        },
        {
          path: '/ProductDetails/:id',
          loader:({params})=>fetch(`http://localhost:3000/product/${params.id}`),
          Component: ProductDetails
        },
        {
          path: '/MyProduct',
          loader:()=> fetch('http://localhost:3000/product'),
          Component: MyProduct
        },
        {
          path: '/register',
          Component: Register
        },
        {
          path: '/login',
          Component: Login
        },
    ]
  },
]);

export default router;



// import { createBrowserRouter } from "react-router";
// // import HomeLayout from "../layout/HomeLayout";
// // import Home from "./Home";
// import RecipeDetails from "./RecipeDetails";
// import AddRecipes from "./AddRecipes";
// import MyRecipes from "./MyRecipes";
// import AllRecipe from "./AllRecipe";
// import UpdateRecipe from "./UpdateRecipe";
// import Login from "./Login";
// import Register from "./Register";
// import Profile from "./Profile";
// import PrivateRoute from "../provider/PrivateRoute";
// import ErrorPage from "./ErrorPage";
// import HomeLayout from "../layout/Homelayout";
// import Home from "../pages/Home";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: HomeLayout,
//     errorElement: <ErrorPage></ErrorPage>,
//     children: [
//         {
//             index: true,
//             path: '/',
//             loader:()=> fetch('http://localhost:3000/recipes'),
//             Component: Home,
//         },
//         {
//             path:'recipesDetails/:id',
//             loader:({params})=>fetch(`http://localhost:3000/recipes/${params.id}`),
//             // Component: RecipeDetails,
//             element: <PrivateRoute>
//               <RecipeDetails></RecipeDetails>
//             </PrivateRoute>
//         },
//         {
//           path: '/allrecipe',
//            loader:()=> fetch('http://localhost:3000/recipes'),
//           Component: AllRecipe,
//         },
//         {
//           path: '/addrecipes',
//           // Component: AddRecipes
//           element: <PrivateRoute>
//             <AddRecipes></AddRecipes>
//           </PrivateRoute>
//         },
//         {
//           path: '/myrecipes',
//           loader:()=> fetch('http://localhost:3000/recipes'),
//           // Component: MyRecipes
//           element: <PrivateRoute>
//             <MyRecipes></MyRecipes>
//           </PrivateRoute>
//         },
//         {
//           path: 'updateRecipe/:id',
//           loader: ({params}) => fetch(`http://localhost:3000/recipes/${params.id}`),
//           Component: UpdateRecipe,
//         },
//         {
//                 path: '/login',
//                 Component: Login,
//               },
//               {
//                 path: "/register",
//                 Component: Register,
//               },
//               {
//                 path: '/profile',
//                 Component: Profile
//               }
//     ]
//   },
// ]);

// export default router;