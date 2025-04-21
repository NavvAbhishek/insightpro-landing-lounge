// src/components/PlayerSelectionModal.tsx
import React, { useState, useEffect } from 'react';
import { PlayerData, playersData } from '@/data/playersData';
import { Button } from "@/components/ui/button";

interface PlayerSelectionModalProps {
    isOpen: boolean;
    onClose: () => void;
    onPlayerSelect: (playerId: PlayerData['id']) => void;
    currentPlayer1Id: PlayerData['id'];
    currentPlayer2Id: PlayerData['id'];
    targetSide: 'left' | 'right'; // Which player card are we updating?
}

const PlayerSelectionModal: React.FC<PlayerSelectionModalProps> = ({
    isOpen,
    onClose,
    onPlayerSelect,
    currentPlayer1Id,
    currentPlayer2Id,
    targetSide,
}) => {
    const [selectedPlayerId, setSelectedPlayerId] = useState<PlayerData['id'] | ''>('');

    // Reset selection when modal opens or target side changes
    useEffect(() => {
        if (isOpen) {
            // Pre-select the current player for the target side
            setSelectedPlayerId(targetSide === 'left' ? currentPlayer1Id : currentPlayer2Id);
        } else {
            setSelectedPlayerId(''); // Clear selection when closed
        }
    }, [isOpen, targetSide, currentPlayer1Id, currentPlayer2Id]);


    if (!isOpen) return null;

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedPlayerId(event.target.value);
    };

    const handleConfirm = () => {
        if (selectedPlayerId !== '') {
            onPlayerSelect(selectedPlayerId);
            onClose(); // Close modal after selection
        }
    };

    // Determine which player ID to disable in the dropdown
    // Disable the player currently shown on the *other* card
    const disabledPlayerId = targetSide === 'left' ? currentPlayer2Id : currentPlayer1Id;

    return (
        // Basic Modal Structure (you might want a more robust library like Radix UI Dialog)
        <div
            className="fixed inset-0 bg-black bg-opacity-60 z-40 flex justify-center items-center p-4"
            onClick={onClose} // Close on backdrop click
        >
            <div
                className="bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-sm"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
                <h2 className="text-xl font-semibold text-white mb-4 text-center">
                    Choose Player {targetSide === 'left' ? '1' : '2'}
                </h2>

                <select
                    value={selectedPlayerId}
                    onChange={handleSelectChange}
                    className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4 shadow"
                >
                    <option value="" disabled>-- Select a Player --</option>
                    {playersData.map((player) => (
                        <option
                            key={player.id}
                            value={player.id}
                            disabled={player.id === disabledPlayerId} // Disable player on the other card
                            className={player.id === disabledPlayerId ? "text-gray-500" : ""}
                        >
                            {player.name}
                        </option>
                    ))}
                </select>

                <div className="flex justify-end gap-3">
                    <Button
                        variant="outline" // Assuming you have variants defined in Button component
                        onClick={onClose}
                        className="border-gray-500 text-gray-300 hover:bg-gray-700"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleConfirm}
                        disabled={!selectedPlayerId} // Disable confirm if no player is selected
                        className="bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50"
                    >
                        Confirm
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PlayerSelectionModal;