import { Link } from "react-router-dom";

export default function HeaderApp() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark ">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}