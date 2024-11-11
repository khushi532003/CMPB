import React, { useEffect, useState } from 'react'
import Table from '../components/Table'
import { useProgrammeContext } from '@/AdminContext'
import { useParams } from 'react-router-dom';

function ProgrameBooking() {

  const { GetBookedEvent } = useProgrammeContext()

  const [eventUserData, setEventUserData] = useState(null)
  const { id } = useParams();


  useEffect(() => {
    if (id) {
      GetBookedEvent(id).then(res => setEventUserData(res))
    }
  }, [id])


  console.log(eventUserData);
  return (
    <div>
      <div className=" flex items-center justify-between pb-6">
        <div>
          <h3 className="text-gray-600 font-semibold text-3xl">Programme Booked</h3>
        </div>
      </div>     

      <div className="flex  justify-center gap-16">
        <h4 className='text-xl py-2'><span className="text-2xl font-semibold">Event Name :</span> {eventUserData?.eventName} </h4>
        <h4 className='text-xl py-2'><span className="text-2xl  font-semibold">Amount :</span> ₹{eventUserData?.amount} </h4>
      </div>

      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                  S.No.
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Profile
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Member Name
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Member ID
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Membership
                </th>
                
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Email ID
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Mobile No.
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Date & Time
                </th>
              </tr>
            </thead>
            <tbody>
              {eventUserData?.users?.map((item, i)=> <tr  key={i}>
                <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                  <p class="text-gray-900 whitespace-no-wrap">{i + 1}</p>
                </td>
                <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                  <img className='w-14 h-14 rounded-full' src={item?.profileImage?.ImageURL} alt="" />
                </td>
                <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                  <p class="text-gray-900 whitespace-no-wrap">{item?.firstName}</p>
                </td>
                <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                  <p class="text-gray-900 whitespace-no-wrap"></p>
                </td>
                <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                  <p class="text-gray-900 whitespace-no-wrap">{item?.RegisterPackage === "true" ? "Yes" : "No" }</p>
                </td>
              
                <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                  <p class="text-gray-900 whitespace-no-wrap">{item?.email}</p>
                </td>
                <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                  <p class="text-gray-900 whitespace-no-wrap">{item?.phone}</p>
                </td>
              
              </tr>) }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ProgrameBooking
