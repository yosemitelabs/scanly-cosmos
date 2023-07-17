import React from "react";

interface CardProps {}

const Card: React.FC<CardProps> = ({}) => {
  return (
    <div style={{ background: "red", height: "200px", width: "200px" }}>
      i'm a card
    </div>
  );
};

Card.displayName = "Card";

export default Card;
