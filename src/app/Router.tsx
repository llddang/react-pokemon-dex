import Home from "@/page/Home";
import Pokedex from "@/page/pokedex/Pokedex";
import PokemonDetail from "@/page/pokemon/detail/PokemonDetail";
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
    path: "/pokedex",
    element: <Pokedex />,
  },
  {
    path: "/pokemon/detail/:id",
    element: <PokemonDetail />,
  },
];

const router = createBrowserRouter(publicRoutes);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
