import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Engineer from "./pages/Engineer";
import Builder from "./pages/Builder";
import Poet from "./pages/Poet";
import Shop from "./pages/Shop";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard";
import NavigationBar from "./components/NavigationBar";
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./pages/About";
import Admin from "./pages/Admin";
import ProductAdmin from "./pages/ProductAdmin";
import AdminMessages from "./pages/AdminMessages";

function App() {
  return (
    <>
      <NavigationBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/engineer" element={<Engineer />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/poet" element={<Poet />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin/messages" element={<AdminMessages />} />;
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/engineer" element={<Engineer />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/poet" element={<Poet />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/product-admin" element={<ProductAdmin />} />
          {/* Protected Dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
