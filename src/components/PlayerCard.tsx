import React from 'react';
import { FaExchangeAlt } from 'react-icons/fa';
import { Button } from "@/components/ui/button";

// src/types.ts (or place inside PlayerComparison.tsx if preferred)
export interface PlayerData {
  id: string | number; 
  name: string;
  country: string;
  flagUrl: string;
  imageUrl: string;
  age: string;
  role: string;
  battingStyle: string;
  bowlingStyle: string;
}

interface PlayerCardProps {
  player: PlayerData;
  alignment?: 'left' | 'right'; 
  showSwapIcon?: boolean;
  swapHandler?: () => void;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  player,
  alignment = 'left', // Default to left alignment
  showSwapIcon = false,
  swapHandler,
}) => {
  if (!player) return null;

  // Determine flex direction based on alignment
  const headerDirection = alignment === 'left' ? 'flex-row' : 'flex-row-reverse';
  const countryDirection = alignment === 'left' ? 'flex-row' : 'flex-row-reverse';
  const detailsDirection = alignment === 'left' ? 'flex-row' : 'flex-row-reverse';
  const textAlign = alignment === 'left' ? 'text-left' : 'text-right';
  const itemsAlign = alignment === 'left' ? 'items-start' : 'items-end';
  const flagMargin = alignment === 'left' ? 'mr-2' : 'ml-2';
  const swapMargin = alignment === 'left' ? 'ml-2' : 'mr-2'; // Margin for swap icon relative to name

  return (
    // Player Card Container
    <div className={`flex-1 flex flex-col ${itemsAlign} min-w-[250px] px-4`}>

      {/* Player Header */}
      <div className={`flex items-center justify-center w-full mb-2 relative ${headerDirection}`}>
        <h2 className={`text-xl font-bold text-gray-100 mx-1 flex-grow ${textAlign}`}>
          {player.name}
        </h2>
        {/* {showSwapIcon && swapHandler && (
          <button
            onClick={swapHandler}
            className={`bg-transparent border-none text-blue-500 hover:text-blue-400 cursor-pointer text-2xl p-1 leading-none ${swapMargin}`}
            aria-label="Swap Players"
          >
            <FaExchangeAlt />
          </button>
        )} */}
      </div>

      {/* Player Country */}
      <div className={`flex items-center text-sm mb-4 text-gray-400 ${countryDirection}`}>
        <img
            src={player.flagUrl}
            alt={`${player.country} flag`}
            className={`w-12 h-auto border border-gray-600 ${flagMargin}`}
        />
        <span>{player.country}</span>
      </div>

      {/* Player Details (Image & Stats) */}
      <div className={`flex items-end w-full gap-4 ${detailsDirection}`}>
        {/* Player Image */}
        <div className="shrink-0 flex flex-col items-center">
          <img
              src={player.imageUrl}
              alt={player.name}
              className="w-24 h-24 md:w-48 md:h-48 rounded-full object-cover border-2 border-gray-600 mb-4"
          />
     <Button size="sm" className="bg-cricket-600 hover:bg-cricket-700">Choose Player</Button>
        </div>


        {/* Player Stats Values */}
        <div className={`flex flex-col gap-4 flex-grow mb-4 ${itemsAlign}`}>
          <div className={`text-base font-medium h-5 leading-5 text-gray-100 ${textAlign}`}>{player.age}</div>
          <div className={`text-base font-medium h-5 leading-5 text-gray-100 ${textAlign}`}>{player.role}</div>
          <div className={`text-base font-medium h-5 leading-5 text-gray-100 ${textAlign}`}>{player.battingStyle}</div>
          <div className={`text-base font-medium h-5 leading-5 text-gray-100 ${textAlign}`}>{player.bowlingStyle}</div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;