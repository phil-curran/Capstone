import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import "jquery";
import "../styles/semantic.js";
import "../styles/semantic.css";
import "../styles/App.css";
import { UserAuthContextProvider } from "../context/UserAuthContext";
import Home from "./Home";
import ProtectedRoute from "./ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
