import React, { useState } from 'react'
import { GoPlus } from 'react-icons/go'
import { LiaEdit } from 'react-icons/lia'
import { LuEye } from "react-icons/lu";
import AddStory from '../components/AddStory';

const HappyStory = () => {
  const [addStory, setAddStory] = useState(false)
  return (
    <div>
      <div className="HappyStories py-4 relative">
        <div className="stories">
          <div class="bg-white p-8 rounded-md w-full">
            <div class=" flex items-center justify-between pb-6">
              <div>
                <h3 class="text-gray-600 font-semibold text-3xl">Happy Stories</h3>
              </div>
              <div onClick={() => setAddStory(true)} className="px-4 py-1 text-white bg-[#BB1A04] flex gap-1 items-center rounded-sm cursor-pointer"><GoPlus /> Add Story</div>
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
                          Member Name
                        </th>
                        <th
                          class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                          Partner Name
                        </th>
                        <th
                          class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                          Post Time
                        </th>
                        <th
                          class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                          Show
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
                          <p class="text-gray-900 whitespace-no-wrap">Yashika</p>
                        </td>
                        <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                          <p class="text-gray-900 whitespace-no-wrap"> Vicky </p>
                        </td>
                        <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                          <p class="text-gray-900 whitespace-no-wrap">
                            2024-08-08 13:38:51
                          </p>
                        </td>
                        <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                          <p class="text-gray-900 whitespace-no-wrap">
                            <label class="inline-flex items-center cursor-pointer">
                              <input type="checkbox" value="" class="sr-only peer" />
                              <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-green-500 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-red-600"></div>
                            </label>
                          </p>
                        </td>
                        <td class="px-5 py-2 border-b flex gap-1 border-gray-200 bg-white text-lg">
                          <span
                            class="relative bg-blue-400 rounded-full w-10 h-10 flex items-center px-3 py-1 font-semibold text-white">
                            <LiaEdit />
                          </span>
                          <span
                            class="relative bg-green-400 rounded-full w-10 h-10 flex items-center px-3 py-1 font-semibold text-white">
                            <LuEye />
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {addStory ? <AddStory onClose={() => setAddStory(false)} /> : ""}
      </div>
    </div>
  )
}

export default HappyStory;