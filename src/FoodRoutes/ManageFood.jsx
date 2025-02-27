import React, { useState } from "react";
import { useGetFood } from "../hooks/food";
import { useAuth } from "../hooks/useAuth";
import axios from "axios";
import ErrorPage from "../Pages/ErrorPage";
import { MdOutlineDeleteForever } from "react-icons/md";

const ManageFood = () => {
  const { user } = useAuth();
  const { data, refetch } = useGetFood({ email: user?.email });

  const handleDelete = async (id) => {
    const { data } = await axios.delete(`https://plate-share-server.vercel.app/foods/${id}`);
  
   refetch()

    ////
  };

  const handleUpdateStatus = async (e, id) => {
    console.log(e.target.value, id);
    const info = {
      status: e.target.value,
    };
    const { data } = await axios.patch(
      `https://plate-share-server.vercel.app/foods/${id}`,
      info
    );
   
  };

 
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>NAME</th>
            <th>Owner Name</th>
            <th>UPDATE</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {data && data.length > 0 ? (
            <>
              {data.map((food) => (
                <tr key={food._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={food.foodImage}
                            alt={food.name}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{food.foodName}</div>
                        <div className="text-sm opacity-50">{food.location}</div>
                      </div>
                    </div>
                  </td>
                  <td >
                   {food.name}
                  </td>
                  <td>
                    <select
                      onChange={(e) => {
                        handleUpdateStatus(e, food._id);
                      }}
                      defaultValue={food.status || "change Status"}
                      name="status"
                      id=""
                    >
                      <option disabled value="">
                        Change Status
                      </option>
                      <option value="available">available</option>
                      <option value="requested">requested</option>
                    </select>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(food._id)}
                      className="btn btn-ghost btn-xs"
                    >
                  <MdOutlineDeleteForever className="text-2xl text-red-500"/>
                    </button>
                  </th>
                </tr>
              ))}
            </>
          ) : (
            <>
              <ErrorPage></ErrorPage>
            </>
          )}
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
};

export default ManageFood;
