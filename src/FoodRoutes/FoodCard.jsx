import React from "react";

const FoodCard = ({ food }) => {
  const {
    foodImage,
    foodName,
    foodQuantity,
    status,
    location,
    expiredDate,
  } = food;
  console.log(food);
  return (
    <div className="card glass w-96">
      <figure>
        <img className="h-[300px] w-[400px] bg-cover rounded-br-md rounded-bl-md" src={foodImage} alt={foodName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Food Name: {foodName}</h2>
        <p className="text-black font-semibold">
          {" "}
          Food Quantity: <span className="text-red-500">{foodQuantity}</span>
        </p>
        <p className="text-black font-semibold">
          Status: <span className="text-red-500">{status}</span>
        </p>

        <p className="text-black font-semibold">
          Location: <span className="text-red-500">{location}</span>
        </p>
        <p className="text-black font-semibold">
          Expired At: <span className="text-red-500">{expiredDate}</span>
        </p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default FoodCard;
