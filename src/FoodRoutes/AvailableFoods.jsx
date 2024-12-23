import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../providers/AuthContext";

const AvailableFoods = () => {

  const {user}=useContext(AuthContext)
  const fetchFoods = async () => {
    const response = await axios.get("http://localhost:5000/foods");
    console.log(response.data);
    return response.data.filter(food=>food.status==='available'); // Return the fetched data
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
        {" "}
        <p className="w-full text-center">Error: {error.message}</p>;
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {foods.map((food) => (
          <div key={food._id} className="card glass w-96 ">
            <figure>
              <img src={food?.foodImage} alt={food?.foodName} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Food Name: {food?.foodName}</h2>
              <p> {food?.foodQuantity}</p>
              <p>{food?.status}</p>
              <p>{food?.additionalNotes}</p>
              <div className="card-actions justify-end">
                <Link to={`/foods/${food._id}`}><button className="btn btn-primary">view details</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
