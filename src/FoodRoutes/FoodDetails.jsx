import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../providers/AuthContext";

const FoodDetails = () => {
    const {user}=useContext(AuthContext)
  const [food, setFood] = useState({});
  const [note,setNote]=useState('')
  const { id } = useParams();

  const singleFood = async () => {
    const { data } = await axios.get(`http://localhost:5000/foods/${id}`);
    setFood(data);
    setNote(data.additionalNotes)
  };
  useEffect(() => {
    singleFood();
  }, []);

  const update =async ()=>{
    const {data}=await axios.put(`http://localhost:5000/foods/${id}`,{status:'requested', additionalNotes:note})
    console.log(data);
    
    return 
  }

console.log(food);
  console.log(note);
  return (
    <div className="card gap-10 md:card-side bg-base-100 shadow-xl">
      <div className="">
      <figure className="bg-cover " >
        <img className="bg-cover "
          src={food.foodImage}
          alt="Album"
        />
      </figure>
      </div>
      <div className="card-body  ">
        <h2 className="card-title">Food Name: {food.foodName}</h2>
        <p>Quantity : {food.foodQuantity}</p>
        <p>Expired Date: {food.expiredDate}</p>
        <p>Donator Name: {food.name}</p>
        <p>Food Status : {food.status}</p>
        <p>Comment:{food.additionalNotes}</p>
        <div className="card-actions justify-center">
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            Request
          </button>
          <dialog id="my_modal_4" className="modal ">

            <div className="modal-box w-11/12 max-w-5xl">
            <div>
                <img src={food.foodImage} alt={food.foodName} />
            </div>
          <div>
          <h2 className="card-title">Food Name: {food.foodName}</h2>
        <p>Quantity : {food.foodQuantity}</p>
        <p>Expired Date: {food.expiredDate}</p>
        <p>Donator Name: {food.name}</p>
        <p>Food Status : {food.status}</p>
        <p>Comment:{food.additionalNotes}</p>
          </div>
              <div className="modal-action ">
                <form method="dialog">
                    <input type="text"value={food.foodName} readOnly />
                    <input type="text"value={food.foodQuantity} readOnly />
                    <input type="text"value={food.expiredDate} readOnly />
                    <input type="text"value={food.name} readOnly />
                    <input type="text"value={food.status} readOnly />
                    <input type="text"value={food.additionalNotes}  />

                    <input type="text" value={note} onChange={(e)=>setNote(e.target.value)}/>
                  {/* if there is a button, it will close the modal */}
                  <button className="btn" onClick={update}>Request</button>
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
