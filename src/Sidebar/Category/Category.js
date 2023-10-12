import "./Category.css";
import Input from "../../components/Input";
import products from "../../db/data";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">BRAND</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value={products[0].category}
          title={products[0].category}
          name="test"
        />
        <Input
          handleChange={handleChange}
          value={products[1].category}
          title={products[1].category}
          name="test"
        />
        <Input
          handleChange={handleChange}
          value={products[2].category}
          title={products[2].category}
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
