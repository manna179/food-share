import React from "react";

const ExtraSection = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl text-center font-bold mt-10">
          Together, we're building a better community.
        </h2>
        <p className=  "text-center text-gray-500">One meal at a time, one smile at a time</p>
      </div>
      <div className="hero bg-transparent ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-center">
            <h1 className="text-5xl font-bold">Learn about our work</h1>
            <p className="py-6">
            Whether it is supporting urban farms, subsidizing local produce markets or coordinating community kitchens, all of our work is about folks accessing food on their own terms.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <img className="bg-cover rounded-tr-3xl rounded-br-full" src="https://i.ibb.co.com/w4vdzK6/top-view-cooked-bell-peppers-with-different-seasonings-dark-grey-surface-food-dolma-vegetable-meal-b.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* second */}
      <div className="hero bg-transparent ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-center">
            <h1 className="text-5xl font-bold">Our impact</h1>
            <p className="py-6">
            Since 1980 Plate Share  has worked to address poverty and food insecurity in Bangladesh. Review our historical impact reports to learn more about what we’ve achieved and check out our latest report to find out how we are working alongside communities across Toronto on markets, learning, food growing and more to address the human right to food. 
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <img className="bg-cover rounded-tl-lg-md  rounded-bl-full" src="https://i.ibb.co.com/vJkp8rG/begging-bridge-with-person-who-handed-bread.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
