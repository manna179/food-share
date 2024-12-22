import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AvailableFoods = () => {
  const fetchFoods = async () => {
    const response = await axios.get("http://localhost:5000/foods");
    return response.data; // Return the fetched data
  };
  const { data: foods, isLoading, error } = useQuery({ queryKey: ["foods"], queryFn: fetchFoods });
  if (isLoading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  // Handle error state
  if (error) {
    return <div className="flex justify-center items-center h-full w-full"> <p className="w-full text-center">Error: {error.message}</p>;</div>
  }

  return (
    <div>
      <div> availableFoods</div>
      {foods.map((food) => (
        <ul key={food._id}>
          <h2>{food?.foodQuantity}</h2>
        </ul>
      ))}
    </div>
  );
};

export default AvailableFoods;
