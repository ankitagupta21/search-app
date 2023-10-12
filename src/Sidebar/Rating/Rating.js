import "./Rating.css";
import Input from "../../components/Input";

const Rating = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">RATINGS</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="5"
          title="Black"
          name="test1"
          rating="true"
        />

        <Input
          handleChange={handleChange}
          value="4"
          title="Blue"
          name="test1"
          rating="true"
        />

        <Input
          handleChange={handleChange}
          value="3"
          title="Red"
          name="test1"
          rating="true"
        />

        <Input
          handleChange={handleChange}
          value="2"
          title="Green"
          name="test1"
          rating="true"
        />
      </div>
    </>
  );
};

export default Rating;
