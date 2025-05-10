import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import "./App.css"; 
const HomePage = lazy(() => import("./pages/HomePage")); 
const CatalogPage = lazy(() => import("./pages/CatalogPage")); 
const CamperDetailPage = lazy(() => import("./pages/CamperDetailPage"));

export default function AppRoutes() {
  return (
    <div className="app-container">
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperDetailPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
