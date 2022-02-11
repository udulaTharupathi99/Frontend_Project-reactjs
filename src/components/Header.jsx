import { Link } from "react-router-dom";

function Header() {
    return (
      <div >
          <nav class="navbar navbar-dark bg-primary">
          <span class="navbar-brand mb-0 h1">Navbar</span>
          <Link to="/login" className="btn btn-primary mb-2">Login</Link> 
          </nav>
      </div>
    );
  }
  
  export default Header;