import Home from "@/page/Home";
import PokemonDetail from "@/page/pokemon/detail/PokemonDetail";
import Pokemon from "@/page/pokemon/Pokemon";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "pokemon",
    element: <Pokemon />,
  },
  {
    path: "pokemon/detail/:id",
    element: <PokemonDetail />,
  },
];

const router = createBrowserRouter(publicRoutes);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
