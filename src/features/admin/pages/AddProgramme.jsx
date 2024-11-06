import React, { useState } from 'react'
import ProgrammeForm from '../components/ProgrammeForm'
import { LiaEdit } from 'react-icons/lia'
import { LuEye } from 'react-icons/lu'
import { GoPlus } from 'react-icons/go'
import Table from '../components/Table'

function AddProgramme() {
    const [addProgramme, setAddProgramme] = useState(false)
  return (
    <div>
          <div className="HappyStories py-4 relative">
              <div className="stories">
                  <div className="bg-white p-8 rounded-md w-full">
                      <div className=" flex items-center justify-between pb-6">
                          <div>
                              <h3 className="text-gray-600 font-semibold text-3xl"> Programme</h3>
                          </div>
                          <div onClick={() => setAddProgramme(true)} className="px-4 py-1 text-white bg-[#BB1A04] flex gap-1 items-center rounded-sm cursor-pointer"><GoPlus /> Add Programme</div>
                      </div>
                      <div>
                          <Table date={"Date"} venue={"Venue"} state={"State"} amount={"Amount Paid"} eventName={"Event Name"} description={"Description"} programme={"ryey"} />
                      </div>
                  </div>
              </div>
              {addProgramme ? <ProgrammeForm onClose={() => setAddProgramme(false)} /> : ""}
          </div>
    </div>
  )
}

export default AddProgramme