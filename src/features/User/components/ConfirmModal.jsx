    import React, { useState } from 'react';

    const ConfirmModal = ({ isOpen, onClose, onConfirm, message }) => {
        if (!isOpen) return null; // Don't render if the modal isn't open

        return (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <h4 className="text-lg font-semibold mb-4">{message}</h4>
                    <div className="flex justify-end space-x-4">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => {
                                onConfirm(); // Trigger the confirmation action
                                onClose();   // Close the modal
                            }}
                            className="px-4 py-2 bg-RedTheme text-white rounded-lg hover:bg-red-600"
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        );  
    };

    export default ConfirmModal;
