import { useContext } from "react";
import AuthContext from "../providers/AuthContext";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import FoodCard from "../FoodRoutes/FoodCard";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import ExtraSection from "./ExtraSection";

const Home = () => {
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
    <div>
      <div className="mt-4 mb-4">
        <Banner></Banner>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-red-600 text-center">
          Explore Featured Foods
        </h2>
        <p className="text-lg text-center font-semibold text-gray-500">
          Check out our featured selections, handpicked for you!
        </p>
      </div>
      <h2 className="text-xl font-bold mb-3">Food Featured:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {foods.slice(0, 6).map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>

      <Link to="/allFoods">
        {" "}
        <button className="btn w-full bg-red-400 hover:bg-slate-700 hover:text-white mt-4">
          see all{" "}
        </button>
      </Link>

      <div>
        <ExtraSection></ExtraSection>
      </div>
    </div>
  );
};

export default Home;
