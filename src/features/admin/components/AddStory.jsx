import React from 'react'
import { TfiClose } from 'react-icons/tfi'

const AddStory = ({ onClose }) => {
  return (
    <div className='addStory absolute top-0 flex justify-center items-center h-[100vh]  w-full '>
          <form action="" className='w-[70%] mx-auto bg-white shadow z-10 px-4 py-5 rounded-md' style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }}>

              <div className="heading flex justify-between py-4  items-start ">
                  <h4 className="text-4xl">Add Story</h4>
                  <div onClick={onClose} className="close relative top-2 right-2 text-xl">
                  <TfiClose /> 
                  </div>
              </div>

              <div className="grid grid-cols-2 py-2 gap-2">
                  <div>
                      <label className="" for="bride">Bride Name</label>
                      <input id="bride" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]" placeholder='Enter Bride Name' />
                  </div>
                  <div>
                      <label className="" for="groom">Groom Name</label>
                      <input id="groom" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]" placeholder='Enter Groom Name' />
                  </div> 
              </div>
              <div className="grid grid-cols-1 py-2">
                  <div>
                      <label className="" for="newpassword">Add Image</label>
                      <input id="newpassword" type="file" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]" placeholder='Enter New Password' />
                  </div>
              </div>
              <div className="grid grid-cols-1 py-2">
                  <div>
                      <label className="" for="newpassword">Upload Video</label>
                      <input id="newpassword" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]" placeholder='Add Video URL' />
                  </div>
              </div>
              <div className="grid grid-cols-1 py-2">
                  <div>
                      <label className="" for="story">Describe Story</label>
                      <textarea rows={5} id="story" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]" placeholder='Describe Story' />
                  </div>
              </div>

              <div className="w-full mt-6">
                  <button className="px-6 py-2 w-full leading-5 text-white transition-colors duration-200 transform bg-[#BB1A04] rounded-md hover:bg-[#bb0404] focus:outline-none focus:bg-gray-600">Add Story</button>
              </div>


          </form>
    </div>
  )
}

export default AddStory
