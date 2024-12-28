import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../providers/AuthContext";

const FoodDetails = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [food, setFood] = useState({});
  const [note, setNote] = useState("");
  const { id } = useParams();

  const singleFood = async () => {
    const { data } = await axios.get(`https://plate-share-server.vercel.app/foods/${id}`);
    setFood(data);
    setNote(data.additionalNotes);
  };
  useEffect(() => {
    singleFood();
  }, []);

  const update = async () => {
    const payload = {
      status: "requested",
      additionalNotes: note,
      quantity: food.foodQuantity,
    };

    const { data } = await axios.put(
      `https://plate-share-server.vercel.app/foods/${id}`,
      payload
    );

    navigate("/myFoodRequest");
  

    return;
  };

  console.log(food);
  console.log(note);
  return (
    <div className="card gap-10 md:card-side bg-base-100 shadow-xl">
      <div className="">
        <figure className="">
          <img
            className="bg-cover h-[300px] w-[400px] rounded-lg "
            src={food.foodImage}
            alt="Album"
          />
        </figure>
      </div>
      <div className="card-body  ">
        <h2 className="card-title">
          Food Name: <span className="text-red-500">{food.foodName}</span>
        </h2>
        <p className="text-black font-medium">
          Quantity : <span className="text-red-500"> {food.foodQuantity}</span>
        </p>
        <p className="text-black font-medium">
          Expired Date:{" "}
          <span className="text-red-500"> {food.expiredDate}</span>
        </p>
        <p className="text-black font-medium">
          Donator Name: <span className="text-red-500">{food.name}</span>
        </p>
        <p className="text-black font-medium">
          Food Status : <span className="text-red-500">{food.status}</span>
        </p>
        <p className="text-black font-medium">
          Comment: <span className="text-red-500">{food.additionalNotes}</span>
        </p>
        <div className="card-actions justify-center">
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            Request
          </button>
          <dialog id="my_modal_4" className="modal ">
            <div className="modal-box w-11/12 max-w-4xl mx-auto">


            {/*  */}
            <div className="flex justify-around items-center gap-4">
            <div>
                <img
                  className="h-[300px] w-[400px] mb-4 rounded-lg"
                  src={food.foodImage}
                  alt={food.foodName}
                />
              </div>
              <div>
                <h2 className="card-title">
                  Food Name:{" "}
                  <span className="text-red-500"> {food.foodName}</span>
                </h2>
                <p className="text-black font-medium">
                  Quantity :{" "}
                  <span className="text-red-500"> {food.foodQuantity}</span>
                </p>
                <p className="text-black font-medium">
                  Expired Date:{" "}
                  <span className="text-red-500"> {food.expiredDate}</span>
                </p>
                <p className="text-black font-medium">
                  Donator Name:{" "}
                  <span className="text-red-500">{food.name}</span>
                </p>
                <p className="text-black font-medium">
                  Food Status :{" "}
                  <span className="text-red-500">{food.status}</span>
                </p>
               
                <label className="block mt-3 text-black font-medium" htmlFor="Note">
                  Additional Note:
                </label>
                <input
                  type="text"
                  className="border border-gray-300 px-2 py-1  rounded-md"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>

            </div>
            {/*  */}
              
             
              <div className="modal-action ">
                <form method="dialog">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn bg-green-400" onClick={update}>
                    Request
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
