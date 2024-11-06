import React, { useState } from 'react'
import { GoPlus } from 'react-icons/go'
import { LiaEdit } from 'react-icons/lia'
import { LuEye } from "react-icons/lu";
import AddStory from '../components/AddStory';
import Table from '../components/Table';

const HappyStory = () => {
  const [addStory, setAddStory] = useState(false)
  return (
    <div>
      <div className="HappyStories py-4 relative">
        <div className="stories">
          <div className="bg-white p-8 rounded-md w-full">
            <div className=" flex items-center justify-between pb-6">
              <div>
                <h3 className="text-gray-600 font-semibold text-3xl">Happy Stories</h3>
              </div>
              <div onClick={() => setAddStory(true)} className="px-4 py-1 text-white bg-[#BB1A04] flex gap-1 items-center rounded-sm cursor-pointer"><GoPlus /> Add Story</div>
            </div>
            <div>
              <Table id={'S.N0.'} memeberName={"Member Name"} partnerName={"Partner Name"} postTime={"Post Time"} show={"Show"} actions={"Actions"} identifier={"happystory"} story={"sklfjoeaif"} />
             
            </div>
          </div>
        </div>
        {addStory ? <AddStory onClose={() => setAddStory(false)} /> : ""}
      </div>
    </div>
  )
}

export default HappyStory;