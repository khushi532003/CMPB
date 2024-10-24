import React from 'react'
import { FaTrash } from 'react-icons/fa'

function MyInterest() {
    return (
        <div>
            <div className="MyInterest py-8 mt-20">

                <div className="ineterests">
                    <div class="bg-white p-8 rounded-md w-full">
                        <div class=" flex items-center justify-between pb-6">
                            <div>
                                <h3 class="text-gray-600 font-semibold text-3xl">My Interests</h3>
                            </div>

                        </div>
                        <div>
                            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                    <table class="min-w-full leading-normal">
                                        <thead>
                                            <tr>
                                                <th
                                                    class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                    ID
                                                </th>
                                                <th
                                                    class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                    Profile
                                                </th>
                                                <th
                                                    class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                    Name
                                                </th>
                                                <th
                                                    class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                    Age
                                                </th>

                                                <th
                                                    class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                    <p class="text-gray-900 whitespace-no-wrap">1</p>
                                                </td>
                                                <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                    <div class="flex items-center">
                                                        <div class="flex-shrink-0 w-16 h-16">
                                                            <img class="w-full h-full rounded-full"
                                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                                alt="" />
                                                        </div>

                                                    </div>
                                                </td>
                                                <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                    <p class="text-gray-900 whitespace-no-wrap"> <strong>Shreya</strong> </p>
                                                </td>
                                                <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                    <p class="text-gray-900 whitespace-no-wrap">
                                                        27
                                                    </p>
                                                </td>

                                                <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                    <span
                                                        class="relative inline-block px-3 py-1 font-semibold text-gray-700 leading-tight">
                                                        <FaTrash />
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                    <p class="text-gray-900 whitespace-no-wrap">1</p>
                                                </td>
                                                <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                    <div class="flex items-center">
                                                        <div class="flex-shrink-0 w-16 h-16">
                                                            <img class="w-full h-full rounded-full"
                                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                                alt="" />
                                                        </div>

                                                    </div>
                                                </td>
                                                <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                    <p class="text-gray-900 whitespace-no-wrap"> <strong>Shreya</strong> </p>
                                                </td>
                                                <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                    <p class="text-gray-900 whitespace-no-wrap">
                                                        27
                                                    </p>
                                                </td>

                                                <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                    <span
                                                        class="relative inline-block px-3 py-1 font-semibold text-gray-700 leading-tight">
                                                        <FaTrash />
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                    <p class="text-gray-900 whitespace-no-wrap">1</p>
                                                </td>
                                                <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                    <div class="flex items-center">
                                                        <div class="flex-shrink-0 w-16 h-16">
                                                            <img class="w-full h-full rounded-full"
                                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                                alt="" />
                                                        </div>

                                                    </div>
                                                </td>
                                                <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                    <p class="text-gray-900 whitespace-no-wrap"> <strong>Shreya</strong> </p>
                                                </td>
                                                <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                    <p class="text-gray-900 whitespace-no-wrap">
                                                        27
                                                    </p>
                                                </td>

                                                <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                    <span
                                                        class="relative inline-block px-3 py-1 font-semibold text-gray-700 leading-tight">
                                                        <FaTrash />
                                                    </span>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                    <div
                                        class="px-5 py-2 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                        <span class="text-xs xs:text-lg text-gray-900">
                                            Showing 1 to 4 of 50 Entries
                                        </span>
                                        <div class="inline-flex mt-2 xs:mt-0">
                                            <button
                                                class="text-lg text-indigo-50 transition duration-150 bg-[#BB1A04] font-semibold py-2 px-4 rounded-l">
                                                Prev
                                            </button>
                                            &nbsp; &nbsp;
                                            <button
                                                class="text-lg text-indigo-50 transition duration-150  bg-[#BB1A04] font-semibold py-2 px-4 rounded-r">
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyInterest
