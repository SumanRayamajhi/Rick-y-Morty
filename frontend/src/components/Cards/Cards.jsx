import React from "react";
import "./cards.css";

const Cards = ({ results }) => {
  console.log(results);
  let display;
  if (results) {
    display = results.map(({ name, image, species, origin }, index) => {
      return (
        <div className="card__container" key={index}>
          <div className="cards__content">
            <img src={image} alt="characters" className="characters-img" />
            <div className="container-content">
              <h2 className="characters-name">{name}</h2>
              <h3 className={species === "Human" ? "human" : "non-human"}>
                {species}
              </h3>
              <h3 className="origin-name">{origin.name}</h3>
            </div>
          </div>
        </div>
      );
    });
  } else {
    display = "No Characters Found :/";
  }
  return <section className="cards">{display}</section>;
};

export default Cards;
