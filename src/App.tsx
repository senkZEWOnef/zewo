import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import Engineer from "./pages/Engineer";
import Builder from "./pages/Builder";

import AdminDashboard from "./pages/AdminDashboard";
import Poet from "./pages/Poet";
import NavigationBar from "./components/NavigationBar";
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./pages/About";
import ProductAdmin from "./pages/ProductAdmin";
import AdminMessages from "./pages/AdminMessages";
import Solar from "./pages/solar";
import Appointment from "./pages/Appointment";
import Login from "./pages/Auth/Login";
function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/engineer" element={<Engineer />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/poet" element={<Poet />} />
          <Route path="/about" element={<About />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/solar" element={<Solar />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/product-admin"
            element={
              <ProtectedRoute>
                <ProductAdmin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/messages"
            element={
              <ProtectedRoute>
                <AdminMessages />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
