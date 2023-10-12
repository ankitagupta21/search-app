import { AiFillStar } from "react-icons/ai";
const Card = ({ img, title, star, prevPrice, newPrice }) => {
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-price">
            <div className="price">
              <del>Rs.{prevPrice}</del> Rs.{newPrice}
            </div>
          </section>
          <section className="card-reviews">
            {[...Array(star)].map((_, index) => {
              return <AiFillStar key={index} className="rating-star" />;
            })}
            {[...Array(5 - star)].map((_, index) => {
              return <AiFillStar key={index} className="nrating-star" />;
            })}
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
