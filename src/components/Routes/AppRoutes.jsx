import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { FormPage } from "../Pages/FormPage";

import { Nav } from "../Navigation/Nav";
import { Footer } from "../Footer/Footer";
import { AboutPage } from "../Pages/AboutPage";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" exact element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/formpage" element={<FormPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
