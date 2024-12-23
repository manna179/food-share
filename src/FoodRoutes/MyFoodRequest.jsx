import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const MyFoodRequest = () => {

    const fetchFoods = async () => {
        const response = await axios.get("http://localhost:5000/foods");
        console.log(response.data);
        return response.data.filter(food=>food.status==='requested'); // Return the fetched data
      };
      const {
        data: foods,
        isLoading,
        error,
      } = useQuery({ queryKey: ["foods"], queryFn: fetchFoods });
      if(isLoading){
        return <span className="loading loading-bars loading-lg"></span>;

      }
      if(error){
        return (
            <div className="flex justify-center items-center h-full w-full">
              {" "}
              <p className="w-full text-center">Error: {error.message}</p>;
            </div>
          );
      }
    return (
        <div>
           {
            foods.map(food =><div key={food._id}>
                <h2>{food?.foodQuantity}</h2>
            </div> )
           }
        </div>
    );
};

export default MyFoodRequest;