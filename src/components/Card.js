import React, { useState } from "react";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Card = ({ img, title, star, prevPrice, newPrice }) => {
  const [like, setLike] = useState(false);
  return (
    <>
      <section className="card">
        <div className="image-container">
          {like ? (
            <AiFillHeart className="like" onClick={() => setLike(!like)} />
          ) : (
            <AiOutlineHeart className="dlike" onClick={() => setLike(!like)} />
          )}
          <img src={img} alt={title} className="card-img" />
        </div>

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
