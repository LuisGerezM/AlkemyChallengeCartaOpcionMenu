import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "views/NotFound";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import MenuProvider from "./context/menuContext/MenuProvider";
import UserProvider from "./context/userContext/UserProvider";
import BuscadorPlatos from "./pages/BuscadorPlatos";
import DetallePlato from "./pages/DetallePlato";
import ListaPlatos from "./pages/ListaPlatos";
import Home from "./views/Home";
import Login from "./views/Login";

function App() {
  return (
    <UserProvider>
      <MenuProvider>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          >
            <Route path="lista-platos" element={<ListaPlatos />} />
            <Route path="detalles-plato" element={<DetallePlato />} />
            <Route path="buscador-platos" element={<BuscadorPlatos />} />
            {/* funciona esto, redirige al login, pero l osaco para que me mande al 404 */}
            {/* <Route path="*" element={<Login />} /> */}
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </MenuProvider>
    </UserProvider>
  );
}

export default App;
