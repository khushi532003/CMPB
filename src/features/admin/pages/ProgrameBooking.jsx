import { useProgrammeContext } from '@/AdminContext';
import Loader from '@/constant/loader';
import { useAuthContext } from '@/context';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

function ProgrameBooking() {
  const { state } = useLocation();
  const { GetProgramme, page, setPage, disable, eventClints } = useProgrammeContext();
  const { token } = useAuthContext();


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  useEffect(() => {
    if (token) {
      GetProgramme(page);
    }
  }, [token, page])


  if (disable) return <Loader />;

  return (
    <div>
      <div className=" flex items-center justify-between pb-6">
        <div>
          <h3 className="text-gray-600 font-semibold text-3xl">Programme Booked</h3>
        </div>
      </div>

      <div className="flex  justify-center gap-16">
        <h4 className='text-xl py-2'><span className="text-2xl font-semibold">Event Name :</span> {state?.data?.eventName} </h4>
        <h4 className='text-xl py-2'><span className="text-2xl  font-semibold">Amount :</span> ₹{state?.data?.amount} </h4>
      </div>

      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
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
                  Profile
                </th>
                <th
                  className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Member Name
                </th>
                <th
                  className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Member ID
                </th>
                <th
                  className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Membership
                </th>
                <th
                  className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Email ID
                </th>
                <th
                  className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Mobile No.
                </th>
                <th
                  className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Date & Time
                </th>
              </tr>
            </thead>
            <tbody>
              {state?.data?.ClientDetails.map((item, i) => <tr key={i}>
                <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{i + 1}</p>
                </td>
                <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                  <img className='w-14 h-14 rounded-full object-cover' src={item?.
                    UserDetails?.profileImage} alt="" />
                </td>
                <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{item?.
                    UserDetails?.firstName}</p>
                </td>
                <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{item?.UserDetails?.MemberID}</p>
                </td>
                <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{item?.UserDetails?.RegisterPackage === "true" ? "Yes" : "No"}</p>
                </td>
                <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{item?.UserDetails?.email}</p>
                </td>
                <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{item?.UserDetails?.phone}</p>
                </td>
                <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{formatDate(item?.BookedOn)}</p>
                </td>
              </tr>)}
            </tbody>
          </table>
        </div>
      </div>

      <div className="pagination py-4 flex justify-center items-center gap-3">
        <button
          className="prev bg-RedTheme text-white px-4 py-1 rounded"
          disabled={disable || page === 1}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))} > Prev </button>
        <span className='list-none text-blue-600 text-md font-bold'>{page}</span>
        <button
          className="next bg-RedTheme text-white px-4 py-1 rounded"
          disabled={disable || eventClints?.length < 5}
          onClick={() => setPage((prev) => prev + 1)}>Next </button>
      </div>

    </div>
  )
}

export default ProgrameBooking;