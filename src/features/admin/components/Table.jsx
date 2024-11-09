import { useAdminContactContext, useChurayeHuePalContext, useHappyStroyContext } from '@/AdminContext';
import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { LiaEdit } from 'react-icons/lia';
import { LuEye } from 'react-icons/lu';

function Table(props) {
    console.log("props is ", props?.data);
    const { DeleteVideo } = useChurayeHuePalContext();
    const { DeleteQuery } = useAdminContactContext();
    const { DeleteHappyStory } = useHappyStroyContext();


    return (
        <div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    {props?.id}
                                </th>
                                {
                                    props?.identifier === "members" &&
                                    <>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                            {props?.profileImage}
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                            {props?.memeberName}
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                            {props?.memberId}
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                            {props?.detail}
                                        </th>
                                    </>
                                }
                                {
                                    props?.identifier === "bookProgram" && <>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                            {props?.profile}
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                            {props?.memeberName}
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                            {props?.memberId}
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                            {props?.Membership}
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                            {props?.price}
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                            {props?.email}
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                            {props?.phone}
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                            {props?.dateTime}
                                        </th>
                                    </>
                                }

                                {props?.identifier === "register" && <>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        {props?.amount}
                                    </th>

                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        {props?.actions}
                                    </th>
                                </>
                                }

                                {props?.link && <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    {props?.link}
                                </th>
                                }
                                {props?.identifier === "video" && <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    {props?.action}
                                </th>
                                }
                                {props?.identifier === "happyStoryData" && <>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        {props?.memeberName}
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        {props?.partnerName}
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        {props?.postTime}
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        {props?.actions}
                                    </th>
                                </>}
                                {props?.identifier === "contact" && <>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        {props?.name}
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        {props?.email}
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        {props?.phone}
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        {props?.message}
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        {props?.action}
                                    </th>
                                </>}

                            </tr>
                        </thead>
                        <tbody>
                            { props?.data && props?.data?.map((item, i) => (
                                <tr key={i}>
                                    <td className="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                        <p className="text-gray-900 whitespace-no-wrap">{i + 1}</p>
                                    </td>
                                    {props?.identifier === "members" &&
                                        <><td className="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                            <img className='w-14 h-14 rounded-full object-cover' src={item?.profileImage?.ImageURL} alt="" />
                                        </td>
                                            <td className="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                <p className="text-gray-900 text-sm capitalize whitespace-no-wrap"> {item?.firstName}</p>
                                            </td>
                                            <td className="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                    {item?.MemberID}
                                                </p>
                                            </td>
                                        </>
                                    }

                                    {props?.identifier === "video" && <> <td className="px-5  py-2 border-b border-gray-200 bg-white text-lg">
                                        <p className="text-gray-900  text-sm whitespace-no-wrap">
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
                                    {props?.identifier === "contact" && <> <td className="px-5  py-2 border-b border-gray-200 bg-white text-lg">
                                        <p className="text-gray-900  text-sm whitespace-no-wrap">
                                            {item?.name}
                                        </p>
                                    </td>
                                        <td className="px-5  py-2 border-b border-gray-200 bg-white text-lg">
                                            <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                {item?.email}
                                            </p>
                                        </td>
                                        <td className="px-5  py-2 border-b border-gray-200 bg-white text-lg">
                                            <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                {item?.phone}
                                            </p>
                                        </td>
                                        <td className="px-5  py-2 border-b border-gray-200 bg-white text-lg">
                                            <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                {item?.message}
                                            </p>
                                        </td>
                                        <td className="px-5 py-2 border-b flex gap-1 border-gray-200 bg-white text-lg">
                                            <button onClick={() => DeleteQuery(item?._id)}
                                                className="relative cursor-pointer bg-RedTheme rounded-full w-10 h-10 flex items-center px-3 py-1 font-semibold text-white">
                                                <FaTrash />
                                            </button>

                                        </td>
                                    </>}
                                    {props?.identifier === "bookProgram" && item?.users && item?.users?.map((user, i) => <React.Fragment key={i}> <td className="px-5  py-2 border-b border-gray-200 bg-white text-lg">
                                        <img src={user?.profileImage?.ImageURL} alt="" />
                                    </td>
                                        <td className="px-5  py-2 border-b border-gray-200 bg-white text-lg">
                                            <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                {user?.firstName}
                                            </p>
                                        </td>
                                        <td className="px-5  py-2 border-b border-gray-200 bg-white text-lg">
                                            <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                {user?.firstName}
                                            </p>
                                        </td>
                                        <td className="px-5  py-2 border-b border-gray-200 bg-white text-lg">
                                            <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                {user?.RegisterPackage}
                                            </p>
                                        </td>
                                        <td className="px-5  py-2 border-b border-gray-200 bg-white text-lg">
                                            <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                {item?.amount}
                                            </p>
                                        </td>
                                        <td className="px-5  py-2 border-b border-gray-200 bg-white text-lg">
                                            <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                {user?.email}
                                            </p>
                                        </td>
                                        <td className="px-5  py-2 border-b border-gray-200 bg-white text-lg">
                                            <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                {user?.phone}
                                            </p>
                                        </td>
                                        <td className="px-5  py-2 border-b border-gray-200 bg-white text-lg">
                                            <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                {user?.phone}
                                            </p>
                                        </td>

                                    </React.Fragment>)}
                                    {props?.identifier === "happystory" && <> <td className="px-5  py-2 border-b border-gray-200 bg-white text-lg">
                                        <p className="text-gray-900  text-sm whitespace-no-wrap">
                                            {item?.Groom}
                                        </p>
                                    </td>
                                        <td className="px-5  py-2 border-b border-gray-200 bg-white text-lg">
                                            <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                {item?.Bride}
                                            </p>
                                        </td>
                                        <td className="px-5  py-2 border-b border-gray-200 bg-white text-lg">
                                            <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                {item?.Content}
                                            </p>
                                        </td>
                                        <td className="px-5  py-2 border-b border-gray-200 bg-white text-lg">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                <label className="inline-flex items-center cursor-pointer">
                                                    <input type="checkbox" value="" className="sr-only peer" />
                                                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-green-500 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-red-600"></div>
                                                </label>
                                            </p>
                                        </td>
                                        <td className="px-5  py-2 border-b border-gray-200 bg-white text-lg">
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
                                                {formatDate(item?.createdAt)}
                                            </p>
                                        </td>

                                        <td class="px-5  py-2 border-b border-gray-200 flex gap-2 bg-white text-lg">
                                            <span type='button'
                                                className="relative bg-blue-400 rounded-full w-10 h-10 flex items-center px-3 py-1 font-semibold text-white">
                                                <LiaEdit />
                                            </span>
                                            <span type='button' onClick={() => DeleteHappyStory(item?._id)}
                                                className="relative bg-RedTheme rounded-full w-10 h-10 flex items-center px-3 py-1 font-semibold text-white">
                                                <FaTrash />
                                            </span>
                                        </td>
                                    </>}

                                    {props?.identifier === "register" && <>
                                        <td class="px-5  py-2 border-b border-gray-200 bg-white text-lg">
                                            <p class="text-gray-900  text-sm whitespace-no-wrap">
                                                {item?.amount}651
                                            </p>
                                        </td>

                                        <td class="px-5  py-2 border-b border-gray-200 bg-white text-lg flex gap-2">
                                            <span
                                                className="relative cursor-pointer bg-blue-400 rounded-full w-10 h-10 flex items-center px-3 py-1 font-semibold text-white">
                                                <LiaEdit />
                                            </span>

                                        </td>



                                    </>}
                                    {/* <td className="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            <label className="inline-flex items-center cursor-pointer">
                                                <input type="checkbox" value="" className="sr-only peer" />
                                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-green-500 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-red-600"></div>
                                            </label>
                                        </p>
                                    </td> */}
                                    {
                                        props?.identifier === 'members' && <td className="px-5 py-2 border-b border-gray-200 bg-white text-lg">

                                            <span
                                                className=" bg-[#BB1A04] rounded-full   px-3 py-1 text-sm text-white">
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
        </div >
    )
}

export default Table;   