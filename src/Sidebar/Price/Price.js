import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">PRICE RANGE</h2>

        <Input
          handleChange={handleChange}
          value={500}
          title="Under 500"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={1000}
          title="1000-3000"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
