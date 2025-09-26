import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import Engineer from "./pages/Engineer";
import Builder from "./pages/Builder";

import AdminDashboard from "./pages/AdminDashboard";
import Poet from "./pages/Poet";
import Blog from "./pages/Blog";
import Poems from "./pages/Poems";
import NavigationBar from "./components/NavigationBar";
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./pages/About";
import ProductAdmin from "./pages/ProductAdmin";
import AdminMessages from "./pages/AdminMessages";
import Solar from "./pages/solar";
import Appointment from "./pages/Appointment";
import Login from "./pages/Auth/Login";
import BookitProject from "./pages/BookitProject";
import AcevedoElectricsProject from "./pages/AcevedoElectricsProject";
import BennettSalonProject from "./pages/BennettSalonProject";
import IRepairProject from "./pages/IRepairProject";
import CutByZewoProject from "./pages/CutByZewoProject";
import PlacasPRProject from "./pages/PlacasPRProject";
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
          <Route path="/blog" element={<Blog />} />
          <Route path="/poems" element={<Poems />} />
          <Route path="/about" element={<About />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/solar" element={<Solar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/projects/bookit" element={<BookitProject />} />
          <Route path="/projects/acevedo-electrics" element={<AcevedoElectricsProject />} />
          <Route path="/projects/bennett-salon" element={<BennettSalonProject />} />
          <Route path="/projects/irepair" element={<IRepairProject />} />
          <Route path="/projects/cut-by-zewo" element={<CutByZewoProject />} />
          <Route path="/projects/placaspr" element={<PlacasPRProject />} />
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
