import { useChurayeHuePalContext } from '@/AdminContext';
import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { LiaEdit } from 'react-icons/lia';
import { LuEye } from 'react-icons/lu';

function Table(props) {
    console.log("props is ", props?.data);
    const { DeleteVideo } = useChurayeHuePalContext();


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
                                {
                                    props?.identifier === "members" &&
                                    <>
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

                                    </>
                                }
                                {
                                    props?.identifier === "bookProgram" && <>
                                        {props?.abc && <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                            {props?.Membership}
                                        </th>
                                        }

                                        {props?.abc && <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                            {props?.price}
                                        </th>
                                        }
                                        {props?.abc && <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                            {props?.dateTime}
                                        </th>
                                        }

                                    </>
                                }
                                {props?.programme && <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    {props?.date}
                                </th>
                                }
                                {props?.programme && <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    {props?.venue}
                                </th>
                                }
                                {props?.programme && <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    {props?.state}
                                </th>
                                }
                                {props?.programme && <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    {props?.amount}
                                </th>
                                }
                                {props?.programme && <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    {props?.eventName}
                                </th>
                                }
                                {props?.programme && <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    {props?.description}
                                </th>
                                }
                                {props?.link && <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    {props?.link}
                                </th>
                                }
                                {props?.identifier === "video" && <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    {props?.action}
                                </th>
                                }
                                {props?.identifier === "happyStoryData" && <>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        {props?.partnerName}
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        {props?.postTime}
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        {props?.show}
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        {props?.actions}
                                    </th>
                                </>}


                            </tr>
                        </thead>
                        <tbody>
                            {props?.data && props?.data?.map((item, i) => (
                                <tr key={i}>
                                    <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                        <p class="text-gray-900 whitespace-no-wrap">{i + 1}</p>
                                    </td>
                                    {props?.identifier === "members" &&
                                        <><td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                            <img className='w-14 h-14 rounded-full object-cover' src={item?.profileImage?.ImageURL} alt="" />
                                        </td>
                                            <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                <p class="text-gray-900 text-sm capitalize whitespace-no-wrap"> {item?.firstName}</p>
                                            </td>
                                            <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                <p class="text-gray-900  text-sm whitespace-no-wrap">
                                                    {item?.MemberID}
                                                </p>
                                            </td></>
                                    }

                                    {props?.identifier === "video" && <> <td class="px-5  py-2 border-b border-gray-200 bg-white text-lg">
                                        <p class="text-gray-900  text-sm whitespace-no-wrap">
                                            {item?.VideoURL}
                                        </p>
                                    </td>
                                        <td className="px-5 py-2 border-b flex gap-1 border-gray-200 bg-white text-lg">
                                            <button onClick={() => DeleteVideo(item?._id)}
                                                className="relative cursor-pointer bg-RedTheme rounded-full w-10 h-10 flex items-center px-3 py-1 font-semibold text-white">
                                                <FaTrash />
                                            </button>

                                        </td>
                                    </>}
                                    {props?.identifier === "happyStoryData" && <> <td class="px-5  py-2 border-b border-gray-200 bg-white text-lg">
                                        <p class="text-gray-900  text-sm whitespace-no-wrap">
                                            {item?.Groom}
                                        </p>
                                    </td>
                                        <td class="px-5  py-2 border-b border-gray-200 bg-white text-lg">
                                            <p class="text-gray-900  text-sm whitespace-no-wrap">
                                                {item?.Bride}
                                            </p>
                                        </td>
                                        <td class="px-5  py-2 border-b border-gray-200 bg-white text-lg">
                                            <p class="text-gray-900  text-sm whitespace-no-wrap">
                                                {item?.Content}
                                            </p>
                                        </td>
                                        <td class="px-5  py-2 border-b border-gray-200 bg-white text-lg">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                <label class="inline-flex items-center cursor-pointer">
                                                    <input type="checkbox" value="" class="sr-only peer" />
                                                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-green-500 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-red-600"></div>
                                                </label>
                                            </p>
                                        </td>
                                        <td class="px-5  py-2 border-b border-gray-200 bg-white text-lg">
                                            <span
                                                className="relative bg-blue-400 rounded-full w-10 h-10 flex items-center px-3 py-1 font-semibold text-white">
                                                <LiaEdit />
                                            </span>
                                            <span
                                                className="relative bg-green-400 rounded-full w-10 h-10 flex items-center px-3 py-1 font-semibold text-white">
                                                <LuEye />
                                            </span>
                                        </td>

                                    </>}
                                    {/* <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            <label class="inline-flex items-center cursor-pointer">
                                                <input type="checkbox" value="" class="sr-only peer" />
                                                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-green-500 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-red-600"></div>
                                            </label>
                                        </p>
                                    </td> */}
                                    {
                                        props?.identifier === 'members' && <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">

                                            <span
                                                class=" bg-[#BB1A04] rounded-full   px-3 py-1 text-sm text-white">
                                                View Details
                                            </span>
                                        </td>
                                    }
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
