import "./App.css";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Default from "./pages/Default";
import OrdemDeServico from "./pages/OrdemDeServico";
import Servicos from "./pages/Servicos";
import Estoque from "./pages/Estoque";
import Cliente from "./pages/Cliente";
import Usuarios from "./pages/Usuarios";
import Relatorios from "./pages/Relatorios";

function App() {

  const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
        {
        index:true, 
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
    
  },
  ]);
  
  return (
    <div className="App">
       <RouterProvider router={router} />
    
    </div>
  );
}

export default App;
