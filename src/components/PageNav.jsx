import { Link } from "react-router-dom";

function PageNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        {/* <Link className="navbar-brand" to="/camera-view">
          Camera View
        </Link> */}
      </div>
    </nav>
  );
}

export default PageNav;
