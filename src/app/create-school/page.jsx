import RegisterForm from "@/components/RegisterForm";
import React from "react";

const CreateSchool = () => {
 

  return (
    <div className='w-full bg-[url("/assets/banner1.jpg")] bg-cover'>
      <div className="w-full h-full backdrop-blur-sm p-6 py-10">
        <div className="flex bg-white rounded-xl shadow-xl pt-4 w-3/4 mx-auto flex-col align-middle items-center gap-3 md:flex-row">
          <img
            src="/assets/stu1.png"
            alt="student"
            className="flex basis-2/4 h-2/4 md:w-14 w-56"
          />
          <div className="flex flex-col basis-2/4 px-4 gap-4">
            <h1 className="text-orange-600 font-extrabold md:text-3xl text-xl">
              Register Your School Here
            </h1>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSchool;
