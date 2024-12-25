import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import AuthContext from "../providers/AuthContext";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { use } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddsFood = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate()

  // form create start
  const handleAddFoods = (e) => {
    e.preventDefault();
    const form = e.target;

    const foodName = form.food_name.value;
    const foodImage = form.food_image.value;
    const expiredDate = startDate;
    const foodQuantity = form.food_quantity.value;
    const status = form.food_status.value;
    const additionalNotes = form.description.value;
    const name = user?.displayName;
    const image = user?.photoURL;
    const email = user?.email;
    const location = form.food_location.value

    const newfood = {
      foodName,
      foodImage,
      expiredDate,
      foodQuantity,
      location,
      status,
      additionalNotes,
      name,
      image,
      email,
    };

    const { data } = axios
      .post("http://localhost:5000/foods", newfood)
      .then((res) => {
        console.log("inserted data to db", res);
        toast.success('data added to db')
        navigate('/')

      });
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-md ">
        <h2 className="text-lg font-semibold text-gray-700 capitalize ">
          Post a Job
        </h2>

        <form onSubmit={handleAddFoods}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="food_name">
                Food Name
              </label>
              <input
                id="food_name"
                name="food_name"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="food_image">
                Food Image
              </label>
              <input
                id="food_image"
                type="url"
                name="food_image"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Expired Date/Time</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className="border p-2 rounded-md"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            {/* food quantity */}
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700 " htmlFor="food_quantity">
                Food Quantity
              </label>
              <input
                id="food_quantity"
                name="food_quantity"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            {/* location */}

            <div>
              <label className="text-gray-700 " htmlFor="food_location">
                Food Location
              </label>
              <input
                id="food_location"
                name="food_location"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            {/* food status */}
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700 " htmlFor="food_status">
                Food Status
              </label>
              <input
             
                defaultValue="available"
                id="food_status"
                name="food_status"
                type="text"
                
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
            </div>
          </div>

          {/* description */}
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700 " htmlFor="description">
              Additional Notes
            </label>
            <textarea
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              name="description"
              id="description"
            ></textarea>
          </div>
          <div className="flex justify-end mt-6">
            <button className="disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Add Foods
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddsFood;
