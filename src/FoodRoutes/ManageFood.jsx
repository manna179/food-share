import React, { useState } from "react";
import { useGetFood } from "../hooks/food";
import { useAuth } from "../hooks/useAuth";
import axios from "axios";

const ManageFood = () => {
  const { user } = useAuth();
  const { data, refetch } = useGetFood({ email: user?.email });

  const handleDelete = (id) => {
    
    ////
  };

  const handleUpdateStatus = async(e, id) => {
    console.log(e.target.value, id);
    const info = {
      status: e.target.value,
    };
    const {data}=await axios.patch(`http://localhost:5000/foods/${id}`,info)
    console.log(data);
   
  };

  console.log(data);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>NAME</th>
            <th>Job</th>
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
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
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
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}
            </>
          ) : (
            <></>
          )}
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
};

export default ManageFood;
