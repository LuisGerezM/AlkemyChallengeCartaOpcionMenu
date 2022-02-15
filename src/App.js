import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import UserProvider from "./context/userContext/UserProvider";
import BuscadorPlatos from "./pages/BuscadorPlatos";
import DetallePlato from "./pages/DetallePlato";
import ListaPlatos from "./pages/ListaPlatos";
import Home from "./views/Home";
import Login from "./views/Login";

function App() {
  return (
    <UserProvider>
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
          <Route path="detalle-plato" element={<DetallePlato />} />
          <Route path="buscador-platos" element={<BuscadorPlatos />} />
          {/* VER SI DEJAMOS eSTE ULTIMO  */}
          {/* <Route path="*" element={<Login />} /> */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
