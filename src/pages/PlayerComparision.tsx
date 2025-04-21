// src/pages/PlayerComparision.tsx

import React, { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button"; // Assuming Button component exists

import { Menu, X } from "lucide-react";
// --- DATA IMPORT ---
import { playersData, PlayerData, PlayerStats } from "@/data/playersData";

// --- COMPONENT IMPORT ---
import PlayerSelectionModal from "@/components/PlayerSelectionModal"; // Import the modal // <<<--- ADDED IMPORT
import { Link } from "react-router-dom";
import SortedPlayers from "@/components/SortedPlayers";

// --- TYPE DEFINITIONS ---
// (Interfaces PlayerData and PlayerStats are imported)

interface PlayerCardProps {
  player: PlayerData;
  alignment?: "left" | "right";
  // Add a function prop for handling "Choose Player" button click
  onChoosePlayerRequest: (side: "left" | "right") => void; // Changed prop name for clarity
}

interface PlayerStaticsCardProps {
  player1Stats: PlayerStats | undefined;
  player2Stats: PlayerStats | undefined;
  player1Name?: string;
  player2Name?: string;
}

interface StatRowProps {
  label: string;
  leftValue: string | number | undefined;
  rightValue: string | number | undefined;
}

// --- Valid Stats Keys Type ---
type PlayerStatsFormatKey = {
  [K in keyof PlayerData]: PlayerData[K] extends PlayerStats | undefined
    ? K
    : never;
}[keyof PlayerData];

// --- COMPONENT DEFINITIONS ---

// --- PlayerCard Component ---
const PlayerCard: React.FC<PlayerCardProps> = ({
  player,
  alignment = "left",
  onChoosePlayerRequest, // Use the new prop
}) => {
  if (!player) return null; // Handle case where player might be initially null if desired

  const headerDirection =
    alignment === "left" ? "flex-row" : "flex-row-reverse";
  const countryDirection =
    alignment === "left" ? "flex-row" : "flex-row-reverse";
  const detailsDirection =
    alignment === "left" ? "flex-row" : "flex-row-reverse";
  const textAlign = alignment === "left" ? "text-left" : "text-right";
  const itemsAlign = alignment === "left" ? "items-start" : "items-end";
  const flagMargin = alignment === "left" ? "mr-2" : "ml-2";

  return (
    <div className={`flex-1 flex flex-col ${itemsAlign} min-w-[250px] px-4`}>
      {" "}
      {/* Corrected className syntax */}
      {/* Player Header */}
      <div
        className={`flex items-center justify-center w-full mb-2 relative ${headerDirection}`}
      >
        {" "}
        {/* Corrected className syntax */}
        <h2
          className={`text-xl font-bold text-gray-100 mx-1 flex-grow ${textAlign}`}
        >
          {" "}
          {/* Corrected className syntax */}
          {player.name}
        </h2>
      </div>
      {/* Player Country */}
      <div
        className={`flex items-center text-sm mb-4 text-gray-400 ${countryDirection}`}
      >
        {" "}
        {/* Corrected className syntax */}
        <img
          src={player.flagUrl}
          alt={`${player.country} flag`}
          className={`w-8 h-auto border border-gray-600 ${flagMargin}`} // Corrected className syntax
        />
        <span>{player.country}</span>
      </div>
      {/* Player Details */}
      <div className={`flex items-end w-full gap-4 ${detailsDirection}`}>
        {" "}
        {/* Corrected className syntax */}
        {/* Player Image & Choose Button */}
        <div className="shrink-0 flex flex-col items-center">
          <img
            src={player.imageUrl}
            alt={player.name}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-gray-600 mb-4"
          />
          <Button
            size="sm"
            className="bg-cricket-600 hover:bg-cricket-700 text-white" // Added text-white for visibility
            onClick={() => onChoosePlayerRequest(alignment)} // Call the passed function with side
          >
            Choose Player
          </Button>
        </div>
        {/* Player Bio Values */}
        <div
          className={`flex flex-col gap-4 flex-grow mb-4 ${itemsAlign} pt-4`}
        >
          {" "}
          {/* Corrected className syntax */}
          <div
            className={`text-base font-medium h-5 leading-5 text-gray-100 ${textAlign}`}
          >
            {player.age || "--"}
          </div>{" "}
          {/* Corrected className syntax */}
          <div
            className={`text-base font-medium h-5 leading-5 text-gray-100 ${textAlign}`}
          >
            {player.role || "--"}
          </div>{" "}
          {/* Corrected className syntax */}
          <div
            className={`text-base font-medium h-5 leading-5 text-gray-100 ${textAlign}`}
          >
            {player.battingStyle || "--"}
          </div>{" "}
          {/* Corrected className syntax */}
          <div
            className={`text-base font-medium h-5 leading-5 text-gray-100 ${textAlign}`}
          >
            {player.bowlingStyle || "--"}
          </div>{" "}
          {/* Corrected className syntax */}
        </div>
      </div>
    </div>
  );
};

// --- StatRow Component ---
const StatRow: React.FC<StatRowProps> = ({
  label,
  leftValue = "--",
  rightValue = "--",
}) => {
  const safeLeftValue = typeof leftValue === "number" ? leftValue : -Infinity;
  const safeRightValue =
    typeof rightValue === "number" ? rightValue : -Infinity;
  const isLeftHigher = safeLeftValue > safeRightValue;
  const isRightHigher = safeRightValue > safeLeftValue;
  // Highlight only if both are numbers and not equal
  const showHighlight =
    typeof leftValue === "number" &&
    typeof rightValue === "number" &&
    leftValue !== rightValue;

  // Determine colors based on comparison logic (higher = green, lower = red, equal/non-numeric = gray)
  let leftBg = "bg-green-600";
  let rightBg = "bg-green-600";

  if (showHighlight) {
    leftBg = isLeftHigher ? "bg-green-600" : "bg-red-700";
    rightBg = isRightHigher ? "bg-green-600" : "bg-red-700";
  }

  const centerBg = "bg-[#1F2937]"; // bg-gray-800 equivalent

  return (
    <div className="flex w-full border-b border-gray-700 last:border-b-0">
      <div className={`w-1/3 p-3 flex justify-center items-center ${leftBg}`}>
        {" "}
        {/* Corrected className syntax */}
        <span className="text-white font-medium">{leftValue ?? "--"}</span>
      </div>
      <div className={`w-1/3 p-3 flex justify-center items-center ${centerBg}`}>
        {" "}
        {/* Corrected className syntax */}
        <span className="text-white font-medium text-center text-sm sm:text-base">
          {label}
        </span>
      </div>
      <div className={`w-1/3 p-3 flex justify-center items-center ${rightBg}`}>
        {" "}
        {/* Corrected className syntax */}
        <span className="text-white font-medium">{rightValue ?? "--"}</span>
      </div>
    </div>
  );
};

// --- PlayerStaticsCard Component ---
const PlayerStaticsCard: React.FC<PlayerStaticsCardProps> = ({
  player1Stats,
  player2Stats,
  // player1Name, // Not strictly needed if just showing stats
  // player2Name,
}) => {
  const p1s = player1Stats;
  const p2s = player2Stats;
  const p1PPV = p1s?.ppv ?? undefined; // Use undefined if stats don't exist
  const p2PPV = p2s?.ppv ?? undefined;

  // Determine PPV background, handling equality and undefined with gray
  let leftPPVBg = "bg-gray-700";
  let rightPPVBg = "bg-gray-700";

  if (typeof p1PPV === "number" && typeof p2PPV === "number") {
    if (p1PPV > p2PPV) {
      leftPPVBg = "bg-green-600";
      rightPPVBg = "bg-red-700";
    } else if (p2PPV > p1PPV) {
      leftPPVBg = "bg-red-700";
      rightPPVBg = "bg-green-600";
    }
    // If equal, they remain bg-gray-700
  }

  return (
    <div className="max-w-6xl mx-auto my-6 bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg">
      <div className="mb-6 text-white flex justify-center items-center">
        <h2 className="text-xl sm:text-2xl font-bold">
          Career Statistics Comparison
        </h2>
      </div>
      {/* Only show PPV section if at least one player has stats */}
      {(p1s || p2s) && (
        <div className="flex justify-around mb-6">
          <div
            className={`flex flex-col items-center justify-center p-4 rounded-md w-28 h-28 sm:w-32 sm:h-32 ${leftPPVBg}`}
          >
            {" "}
            {/* Corrected className syntax */}
            <span className="text-lg sm:text-xl text-white font-semibold">
              PPV
            </span>
            <span className="text-2xl sm:text-3xl text-white font-bold">
              {p1PPV ?? "--"}
            </span>
          </div>
          <div
            className={`flex flex-col items-center justify-center p-4 rounded-md w-28 h-28 sm:w-32 sm:h-32 ${rightPPVBg}`}
          >
            {" "}
            {/* Corrected className syntax */}
            <span className="text-lg sm:text-xl text-white font-semibold">
              PPV
            </span>
            <span className="text-2xl sm:text-3xl text-white font-bold">
              {p2PPV ?? "--"}
            </span>
          </div>
        </div>
      )}
      <div className="bg-gray-900 rounded-lg overflow-hidden">
        <StatRow
          label="Matches"
          leftValue={p1s?.matches}
          rightValue={p2s?.matches}
        />
        <StatRow
          label="Innings"
          leftValue={p1s?.innings}
          rightValue={p2s?.innings}
        />
        <StatRow label="Runs" leftValue={p1s?.runs} rightValue={p2s?.runs} />
        <StatRow
          label="Balls Played"
          leftValue={p1s?.ballsPlayed}
          rightValue={p2s?.ballsPlayed}
        />
        <StatRow
          label="Highest Score"
          leftValue={p1s?.highestScore}
          rightValue={p2s?.highestScore}
        />
        <StatRow
          label="Not Outs"
          leftValue={p1s?.notOuts}
          rightValue={p2s?.notOuts}
        />
        <StatRow
          label="Average"
          leftValue={p1s?.average}
          rightValue={p2s?.average}
        />
        <StatRow
          label="Strike Rate"
          leftValue={p1s?.strikeRate}
          rightValue={p2s?.strikeRate}
        />
        <StatRow
          label="50s"
          leftValue={p1s?.fifties}
          rightValue={p2s?.fifties}
        />
        <StatRow
          label="100s"
          leftValue={p1s?.hundreds}
          rightValue={p2s?.hundreds}
        />
        <StatRow
          label="Boundaries"
          leftValue={p1s?.boundaries}
          rightValue={p2s?.boundaries}
        />
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
const PlayerComparison: React.FC = () => {
  // Ensure initial players exist in the data
  const initialPlayer1 = playersData.find((p) => p.id === 1) || playersData[0];
  const initialPlayer2 = playersData.find((p) => p.id === 2) || playersData[1];

  const [player1, setPlayer1] = useState<PlayerData>(initialPlayer1);
  const [player2, setPlayer2] = useState<PlayerData>(initialPlayer2);

  const [statsFormatKey, setStatsFormatKey] =
    useState<PlayerStatsFormatKey>("t20i_stats");

  // State for modal visibility and target side
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectingPlayerSide, setSelectingPlayerSide] = useState<
    "left" | "right" | null
  >(null);

  const handleSwap = () => {
    setPlayer1(player2);
    setPlayer2(player1);
  };

  const handleFormatChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // Ensure the selected value is a valid key before setting state
    const selectedKey = event.target.value;
    const validKeys: PlayerStatsFormatKey[] = ["t20i_stats", "odi_stats"]; // Add 'test_stats' etc. if available
    if (validKeys.includes(selectedKey as PlayerStatsFormatKey)) {
      setStatsFormatKey(selectedKey as PlayerStatsFormatKey);
    }
  };

  // Function to open the modal
  const handleChoosePlayerRequest = (side: "left" | "right") => {
    setSelectingPlayerSide(side);
    setIsModalOpen(true);
  };

  // Function to handle player selection from modal
  const handlePlayerSelect = (selectedPlayerId: PlayerData["id"]) => {
    const newlySelectedPlayer = playersData.find(
      (p) => p.id.toString() === selectedPlayerId.toString()
    ); // Compare as strings for safety

    if (newlySelectedPlayer && selectingPlayerSide) {
      if (selectingPlayerSide === "left") {
        setPlayer1(newlySelectedPlayer);
      } else {
        setPlayer2(newlySelectedPlayer);
      }
    }
    setIsModalOpen(false); // Close modal after selection
    setSelectingPlayerSide(null); // Reset target side
  };

  // Get the correct stats object based on the selected format key
  // Use optional chaining and nullish coalescing for safety
  const player1CurrentStats = player1?.[statsFormatKey] ?? undefined;
  const player2CurrentStats = player2?.[statsFormatKey] ?? undefined;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    // <<<--- WRAP EVERYTHING IN A FRAGMENT OR DIV IF NEEDED --- >>>
    <>
      {/* <<<--- RENDER THE HEADER AT THE TOP --- >>> */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b">
        {/* Container for content alignment and padding */}
        <div className="container flex items-center justify-between h-16 px-4 md:px-6 mx-auto">
          {" "}
          {/* Added mx-auto to center container */}
          {/* Logo/Brand Name */}
          <div className="flex items-center gap-2">
            {/* Make sure you have 'cricket-600' defined in your tailwind.config.js */}
            <Link to="/">
              <span className="text-cricket-600 font-bold text-2xl cursor-pointer">
                InsightPro
              </span>
            </Link>
          </div>
          {/* Desktop Navigation (Hidden on small screens) */}
          {/* <nav className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className="text-sm font-medium hover:text-cricket-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium hover:text-cricket-600 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium hover:text-cricket-600 transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium hover:text-cricket-600 transition-colors"
            >
              Pricing
            </a>
          </nav> */}
          {/* Desktop Action Buttons (Hidden on small screens) */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              size="sm"
              className="bg-cricket-600 hover:bg-cricket-700 text-white"
            >
              Log out
            </Button>{" "}
            {/* Added text-white for visibility */}
          </div>
          {/* Mobile Menu Button (Visible only on small screens) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggles the mobile menu state
            className="md:hidden p-2" // Hidden on medium screens and up
            aria-label="Toggle menu"
          >
            {/* Shows X icon when menu is open, Menu icon when closed */}
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu (Conditionally rendered based on state) */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b pb-4">
            {" "}
            {/* Hidden on medium screens and up */}
            <nav className="flex flex-col space-y-4 px-6 pt-2 pb-4">
              {/* Links close the menu when clicked */}
              {/* <a
                href="#features"
                className="text-sm font-medium hover:text-cricket-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-medium hover:text-cricket-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="text-sm font-medium hover:text-cricket-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium hover:text-cricket-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a> */}
              {/* Mobile Action Buttons */}
              <div className="flex flex-col space-y-2 pt-2 border-t mt-2">
                {" "}
                {/* Added border-t and mt-2 */}
                <Button
                  size="sm"
                  className="bg-cricket-600 hover:bg-cricket-700 text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log out
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-6">
        {/* Top Section: Player Bios */}
        <div className="flex justify-around items-start bg-gray-800 text-gray-300 p-6 md:p-8 rounded-lg max-w-6xl mx-auto mb-6 font-sans shadow-lg relative">
          <PlayerCard
            player={player1}
            alignment="left"
            onChoosePlayerRequest={handleChoosePlayerRequest} // Pass the handler
          />
          {/* Central Column */}
          <div className="flex flex-col items-center justify-start pt-10 sm:pt-4 px-3 sm:px-5 gap-4 text-center font-semibold text-gray-400 shrink-0">
            {/* Swap button positioned centrally */}
            <button
              onClick={handleSwap}
              className="absolute top-4 right-1/2 translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 z-10 shadow-md"
              aria-label="Swap Players"
              title="Swap Players"
            >
              <FaExchangeAlt className="text-xl" />
            </button>
            {/* Vertical spacer to push labels down */}
            <div className="h-16 sm:h-24"></div> {/* Adjust height as needed */}
            {/* Bio Labels */}
            <div className="text-sm h-5 leading-5 min-h-[20px]">Age</div>
            <div className="text-sm h-5 leading-5 min-h-[20px]">Role</div>
            <div className="text-sm h-5 leading-5 min-h-[20px]">
              Batting Style
            </div>
            <div className="text-sm h-5 leading-5 min-h-[20px]">
              Bowling Style
            </div>
          </div>
          <PlayerCard
            player={player2}
            alignment="right"
            onChoosePlayerRequest={handleChoosePlayerRequest} // Pass the handler
          />
        </div>

        {/* Format Selector Dropdown */}
        <div className="max-w-6xl mx-auto my-4 flex justify-center sm:justify-end">
          <div className="flex items-center gap-2">
            <label
              htmlFor="statsFormat"
              className="text-sm font-medium text-gray-800"
            >
              Select Format:
            </label>
            <select
              id="statsFormat"
              value={statsFormatKey}
              onChange={handleFormatChange}
              className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2.5 shadow" // Adjusted width
            >
              {/* Filter available formats based on whether *any* player has data for it */}
              {/* Or just list all potential formats */}
              <option value="t20i_stats">T20I</option>
              <option value="odi_stats">ODI</option>
              {/* Add other format options here if needed */}
              {/* <option value="test_stats">Test</option> */}
            </select>
          </div>
        </div>

        {/* Bottom Section: Player Statistics */}
        <PlayerStaticsCard
          player1Stats={player1CurrentStats}
          player2Stats={player2CurrentStats}
          // No need to pass names if they aren't used in the card
        />

        {/* Player Selection Modal */}
        {/* Render the modal conditionally */}
        <PlayerSelectionModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectingPlayerSide(null);
          }}
          onPlayerSelect={handlePlayerSelect}
          currentPlayer1Id={player1.id}
          currentPlayer2Id={player2.id}
          targetSide={selectingPlayerSide!} // Use non-null assertion as it's set when modal opens
        />
      </div>
      <SortedPlayers/>
    </> // <<<--- CLOSE FRAGMENT --- >>>
  );
};

export default PlayerComparison;
