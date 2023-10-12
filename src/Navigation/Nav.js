import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Search"
        />
        <span className="nav-icons">&#128269;</span>
      </div>
    </nav>
  );
};

export default Nav;
