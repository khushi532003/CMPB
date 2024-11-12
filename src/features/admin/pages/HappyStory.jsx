import React, { useEffect, useState } from 'react'
import { GoPlus } from 'react-icons/go'
import AddStory from '../components/AddStory';
import Table from '../components/Table';
import { useHappyStroyContext } from '@/AdminContext';
import Loader from '@/constant/loader';


const HappyStory = () => {
  const { happyStoryData, GetHappyStory, loader } = useHappyStroyContext();
  const [addStory, setAddStory] = useState(false);


  useEffect(() => {
    GetHappyStory();
  }, [])


  return (
    <div>
      <div className="HappyStories py-4 relative">
        <div className="stories">
          <div className="bg-white p-8 rounded-md w-full">
            <div className=" flex items-center justify-between pb-6">
              <div>
                <h3 className="text-gray-600 font-semibold text-3xl">Happy Stories</h3>
              </div>
              <div onClick={() => setAddStory(true)} className="px-4 py-1 text-white bg-RedTheme flex gap-1 items-center rounded-sm cursor-pointer"><GoPlus /> Add Story</div>
            </div>
            <div>
              {loader ? <Loader/> : <Table id={'S.N0.'} memeberName={"Groom name"} partnerName={"Bride  Name"} postTime={"Post Time"} actions={"Actions"} identifier={"happyStoryData"} data={happyStoryData} />}
            </div>
          </div>
        </div>
        {addStory ? <AddStory onClose={() => setAddStory(false)} /> : ""}
      </div>
    </div>
  )
}

export default HappyStory;