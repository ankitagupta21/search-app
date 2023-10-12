import { AiFillStar } from "react-icons/ai";

const Input = ({ handleChange, value, title, name, rating }) => {
  console.log(rating);
  return (
    <label className="sidebar-label-container">
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span className="checkmark"></span>
      {rating ? (
        <>
          {[...Array(Number(value))].map((_, index) => (
            <AiFillStar key={index} className="rating-star" />
          ))}
          {[...Array(5 - Number(value))].map((_, index) => (
            <AiFillStar key={index} className="nrating-star" />
          ))}
        </>
      ) : (
        <div>{title}</div>
      )}
    </label>
  );
};

export default Input;
