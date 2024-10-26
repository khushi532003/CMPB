import React from 'react';

const ContectQueries = () => {
  return (
      <div>
          <div className="HappyStories py-4 relative">
              <div className="stories">
                  <div className="bg-white p-8 rounded-md w-full">
                      <div className=" flex items-center justify-between pb-6">
                          <div>
                              <h3 className="text-gray-600 font-semibold text-3xl">Users Contact Queries </h3>
                          </div>
                      </div>
                      <div>
                          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                  <table className="min-w-full leading-normal">
                                      <thead>
                                          <tr>
                                              <th
                                                  className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                  NO. 
                                              </th>
                                              <th
                                                  className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                  Reporter Name
                                              </th>
                                              <th
                                                  className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                  Reporter Email 
                                              </th>
                                              
                                              <th
                                                  className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                  Show
                                              </th>
                                              
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr>
                                              <td className="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                  <p className="text-gray-900 whitespace-no-wrap">1</p>
                                              </td>
                                              <td className="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                  <p className="text-gray-900 whitespace-no-wrap">Yashika</p>
                                              </td>
                                              <td className="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                  <p className="text-gray-900 whitespace-no-wrap"> Vicky </p>
                                              </td>
                                              <td className="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                 <button className="font-medium  text-white py-1 px-3 rounded-lg bg-green-400" >View Query</button>
                                              </td>
                                             
                                              
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
             
          </div>
      </div>
  )
}

export default ContectQueries