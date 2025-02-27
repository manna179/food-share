import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const MyFoodRequest = () => {
  const fetchFoods = async () => {
    const response = await axios.get("https://plate-share-server.vercel.app/foods");
    // console.log(response.data);
    return response.data.filter((food) => food.status === "requested"); // Return the fetched data
  };
  const {
    data: foods,
    isLoading,
    error,
  } = useQuery({ queryKey: ["foods"], queryFn: fetchFoods });
  if (isLoading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }
  if (error) {
    return (
      <div className="flex justify-center items-center h-full w-full">
        {" "}
        <p className="w-full text-center">Error: {error.message}</p>;
      </div>
    );
  }
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
      {foods.map((food) => (
        <div key={food?._id} className="card glass bg-base-100 w-full shadow-xl">
          <figure className="w-full">
            <img
              src={food.foodImage}
              alt="Shoes"
              className="rounded-xl  bg-cover"
            />
          </figure>
          <div className="card-body p-2 items-center text-center w-full">
            <h2 className="card-title text-black font-medium">
              {" "}
              Requested By: <span className="text-red-500">{food.name}</span>
            </h2>
            <p className="text-black font-medium">
              Food Name : <span className="text-red-500">{food.foodName}</span>
            </p>
            <p className="text-black font-medium ">
              Location: <span className="text-red-500">{food.location}</span>
            </p>
            <p className="text-black font-medium ">
              Expired Date: <span className="text-red-500">{food.expiredDate}</span>
            </p>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyFoodRequest;
