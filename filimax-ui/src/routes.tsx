import {

  RouteObject, useRoutes
} from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { Login } from './pages/Login';
import Home from "./pages/Home";
import Default from "./pages/Default";
import OrdemDeServico from "./pages/OrdemDeServico";
import Servicos from "./pages/Servicos";
import Estoque from "./pages/Estoque";
import Cliente from "./pages/Cliente";
import Usuarios from "./pages/Usuarios/Usuarios";
import Relatorios from "./pages/Relatorios";
import { useEffect, useState } from 'react';

const HEALTH_CHECK_ROUTE: RouteObject = {
  path: '/health',
  element: <p>OK</p>
};

const initializedRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Login />
  },
  HEALTH_CHECK_ROUTE
];

const unauthenticatedRoutes: RouteObject[] = [
  {
    path: '*',
    element: <Login />
  },
  HEALTH_CHECK_ROUTE
];

const authenticatedRoutes: RouteObject[] = [
  {

    path: "/",
    element: <Default />,
    children: [
      {
        index: true,
        path: "home",
        element: <Home />,
      },
      {
        path: "ordem-de-servico",
        element: <OrdemDeServico />,
      },
      {
        path: "clientes",
        element: <Cliente />,
      },
      {
        path: "estoque",
        element: <Estoque />,
      },
      {
        path: "servicos",
        element: <Servicos />,
      },
      {
        path: "usuarios",
        element: <Usuarios />,
      },
      {
        path: "Relatorios",
        element: <Relatorios />,
      },
    ],


  }
];


export const FilimaxRouter: React.FC = () => {
  const { userToken } = useAuth()
  const [routes, setRoutes] = useState(initializedRoutes);

  useEffect(() => {
    setRoutes(userToken ? authenticatedRoutes : unauthenticatedRoutes);
  }, [userToken]);

  return (<>{useRoutes(routes)}</>)
};