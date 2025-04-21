import React, { useMemo } from 'react';
import { playersData } from '../data/playersData'; // Adjust path if necessary

// Helper type for sorted player data
interface SortedPlayerInfo {
    id: string | number;
    name: string;
    ppv: number;
    imageUrl: string; // We ensure this is a number after filtering
}

const SortedPlayers: React.FC = () => {
    // Process and sort T20I players
    const sortedT20iPlayers = useMemo(() => {
        return playersData
            .filter(player => typeof player.t20i_stats.ppv === 'number') // Filter out non-numeric values
            .sort((a, b) => (b.t20i_stats.ppv as number) - (a.t20i_stats.ppv as number)) // Sort descending
            .map(player => ({ // Map to simpler structure
                id: player.id,
                name: player.name,
                ppv: player.t20i_stats.ppv as number,
                 imageUrl: player.imageUrl // Type assertion is safe here due to filter
            }));
    }, []); // Dependency array is empty as playersData is static import

    // Process and sort ODI players
    const sortedOdiPlayers = useMemo(() => {
        return playersData
            .filter(player => typeof player.odi_stats.ppv === 'number') // Filter out non-numeric or "-"
            .sort((a, b) => (b.odi_stats.ppv as number) - (a.odi_stats.ppv as number)) // Sort descending
            .map(player => ({ // Map to simpler structure
                id: player.id,
                name: player.name,
                ppv: player.odi_stats.ppv as number ,
                 imageUrl: player.imageUrl// Type assertion is safe here due to filter
            }));
    }, []); // Dependency array is empty as playersData is static import

    // Function to determine background color intensity based on index and total count
    const getGradientClass = (index: number, totalCount: number) => {
        if (index === 0) return "bg-green-500"; // Highest PPV
        if (index === totalCount - 1) return "bg-white"; // Last player

        const gradientStep = Math.floor((index / (totalCount - 1)) * 10);
        switch (gradientStep) {
            case 0: return "bg-green-500";
            case 1: return "bg-green-400";
            case 2: return "bg-green-300";
            case 3: return "bg-green-200";
            case 4: return "bg-green-100";
            case 5: return "bg-green-50";
            case 6: return "bg-slate-100";
            case 7: return "bg-slate-50";
            case 8: return "bg-white";
            default: return "bg-white";
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-6xl w-full">
                <div className="flex flex-wrap font-sans">
                    {/* T20I List */}
                    <div className="border border-gray-300 p-4 m-2 rounded-lg flex-1 min-w-64">
                        <h2 className="text-center text-xl mt-3 mb-4">T20I PPV Ranking</h2>
                        <ol className="list-none p-0">
                            {sortedT20iPlayers.map((player, index) => (
                                <li
                                    key={player.id}
                                    className={`mb-2 pb-2 border-b border-dashed border-gray-200 flex justify-between ${getGradientClass(index, sortedT20iPlayers.length)} rounded-md px-2 py-1`}
                                >
                                    <div className="flex items-center">
                                        {/* Player Image */}
                                        <img
                                            src={player.imageUrl} // Display the player's image
                                            alt={player.name}
                                            className="w-9 h-9 rounded-full mr-3" // Style the image as a small round icon
                                        />
                                        <span className="font-bold mr-2 min-w-6 text-right inline-block">{index + 1}.</span>
                                        {player.name}
                                    </div>
                                    <span className="font-bold ml-2 text-blue-800">{player.ppv.toFixed(2)}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* ODI List */}
                    <div className="border border-gray-300 p-4 m-2 rounded-lg flex-1 min-w-64">
                        <h2 className="text-center mt-3 text-xl mb-4">ODI PPV Ranking</h2>
                        <ol className="list-none p-0">
                            {sortedOdiPlayers.map((player, index) => (
                                <li
                                    key={player.id}
                                    className={`mb-2 pb-2 border-b border-dashed border-gray-200 flex justify-between ${getGradientClass(index, sortedOdiPlayers.length)} rounded-md px-2 py-1`}
                                >
                                    <div className="flex items-center">
                                        {/* Player Image */}
                                        <img
                                            src={player.imageUrl} // Display the player's image
                                            alt={player.name}
                                            className="w-9 h-9 rounded-full mr-3" // Style the image as a small round icon
                                        />
                                        <span className="font-bold mr-2 min-w-6 text-right inline-block">{index + 1}.</span>
                                        {player.name}
                                    </div>
                                    <span className="font-bold ml-2 text-blue-800">{player.ppv.toFixed(2)}</span>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SortedPlayers;
