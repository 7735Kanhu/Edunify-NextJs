import RegisterForm from "@/components/RegisterForm";
import React from "react";

const CreateSchool = () => {
 

  return (
    <div className='w-full bg-[url("/assets/banner1.jpg")] bg-cover'>
      <div className="w-full h-full backdrop-blur-sm p-6 py-10">
        <div className="flex bg-white rounded-xl shadow-xl pt-4 w-3/4 mx-auto">
          <img
            src="/assets/stu1.png"
            alt="student"
            className="flex basis-2/4 h-2/4 w-14"
          />
          <div className="flex flex-col basis-2/4 px-4 gap-4">
            <h1 className="text-orange-600 font-extrabold text-3xl">
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
