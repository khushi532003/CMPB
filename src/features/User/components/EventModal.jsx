import React from 'react'
import { TfiClose } from 'react-icons/tfi'

function EventModal({ onClose }) {
    const scrollToSection = () => {
        const section = document.getElementById("packages");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
  return (
   <div className="fixed w-[50%] top-[30%] left-[25%] z-50">
          <div className="bg-white rounded-lg p-6 text-center bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url(https://www.shutterstock.com/shutterstock/photos/2011911779/display_1500/stock-vector-pastel-cyan-mint-liquid-marble-watercolor-background-with-gold-lines-and-brush-stains-teal-2011911779.jpg)"}} >
              <div onClick={onClose} className="close w-full flex justify-end text-xl">
                  <TfiClose />
              </div>
            <div className="logo w-full flex justify-center">
                <img className='w-20' src="./images/logo.png" alt="" />
            </div>
              <p className="text-xs sm:text-[15px] py-3">If you looking for a lifetime relationship for <strong>yourself or your daughter/son, divorcees/ widows, </strong>and you are too aged and want to get married or anyone else seeking a chance to connect with their life partner. Here, Chat Mangni Pat Byah providing some of the upcoming programs for you. Enroll in this program for lifelong marriage security. The enrollment process is simple just click below on “Enroll Now” to find a wonderful life partner and build strong, meaningful relationships rooted in Vedic rituals. If you are seeking a lifelong partnership, Chat Mangni Pat Byah warmly welcomes you.</p>

              <button onClick={() => {
                  onClose();
                  scrollToSection();
              }} className='text-white bg-RedTheme px-5 py-1 rounded-sm'>Enroll now</button>
        </div>
   </div>
  )
}

export default EventModal
