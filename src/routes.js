import Home from "./pages/home/Home";
import Analytics from "./pages/Analytics/Analytics";
import Product from "./pages/Product/Product"

let routes=[
    {path:'/' , element:<Home/>},
    {path:'/Analytics' , element:<Analytics/>},
    {path:'/Product' , element:<Product/>},
]

export default routes;