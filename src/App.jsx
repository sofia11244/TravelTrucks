import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer"; // Make sure to import Footer

const HomePage = lazy(() => import("./pages/HomePage")); 
const CatalogPage = lazy(() => import("./pages/CatalogPage")); 
const CamperDetailPage = lazy(() => import("./pages/CamperDetailPage"));

export default function AppRoutes() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperDetailPage />} />
        </Routes>
      </Suspense>
      <Footer /> {/* Add the footer so it appears on every page */}
    </div>
  );
}
