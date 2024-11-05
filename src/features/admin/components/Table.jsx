import React from 'react'
import { LiaEdit } from 'react-icons/lia'
import { LuEye } from 'react-icons/lu'

function Table(props) {
    console.log("props is ", props);
    console.log(props?.data);


    return (
        <div>
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    {props?.id}
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    {props?.profileImage}
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    {props?.memeberName}
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    {props?.memberId}
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    {props?.detail}
                                </th>

                                {props?.abc && <th
                                >
                                    <span class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        {props?.abc}</span>
                                </th>}

                            </tr>
                        </thead>
                        <tbody>
                            {props?.data && props?.data?.map((item, i) => (
                                <tr key={i}>
                                    <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                        <p class="text-gray-900 whitespace-no-wrap">{i+1}</p>
                                    </td>
                                    <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                        <img className='w-16 h-16 rounded-full object-cover' src={item?.profileImage?.ImageURL} alt="" />
                                    </td>
                                    <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                        <p class="text-gray-900 capitalize whitespace-no-wrap"> {item?.firstName}</p>
                                    </td>
                                    <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            {item?.MemberID}
                                        </p>
                                    </td>
                                    {/* <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            <label class="inline-flex items-center cursor-pointer">
                                                <input type="checkbox" value="" class="sr-only peer" />
                                                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-green-500 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-red-600"></div>
                                            </label>
                                        </p>
                                    </td> */}
                                    <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">

                                        <span
                                            class=" bg-[#BB1A04] rounded-full   px-3 py-1 text-sm text-white">
                                            View Details
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table
