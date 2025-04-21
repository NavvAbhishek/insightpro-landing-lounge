import React, { useState } from "react";
import { PlayerStats } from "@/data/playersData";

interface PlayerStaticsCardProps {
  player1Stats: PlayerStats;
  player2Stats: PlayerStats;
}

const PlayerStaticsCard: React.FC<PlayerStaticsCardProps> = ({
  player1Stats,
  player2Stats,
}) => {
  const [format, setFormat] = useState("ODI"); // State to manage format

  const handleFormatChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormat(event.target.value); // Update the format when a new one is selected
  };

  return (
    <div className="max-w-6xl mx-auto my-6 bg-gray-800 rounded-lg p-6 shadow-lg">
      {/* Dropdown for format */}
      <div className="mb-6 text-white flex justify-between items-center">
        <h2 className="text-2xl font-bold">Player Statistics</h2>
        <div>
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
      </div>

      {/* PPV Boxes */}
      <div className="flex justify-around mb-6">
        {/* Left PPV Box */}
        <div
          className={`flex flex-col items-center justify-center p-6 rounded-md w-32 h-32 ${
            player1Stats.ppv > player2Stats.ppv ? "bg-green-600" : "bg-red-700"
          }`}
        >
          <span className="text-xl text-white font-semibold">PPV</span>
          <span className="text-3xl text-white font-bold">{player1Stats.ppv}</span>
        </div>

        {/* Right PPV Box */}
        <div
          className={`flex flex-col items-center justify-center p-6 rounded-md w-32 h-32 ${
            player2Stats.ppv > player1Stats.ppv ? "bg-green-600" : "bg-red-700"
          }`}
        >
          <span className="text-xl text-white font-semibold">PPV</span>
          <span className="text-3xl text-white font-bold">{player2Stats.ppv}</span>
        </div>
      </div>

      {/* Statistics comparison table */}
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        {/* Each row represents a stat comparison */}
        <StatRow
          label="Matches"
          leftValue={player1Stats.matches}
          rightValue={player2Stats.matches}
        />
        <StatRow
          label="Innings"
          leftValue={player1Stats.innings}
          rightValue={player2Stats.innings}
        />
        <StatRow
          label="Runs"
          leftValue={player1Stats.runs}
          rightValue={player2Stats.runs}
        />
        <StatRow
          label="Balls Played"
          leftValue={player1Stats.ballsPlayed}
          rightValue={player2Stats.ballsPlayed}
        />
        <StatRow
          label="Highest Score"
          leftValue={player1Stats.highestScore}
          rightValue={player2Stats.highestScore}
        />
        <StatRow
          label="Not Outs"
          leftValue={player1Stats.notOuts}
          rightValue={player2Stats.notOuts}
        />
        <StatRow
          label="Strike Rate"
          leftValue={player1Stats.strikeRate}
          rightValue={player2Stats.strikeRate}
        />
        <StatRow
          label="Average"
          leftValue={player1Stats.average}
          rightValue={player2Stats.average}
        />
        <StatRow
          label="50s"
          leftValue={player1Stats.fifties}
          rightValue={player2Stats.fifties}
        />
        <StatRow
          label="100s"
          leftValue={player1Stats.hundreds}
          rightValue={player2Stats.hundreds}
        />
        <StatRow
          label="Boundaries"
          leftValue={player1Stats.boundaries}
          rightValue={player2Stats.boundaries}
        />
      </div>
    </div>
  );
};

// Component for individual stat row
interface StatRowProps {
  label: string;
  leftValue: string | number;
  rightValue: string | number;
}

const StatRow: React.FC<StatRowProps> = ({ label, leftValue, rightValue }) => {
  // Determine which value is higher for highlighting
  const isLeftHigher =
    typeof leftValue == "number" &&
    typeof rightValue == "number" &&
    leftValue > rightValue;
  const isRightHigher =
    typeof leftValue == "number" &&
    typeof rightValue == "number" &&
    rightValue > leftValue;

  return (
    <div className="flex w-full border-b border-gray-700 last:border-b-0">
      {/* Left value */}
      <div
        className={`w-1/3 p-3 flex justify-center items-center ${
          isLeftHigher ? "bg-green-600" : "bg-red-700"
        }`}
      >
        <span className="text-white font-medium">{leftValue}</span>
      </div>

      {/* Center label */}
      <div className="w-1/3 p-3 flex justify-center items-center bg-[#1F2937]">
        <span className="text-white font-medium">{label}</span>
      </div>

      {/* Right value */}
      <div
        className={`w-1/3 p-3 flex justify-center items-center ${
          isRightHigher ? "bg-green-600" : "bg-red-700"
        }`}
      >
        <span className="text-white font-medium">{rightValue}</span>
      </div>
    </div>
  );
};

export default PlayerStaticsCard;
