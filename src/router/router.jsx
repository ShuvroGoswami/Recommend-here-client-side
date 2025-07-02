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
import UpdateProduct from "../pages/UpdateProduct";
import Recommend from "../pages/Recommend";
import Myrecommends from "../pages/Myrecommends";
import AllRecommends from "../pages/AllRecommends";
import RecommendationsForMe from "../pages/RecommendationsForMe ";
import PrivateRoute from "../provider/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Homelayout,
    errorElement: <ErrorPage></ErrorPage>,
    
    children: [
        {
            index: true,
            path: '/',
            loader:()=> fetch('https://b11a11-server-side-shuvro-goswami.vercel.app/product'),
            Component: Home,
        },
        {
          path: '/addproduct',
          // Component: AddProducts
          element:<PrivateRoute>
            <AddProducts></AddProducts>
          </PrivateRoute>
        },
        {
          path: '/Queries',
          loader:()=> fetch('https://b11a11-server-side-shuvro-goswami.vercel.app/product'),
          Component: Queries
        },
        {
          path: '/ProductDetails/:id',
          loader:({params})=>fetch(`https://b11a11-server-side-shuvro-goswami.vercel.app/product/${params.id}`),
          Component: ProductDetails
        },
        {
          path: '/MyProduct',
          loader:()=> fetch('https://b11a11-server-side-shuvro-goswami.vercel.app/products/user'),
          // Component: MyProduct
          element: <PrivateRoute>
            <MyProduct></MyProduct>
          </PrivateRoute>
        },
        {
          path: 'updateProduct/:id',
          loader: ({params}) => fetch(`https://b11a11-server-side-shuvro-goswami.vercel.app/product/${params.id}`),
          Component: UpdateProduct
        },
        {
          path: 'recommend/:id',
          Component: Recommend
        },
        {
          path: 'allRecommends',
          Component: AllRecommends
        },
        {
          path: 'RecommendsForMe',
          // Component: RecommendationsForMe
          element: <PrivateRoute>
            <RecommendationsForMe></RecommendationsForMe>
          </PrivateRoute>
        },
        {
          path: 'myRecommend',
          // Component: Myrecommends,
          element: <PrivateRoute>
            <Myrecommends></Myrecommends>
          </PrivateRoute>
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
//             loader:()=> fetch('https://b11a11-server-side-shuvro-goswami.vercel.app/recipes'),
//             Component: Home,
//         },
//         {
//             path:'recipesDetails/:id',
//             loader:({params})=>fetch(`https://b11a11-server-side-shuvro-goswami.vercel.app/recipes/${params.id}`),
//             // Component: RecipeDetails,
//             element: <PrivateRoute>
//               <RecipeDetails></RecipeDetails>
//             </PrivateRoute>
//         },
//         {
//           path: '/allrecipe',
//            loader:()=> fetch('https://b11a11-server-side-shuvro-goswami.vercel.app/recipes'),
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
//           loader:()=> fetch('https://b11a11-server-side-shuvro-goswami.vercel.app/recipes'),
//           // Component: MyRecipes
//           element: <PrivateRoute>
//             <MyRecipes></MyRecipes>
//           </PrivateRoute>
//         },
//         {
//           path: 'updateRecipe/:id',
//           loader: ({params}) => fetch(`https://b11a11-server-side-shuvro-goswami.vercel.app/recipes/${params.id}`),
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