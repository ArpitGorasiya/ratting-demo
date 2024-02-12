import React from "react";

const ConfirmModal = ({
  isOpenConfirmModal,
  closeConfirmModal,
  value,
}) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${
        !isOpenConfirmModal && "hidden"
      }`}
    >
      <div className="bg-white w-96 mx-auto mt-80 p-6 rounded-md">
        <div className="flex justify-end">
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={closeConfirmModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="text-center">
          <div className="text-2xl mb-4">
            Ratting: {value} has been submit successfully
          </div>
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            onClick={closeConfirmModal}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
