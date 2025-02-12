import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Preloader from "./layout/Preloader";

// Lazy load your components
const Home = lazy(() => import("./ui/Home"));
const Terms = lazy(() => import("./ui/Terms"));
const Contact = lazy(() => import("./ui/Contact"));
const About = lazy(() => import("./ui/About"));
const Courses = lazy(() => import("./ui/Courses"));
const NoPage = lazy(() => import("./layout/NoPage"));

function App() {
  return (
    <Router >
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="" element={<Home />} />  {/* ✅ Remove / from path */}
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="terms" element={<Terms />} />
          <Route path="contact" element={<Contact />} />
          
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
