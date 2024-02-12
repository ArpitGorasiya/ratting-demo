import React, { useState } from "react";
import jsonData from "../../data.json";
import { getLoginData, getUserDetails } from "../../utils";
import Card from "../Card";

const List = () => {
  const setData = getUserDetails() ? JSON.parse(getUserDetails()) : jsonData;
  const [users, setUsers] = useState(setData);

  const loginUser = getLoginData();
  const filteredData = users.filter(
    (user) => user.userName !== loginUser.userName
  );

  const handleSubmit = (userData, starCount) => {
    const setStar = users?.map((x) => {
      if (x.userName === userData.userName) {
        x.ratting = starCount;
      }
      return x;
    });
    setUsers(setStar);
    localStorage.setItem("userDetails", JSON.stringify(setStar));
  };

  return (
    <div className="p-4 flex gap-10">
      {filteredData.map((user) => (
        <div key={user.id} className="flex justify-center items-center">
          <Card userData={user} handleSubmit={handleSubmit} />
        </div>
      ))}
    </div>
  );
};

export default List;
