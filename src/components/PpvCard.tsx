import React, { useState } from 'react';

const PpvCard: React.FC = () => {
  const [format, setFormat] = useState('ODI'); // State to manage format

  const handleFormatChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormat(event.target.value); // Update the format when a new one is selected
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-lg shadow-lg mt-6 w-full max-w-6xl mx-auto">
      {/* Dropdown for format */}
      <div className="mb-6 text-white">
        <label htmlFor="format" className="block text-sm font-semibold">
          Select Format
        </label>
        <select
          id="format"
          value={format}
          onChange={handleFormatChange}
          className="bg-green-500 text-white py-2 px-4 rounded-md mt-2"
        >
          <option value="ODI">ODI</option>
          <option value="T20">T20</option>
        </select>
      </div>

      {/* PPV Boxes */}
      <div className="flex justify-around w-full">
        <div className="flex flex-col items-center justify-center bg-green-500 text-white p-6 rounded-md w-32 h-32">
          <span className="text-xl font-semibold">PPV</span>
          <span className="text-3xl font-bold">1.50</span>
        </div>
        <div className="flex flex-col items-center justify-center bg-red-500 text-white p-6 rounded-md w-32 h-32">
          <span className="text-xl font-semibold">PPV</span>
          <span className="text-3xl font-bold">1.25</span>
        </div>
      </div>
    </div>
  );
};

export default PpvCard;
