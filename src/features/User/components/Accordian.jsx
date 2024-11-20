import React from 'react'
import { IoIosArrowDown } from "react-icons/io";


function Accordian({ title, children, isOpen, onToggle }) {

    return (
        <div>
            <div className="border-b">
                <button
                    className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
                    onClick={onToggle}
                >
                    <span className="font-semibold text-[#BB1A04]">{title}</span>
                    <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                        <IoIosArrowDown />
                    </span>
                </button>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
                >
                    <div className="p-4">{children}</div>
                </div>
            </div>
        </div>
    )
}

export default Accordian;
