// src/components/ProductNav.jsx
import { Link, Outlet } from "react-router-dom";

export default function ProductNav() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-secondary navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="add" className="nav-link">Add Product</Link>
            </li>
            <li className="nav-item">
              <Link to="edit" className="nav-link">Edit Product</Link>
            </li>
            <li className="nav-item">
              <Link to="view" className="nav-link">View Product</Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* This Outlet will render the matching child route component */}
      <Outlet />
    </>
  );
}
