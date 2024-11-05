import React from 'react'

function DeleteAccount() {
  return (
      <div style={{ backgroundImage: "url(https://www.shutterstock.com/shutterstock/photos/1881715708/display_1500/stock-vector-blush-pink-watercolor-fluid-painting-vector-design-card-dusty-rose-and-golden-marble-geode-frame-1881715708.jpg"}}>
        <div className='py-10'>
          <div className="py-5 w-[95%]  sm:w-[50%]  bg-white mx-auto border border-yellow-600 px-10 pt-24 rounded-t-full">
              <div className="heading flex justify-center flex-col items-center text-center">
                  <h3 className="text-5xl sm:text-7xl">Deactivate Account</h3>
                  <img src="../images/headingImg.png" alt="" className="w-64" />
              </div>

              <div className="layout ">
                  <form action="">
                      
                      <div className="grid grid-cols-1 py-2">
                          <div>
                              <label className="" htmlFor="username">Email ID</label>
                              <input id="email" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]" placeholder='Email' />
                          </div>
                      </div>
                      <div className="grid grid-cols-1 py-2">
                          <div>
                              <label className="" htmlFor="password">Password</label>
                              <input id="password" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]" placeholder='Enter Password' />
                          </div>
                      </div>
                     
                      <div className="w-full mt-6">
                          <button className="px-6 py-2 w-full leading-5 text-white transition-colors duration-200 transform bg-[#BB1A04] rounded-md hover:bg-[#bb0404] focus:outline-none focus:bg-gray-600">Deactivate Account</button>
                      </div>


                  </form>
              </div>
      </div>
          </div>
    </div>
  )
}

export default DeleteAccount
