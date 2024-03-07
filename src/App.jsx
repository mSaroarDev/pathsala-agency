import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/About";
import PackagesPage from "./pages/Packages";
import ServicesPage from "./pages/ServicesPage";
import Layout from "./Layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
