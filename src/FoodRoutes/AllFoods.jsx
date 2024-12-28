import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import AuthContext from "../providers/AuthContext";
import { Link } from "react-router-dom";

const AllFoods = () => {
  const { user } = useContext(AuthContext);
  const fetchFoods = async () => {
    const response = await axios.get("https://plate-share-server.vercel.app/foods");
    return response.data;
  };
  const {
    data: foods,
    isLoading,
    error,
  } = useQuery({ queryKey: ["foods"], queryFn: fetchFoods });
  if (isLoading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  // Handle error state
  if (error) {
    return (
      <div className="flex justify-center items-center h-full w-full">
        <p className="w-full text-center">Error: {error.message}</p>;
      </div>
    );
  }
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold mb-4 mt-4"> All Foods: ({foods.length})</h2>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
     {foods.map((food) => (
        <div key={food._id} className="card glass w-96  ">
          <figure>
            <img
              className="h-[300px] bg-cover w-[400px] rounded-br-md rounded-bl-md"
              src={food?.foodImage}
              alt={food?.foodName}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-black font-semibold">
              Food Name: <span className="text-red-500"> {food?.foodName}</span>
            </h2>
            <p className="text-black font-semibold">
              Quantity:{" "}
              <span className="text-red-500">{food?.foodQuantity}</span>
            </p>
            <p className="text-black font-semibold ">
              Food Location:{" "}
              <span className="text-red-500">{food?.location}</span>
            </p>

            <p className="text-black font-semibold ">
              Expired date:{" "}
              <span className="text-red-500">{food?.expiredDate}</span>
            </p>
            <p className="text-black font-semibold">
              Owner: <span className="text-red-500">{food?.name}</span>
            </p>

            <div className="card-actions justify-end">
              <Link to={`/foods/${food._id}`}>
                <button className="btn hover:bg-green-200 hover:text-black bg-red-600 text-gray-200">
                  view details
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
     </div>
     <Link to='/availableFoods'><button className="btn bg-red-400 w-full">See Available</button></Link>
    </div>
  );
};

export default AllFoods;
