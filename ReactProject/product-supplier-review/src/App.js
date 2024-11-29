import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderProducts from "./components/HeaderProducts";
import ProductAdd from "./components/ProductAdd";
import ProductEdit from "./components/ProductEdit";
import ProductView from "./components/ProductView";
import ProductNav from "./components/Prodnav"; // New component for Product Navigation
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      {/* Primary header for all sections */}
      <HeaderProducts />
      <Routes>
        <Route path="/products" element={<ProductNav />}>
          <Route path="add" element={<ProductAdd />} />
          <Route path="edit" element={<ProductEdit />} />
          <Route path="view" element={<ProductView />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
