import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../providers/AuthContext";
import { format } from "date-fns";

const AvailableFoods = () => {
  const [sort, setSort] = useState("asc");
  const [search, setSearch] = useState("");
  const [isThreeColumn, setIsThreeColumn] = useState(true);
  const { user } = useContext(AuthContext);
  const {
    data: foods,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["foods", sort, search],
    queryFn:async()=>{
      const response = await axios.get(
        `https://plate-share-server.vercel.app/foods?sort=${sort}&search=${search}`
      );
      // console.log(response.data);
      return  response.data.filter((food) => food.status === "available"); // Return the fetched data
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    refetchOnMount: true,
  });
  if (isLoading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  // Handle error state
  if (error) {
    return (
      <div className="flex justify-center items-center h-full w-full">
        {" "}
        <p className="w-full text-center">Error: {error.message}</p>;
      </div>
    );
  }

  return (
    <div>
      <div className="text-center mb-4 mt-4">
        <h2 className="text-3xl font-semibold text-red-900 ">
          From Your Plate to Someone's Table
        </h2>
        <p className="text-[16px] font-normal text-gray-500">
          Connect with your community to reduce waste and spread kindness.
        </p>
      </div>
      <div className="flex justify-between flex-col md:flex-row  items-center mb-3">
        <div>
          <strong className="text-xl font-bold">
            Total Available ({foods.length})
          </strong>
        </div>
        <div className="flex flex-col md:flex-row gap-2 items-center">
          <label htmlFor="expireDate">Sort By:</label>
          <select
            name="expireDate"
            id="expireDate"
            onChange={(e) => setSort(e.target.value)}
            className="border p-4 rounded-md"
            value={sort}
          >
            <option value="dsc">Descending Order</option>
            <option value="asc">Ascending Order</option>
          </select>
          <button
            onClick={() => setIsThreeColumn(!isThreeColumn)} // Toggle layout
            className="bg-transparent-500 text-gray-700 px-4 py-4 border rounded-md"
          >
            {isThreeColumn ? "Switch to 2 Columns" : "Switch to 3 Columns"}
          </button>

          <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              name="search"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              placeholder="Enter Job Title"
              aria-label="Enter Job Title"
            />

            <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Search
            </button>
          </div>
        </div>
      </div>
      <div
        className={`grid  ${
          isThreeColumn
            ? " md:grid-cols-3 "
            : " md:grid-cols-2 "
        } gap-4`}
      >
        {foods.map((food) => (
          <div key={food._id} className="card glass w-full  ">
            <figure>
              <img
                className=" rounded-br-md rounded-bl-md"
                src={food?.foodImage}
                alt={food?.foodName}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black font-semibold">
                Food Name:{" "}
                <span className="text-red-500"> {food?.foodName}</span>
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
                <span className="text-red-500">
                  {format(new Date(food?.expiredDate), "MM/dd/yyyy")}
                </span>
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
    </div>
  );
};

export default AvailableFoods;
