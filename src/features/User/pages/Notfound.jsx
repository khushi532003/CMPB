import React from 'react'
import { Link } from 'react-router-dom';

function Notfound() {
  return (
    <div>
      <div className="py-5 flex flex-col justify-center items-center h-[100vh]">
        <img className='w-[50%]' src="../images/error.jpg" alt="" />
              <Link to="/"><div className="px-5 py-2 mt-4 bg-RedTheme text-white rounded-full">Bring me back to home</div></Link>
      </div>
    </div>
  )
}

export default Notfound;