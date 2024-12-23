import React from "react";



const FoodCard = ({ food }) => {
  const { foodImage, foodName, foodQuantity, status, additionalNotes } = food;
  return (
    <div className="card glass w-96">
      <figure>
        <img src={foodImage} alt={foodName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Food Name: {foodName}</h2>
        <p> {foodQuantity}</p>
        <p>{status}</p>
        <p>{additionalNotes}</p>
        <div className="card-actions justify-end">
         
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
