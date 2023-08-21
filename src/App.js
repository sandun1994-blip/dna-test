import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signin from "./components/auth/Signin";
import Home from "./components/Home";
import Signup from "./components/auth/Signup";
import { AuthContextProvider } from "./context/AuthContext";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <AuthContextProvider>
        <nav>nav</nav>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
