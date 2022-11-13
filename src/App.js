import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Common/Footer";
import Navbar from "./components/Common/Navabar";
import BlogPage from "./pages/blogs";
import BlogDetails from "./pages/blogs/details";
import ContactPage from "./pages/contact";
import FilterPage from "./pages/filter";
import RecipDetails from "./pages/filter/recipDetails";
import HomePage from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/blogs" element={<BlogPage />}></Route>
        <Route
          path="/blogDetails/:id/:blogTitle"
          element={<BlogDetails />}
        ></Route>
        <Route path="/filterpage/:cat/" element={<FilterPage />}></Route>
        <Route path="/recipDetails" element={<RecipDetails />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
