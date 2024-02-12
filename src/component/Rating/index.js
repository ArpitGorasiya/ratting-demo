import React, { useState } from "react";
import ConfirmModal from "../ConfirmModal";
import Stars from "../Stars";

const Rating = ({ userData, handleSubmit }) => {
  const [isOpenConfirmModal, setModalOpen] = useState(false);

  const handleStarClick = (value) => {
    handleSubmit(userData, value);
    setModalOpen(true);
  };

  const closeConfirmModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex">
      <Stars handleStarClick={handleStarClick} value={userData?.ratting} />
      <ConfirmModal
        isOpenConfirmModal={isOpenConfirmModal}
        closeConfirmModal={closeConfirmModal}
        value={userData?.ratting}
        disableHover
      />
    </div>
  );
};

export default Rating;
