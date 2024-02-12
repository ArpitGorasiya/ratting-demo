/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Rating from "../Rating";

const Card = ({ userData, handleSubmit }) => {
  return (
    <div className="block rounded-lg bg-white flex shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mt-14">
      <div className="max-w-xs">
        <div className="relative aspect-w-1 aspect-h-1">
          <img
            src={userData.image}
            className="rounded-full p-6 w-56 h-56"
            alt="User Image"
          />
        </div>
      </div>
      <div className="max-w-xs p-6">
        <h5 className="border-b-2 border-neutral-100 mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {userData.firstName} {userData.lastName}
        </h5>
        <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
          Age: {userData.age}
        </p>
        <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
          Gender: {userData.gender}
        </p>
        <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
          Email: {userData.email}
        </p>
        <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
          Phone: {userData.phone}
        </p>
        <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
          Address: {userData.address}
        </p>
        <div className="pt-3 pb-3">
          <Rating userData={userData} handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Card;
