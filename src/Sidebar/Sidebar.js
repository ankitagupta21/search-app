import Category from "./Category/Category";
import Price from "./Price/Price";
import Rating from "./Rating/Rating";

import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <h1 className="sidebar_title">Search Results</h1>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Rating handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
