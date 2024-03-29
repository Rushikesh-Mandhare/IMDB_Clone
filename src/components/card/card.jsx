import React, { useEffect, useState } from "react";
import "./card.css";
import { Link } from "react-router-dom";

const Cards = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer); // Clear timer on component unmount
  }, []);

  return (
    <div className="cards">
      {isLoading ? (
        <div className="wave-loading">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      ) : (
        <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
          <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} alt={movie ? movie.original_title : ""} />
          <div className="cards__overlay">
            <div className="card__title">{movie ? movie.original_title : ""}</div>
            <div className="card__runtime">
              {movie ? movie.release_date : ""}
              <span className="card__rating">
                {movie ? movie.vote_average : ""}
                <i className="fas fa-star" />
              </span>
            </div>
            <div className="card__description">{movie ? movie.overview.slice(0, 118) + "..." : ""}</div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Cards;
