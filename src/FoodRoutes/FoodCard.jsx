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
  // console.log(food);
  return (
    <div className="card glass p-2">
      <figure>
        <img className=" bg-cover rounded-br-md rounded-bl-md" src={foodImage} alt={foodName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title flex justify-between"><span>Food Name</span><span> {foodName}</span></h2>
        <p className="text-black font-semibold flex justify-between ">
          {" "}
         <span> Food Quantity</span>  <span className="text-red-500">{foodQuantity}</span>
        </p>
        <p className="text-black font-semibold flex justify-between">
          <span>Status</span> <span className="text-red-500">{status}</span>
        </p>

        <p className="text-black font-semibold flex justify-between">
          <span>Location</span><span className="text-red-500">{location}</span>
        </p>
        <p className="text-black font-semibold flex justify-between">
          <span>Expired At</span> <span className="text-red-500">{expiredDate}</span>
        </p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default FoodCard;
