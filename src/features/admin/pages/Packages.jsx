import React, { useState } from 'react'
import Table from '../components/Table';
import ProgrammeForm from '../components/ProgrammeForm';
import RegistrationAmtForm from '../components/RegistrationAmtForm';
import { GoPlus } from 'react-icons/go';
import { useProgrammeContext } from '@/AdminContext';

const Packages = () => {

  const { programmeData } = useProgrammeContext();
  console.log(programmeData);


  const [addProgramme, setAddProgramme] = useState(false)
  const [addAmount, setAddAmount] = useState(false)

  return (
    <div>
      <div className="py-4 relative">
        <div className="events">
          <div className="bg-white p-8 rounded-md w-full">
            <div className=" flex items-center justify-between pb-6">
              <div>
                <h3 className="text-gray-600 font-semibold text-3xl"> Add Packages</h3>
              </div>
              <div className="flex gap-2">
                <div onClick={() => setAddAmount(true)} className="px-4 py-1 text-white bg-[#BB1A04] flex gap-1 items-center rounded-sm cursor-pointer"><GoPlus /> Add Registration Amount</div>
                <div onClick={() => setAddProgramme(true)} className="px-4 py-1 text-white bg-[#BB1A04] flex gap-1 items-center rounded-sm cursor-pointer"><GoPlus /> Add Event</div>
              </div>
            </div>
            <div>
              <h4 className="text-gray-600 font-semibold text-xl"> Registration Amount</h4>

              <Table id={"S.no"} amount={'Amount Paid'} identifier={"register"} actions={"Actions"} register={"kjdzhfkjes"} />
              <h4 className="text-gray-600 font-semibold text-xl">Current Event</h4>

              <Table id={"S.no"} date={"Date"} venue={"Venue"} state={"State"} amount={"Amount Paid"} eventName={"Event Name"} description={"Description"} identifier={"programme"} actions={"Actions"} data={programmeData} />
            </div>
          </div>
        </div>
        {addProgramme ? <ProgrammeForm onClose={() => setAddProgramme(false)} /> : ""}
        {addAmount ? <RegistrationAmtForm onClose={() => setAddAmount(false)} /> : ""}
      </div>
    </div>
  )
}

export default Packages