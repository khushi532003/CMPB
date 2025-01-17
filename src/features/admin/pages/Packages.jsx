import React, { useEffect, useState } from 'react'
import ProgrammeForm from '../components/ProgrammeForm';
import RegistrationAmtForm from '../components/RegistrationAmtForm';
import { GoPlus } from 'react-icons/go';
import { useProgrammeContext } from '@/AdminContext';
import { LiaEdit } from 'react-icons/lia';
import { FaEye } from 'react-icons/fa';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Loader from '@/constant/loader';
import { useAuthContext } from '@/context';

const Packages = () => {

  const { programmeData, packageData, GetProgramme, loader, page, setPage, disable } = useProgrammeContext();
  const [eventId, setEventId] = useState(null);
  const [regId, setRegId] = useState(null);
  const { userData } = useAuthContext();
  const { id } = useParams()
  const navigate = useNavigate();
  const location = useLocation()



  const [addProgramme, setAddProgramme] = useState(false);
  const [addAmount, setAddAmount] = useState(false);

  useEffect(() => {
    if (userData?.token) {
      GetProgramme(page);
    }
  }, [userData?.token, page])

  const eventUserData = async (id, data) => {
    navigate(`/programme-booking/${id}`, { state: { data } })
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return (
    <div>
      <div className="py-4 relative">
        <div className="events">
          <div className="bg-white p-8 rounded-md w-full">
            <div className=" flex items-center justify-between pb-6">
              <div>
                <h3 className="text-gray-600 font-semibold text-3xl"> Add Packages Amount</h3>
              </div>
              <div className="flex gap-2">

                <div onClick={() => {
                  setAddAmount(true)
                  setRegId({ regNew: "regNew" })
                }}
                  className="px-4 py-1 text-white bg-RedTheme flex gap-1 items-center rounded-sm cursor-pointer"><GoPlus /> Add Registration Amount</div>

                <div onClick={() => {
                  setAddProgramme(true)
                  setEventId({ new: "new" })
                }} className="px-4 py-1 text-white bg-RedTheme flex gap-1 items-center rounded-sm cursor-pointer"><GoPlus /> Add Event</div>
              </div>
            </div>
            <div>
              <h4 className="text-gray-600 font-semibold text-xl"> Registration Amount</h4>

              {loader ? <Loader /> : <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th
                          className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                          S.No.
                        </th>
                        <th
                          className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                          Amount
                        </th>
                        <th
                          className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">1</p>
                        </td>

                        <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">₹{packageData?.amount}</p>
                        </td>

                        <td className="px-5  py-2  border-gray-200 bg-white text-sm">
                          <span onClick={() => {
                            setAddAmount(true)
                            setRegId(packageData)
                          }}
                            className="relative cursor-pointer bg-blue-400 rounded-full w-10 h-10 flex items-center px-3 py-1 font-semibold text-white">
                            <LiaEdit />
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>}

              <h4 className="text-gray-600 font-semibold text-xl"> Events</h4>
              {loader ? <Loader /> : <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th
                          className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                          S.No.
                        </th>
                        <th
                          className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                          Date
                        </th>
                        <th
                          className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                          Venue
                        </th>
                        <th
                          className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                          State
                        </th>
                        <th
                          className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                          Event Name
                        </th>
                        <th
                          className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                          Amount
                        </th>
                        <th
                          className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                          Description
                        </th>
                        <th
                          className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {programmeData?.map((item, i) =>
                        <tr key={item?._id}>
                          <td className="px-5 py-2  border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{i + 1}</p>
                          </td>
                          <td className="px-5 py-2 text-sm border-b border-gray-200 bg-white ">
                            <p className="text-gray-900 whitespace-no-wrap">{formatDate(item?.availableDates)}</p>
                          </td>
                          <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{item?.venues}</p>
                          </td>
                          <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{item?.state}</p>
                          </td>
                          <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{item?.eventName}</p>
                          </td>
                          <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">₹{item?.amount}</p>
                          </td>
                          <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{item?.description}</p>
                          </td>
                          <td className="px-5 flex gap-2 py-2  border-gray-200 bg-white text-sm">
                            <span onClick={() => {
                              setAddProgramme(true)
                              setEventId(item)
                            }}
                              className="relative cursor-pointer bg-blue-400 rounded-full w-10 h-10 flex items-center px-3 py-1 font-semibold text-white">
                              <LiaEdit />
                            </span>
                            <span onClick={() => eventUserData(item?._id, item)}
                              className="relative cursor-pointer bg-green-400 rounded-full w-10 h-10 flex items-center px-3 py-1 font-semibold text-white">
                              <FaEye />
                            </span>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>}

              <div className="pagination py-4 flex justify-center items-center gap-3">
                <button
                  className="prev bg-RedTheme text-white px-4 py-1 rounded"
                  disabled={disable || page === 1}
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))} > Prev </button>
                <span className='list-none text-blue-600 text-md font-bold'>{page}</span>
                <button
                  className="next bg-RedTheme text-white px-4 py-1 rounded"
                  disabled={disable || programmeData?.length < 5}
                  onClick={() => setPage((prev) => prev + 1)}>Next </button>
              </div>

            </div>
          </div>
        </div>
        {addProgramme ? <ProgrammeForm Event={eventId} onClose={() => setAddProgramme(false)} /> : ""}
        {addAmount ? <RegistrationAmtForm RegEvent={regId} onClose={() => setAddAmount(false)} /> : ""}
      </div>



    </div >
  )
}

export default Packages;