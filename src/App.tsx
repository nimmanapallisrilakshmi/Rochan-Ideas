import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Navbar          from "@/components/Navbar";
import Footer          from "@/components/Footer";
import HomePage        from "@/pages/HomePage";
import AboutPage       from "@/pages/AboutPage";
import MissionVisionPage from "@/pages/MissionVisionPage";
import ServicesPage    from "@/pages/ServicesPage";
import ServiceDetailPage from "@/pages/ServiceDetailPage";
import ProjectsPage    from "@/pages/ProjectsPage";
import ContactPage     from "@/pages/ContactPage";
<<<<<<< HEAD
=======
import CareersPage     from "@/pages/CareersPage";
>>>>>>> 9d3fab8 (Fix the changes)

/** Scroll to top on every route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-white w-full min-h-dvh flex flex-col">
        <Navbar />
<<<<<<< HEAD
        <main className="flex-1 pt-[72px] overflow-x-hidden">
=======
        <main className="flex-1 pt-[76px] overflow-x-hidden">
>>>>>>> 9d3fab8 (Fix the changes)
          <Routes>
            <Route path="/"               element={<HomePage />} />
            <Route path="/about"          element={<AboutPage />} />
            <Route path="/mission-vision" element={<MissionVisionPage />} />
            <Route path="/services"       element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/projects"       element={<ProjectsPage />} />
<<<<<<< HEAD
=======
            <Route path="/careers"        element={<CareersPage />} />
>>>>>>> 9d3fab8 (Fix the changes)
            <Route path="/contact"        element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
