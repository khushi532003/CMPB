import React from 'react'

function DeleteAccount() {
  return (
      <div style={{ backgroundImage: "url(https://www.shutterstock.com/shutterstock/photos/1881715708/display_1500/stock-vector-blush-pink-watercolor-fluid-painting-vector-design-card-dusty-rose-and-golden-marble-geode-frame-1881715708.jpg"}}>
        <div className='pt-24'>
          <div className="py-5  w-[50%]  bg-white mx-auto border border-yellow-600 px-10 pt-24 rounded-t-full">
              <div className="heading flex justify-center flex-col items-center text-center">
                  <h3 className="text-7xl">Delete Account</h3>
                  <img src="../images/headingImg.png" alt="" className="w-64" />
              </div>

              <div className="layout ">
                  <form action="">
                      
                      <div class="grid grid-cols-1 py-2">
                          <div>
                              <label class="" for="username">Email ID</label>
                              <input id="email" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]" placeholder='Email' />
                          </div>
                      </div>
                      <div class="grid grid-cols-1 py-2">
                          <div>
                              <label class="" for="password">Password</label>
                              <input id="password" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]" placeholder='Enter Password' />
                          </div>
                      </div>
                     
                      <div class="w-full mt-6">
                          <button class="px-6 py-2 w-full leading-5 text-white transition-colors duration-200 transform bg-[#BB1A04] rounded-md hover:bg-[#bb0404] focus:outline-none focus:bg-gray-600">Delete Account</button>
                      </div>


                  </form>
              </div>
      </div>
          </div>
    </div>
  )
}

export default DeleteAccount
