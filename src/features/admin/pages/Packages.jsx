import React, { useState } from 'react'
import ProgrammeForm from '../components/ProgrammeForm';
import RegistrationAmtForm from '../components/RegistrationAmtForm';
import { GoPlus } from 'react-icons/go';
import { useProgrammeContext } from '@/AdminContext';
import { LiaEdit } from 'react-icons/lia';


const Packages = () => {

  const { programmeData, packageData } = useProgrammeContext();
  const [eventId, setEventId] = useState(null);


  const [addProgramme, setAddProgramme] = useState(false);
  const [addAmount, setAddAmount] = useState(false);



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
                <div onClick={() => { setAddProgramme(true) 
                  setEventId({new:"new"})
                }} className="px-4 py-1 text-white bg-[#BB1A04] flex gap-1 items-center rounded-sm cursor-pointer"><GoPlus /> Add Event</div>
              </div>
            </div>
            <div>
              <h4 className="text-gray-600 font-semibold text-xl"> Registration Amount</h4>

              <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table class="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th
                          class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                          S.No.
                        </th>

                        <th
                          class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                          Amount
                        </th>

                        <th
                          class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                          <p class="text-gray-900 whitespace-no-wrap">1</p>
                        </td>

                        <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                          <p class="text-gray-900 whitespace-no-wrap">₹{packageData?.amount}</p>
                        </td>

                        <td class="px-5  py-2  border-gray-200 bg-white text-lg">
                          <span onClick={() => setAddAmount(true)}
                            className="relative  bg-blue-400 rounded-full w-10 h-10 flex items-center px-3 py-1 font-semibold text-white">
                            <LiaEdit />
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>


              <h4 className="text-gray-600 font-semibold text-xl"> Events</h4>
              <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table class="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th
                          class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                          S.No.
                        </th>
                        <th
                          class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                          Date
                        </th>
                        <th
                          class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                          Venue
                        </th>
                        <th
                          class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                          State
                        </th>
                        <th
                          class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                          Event Name
                        </th>
                        <th
                          class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                          Amount
                        </th>
                        <th
                          class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                          Description
                        </th>
                        <th
                          class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {programmeData?.map((item) => <tr key={item?._id}>
                        <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                          <p class="text-gray-900 whitespace-no-wrap">1</p>
                        </td>
                        <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                          <p class="text-gray-900 whitespace-no-wrap">{item?.createdAt}</p>
                        </td>
                        <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                          <p class="text-gray-900 whitespace-no-wrap">{item?.venues}</p>
                        </td>
                        <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                          <p class="text-gray-900 whitespace-no-wrap">{item?.state}</p>
                        </td>
                        <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                          <p class="text-gray-900 whitespace-no-wrap">{item?.eventName}</p>
                        </td>
                        <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                          <p class="text-gray-900 whitespace-no-wrap">₹{item?.amount}</p>
                        </td>
                        <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                          <p class="text-gray-900 whitespace-no-wrap">{item?.description}</p>
                        </td>
                        <td class="px-5  py-2  border-gray-200 bg-white text-lg">
                          <span onClick={() => { setAddProgramme(true) 
                            setEventId(item)
                          }}
                            className="relative  bg-blue-400 rounded-full w-10 h-10 flex items-center px-3 py-1 font-semibold text-white">
                            <LiaEdit />
                          </span>

                        </td>
                      </tr>)}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {addProgramme ? <ProgrammeForm Event={eventId} onClose={() => setAddProgramme(false)} /> : ""}
        {addAmount ? <RegistrationAmtForm onClose={() => setAddAmount(false)} /> : ""}
      </div>
    </div>
  )
}

export default Packages