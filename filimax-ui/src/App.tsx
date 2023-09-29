import { BrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";

import { AuthProvider } from "./hooks/useAuth";
import { FilimaxRouter } from "./routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <FilimaxRouter></FilimaxRouter>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
