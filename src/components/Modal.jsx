import React from 'react';

const Modal = ({ isOpen, onClose, onConfirm, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 text-black">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 flex flex-col gap-2">
        <div className="">
          <h2 className="text-left text-xl font-medium">{title}</h2>
        </div>
        <div className="text-left leading-5 text-zinc-500 font-normal">
          <p>{message}</p>
        </div>
        <div className="flex justify-end gap-2 mt-2">
          <button
            className="col-span-2 bg-white text-zinc-900 border border-zinc-200 inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-sm h-9 px-4 py-2 hover:bg-zinc-100"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="col-span-2 bg-green-400 text-green-950 inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-sm h-9 px-4 py-2 hover:bg-green-500"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
