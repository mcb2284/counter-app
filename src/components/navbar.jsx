const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          Navbar{" "}
          <span className="badge bg-pill bg-secondary">{totalCounters}</span>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
