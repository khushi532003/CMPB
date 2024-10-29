import React from 'react'
import { LiaFileInvoiceSolid } from "react-icons/lia";

function PurchaseHistory() {
  return (
      <div>
          <div className="MyInterest py-8 mt-20">

              <div className="ineterests">
                  <div className="bg-white p-8 rounded-md w-full">
                      <div className=" flex items-center justify-between pb-6">
                          <div>
                              <h3 className="text-gray-600 font-semibold text-3xl">Packages History</h3>
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
                                                  ID
                                              </th>
                                              <th
                                                  className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                  Code
                                              </th>
                                              <th
                                                  className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                  Package
                                              </th>
                                              <th
                                                  className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                  Payment Method
                                              </th>

                                              <th
                                                  className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                  Amount
                                              </th>
                                              <th
                                                  className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                  Payment Status
                                              </th>
                                              <th
                                                  className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                  Purchase Date
                                              </th>
                                              <th
                                                  className="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                  Invoice
                                              </th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr>
                                              <td className="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                  <p className="text-gray-900 whitespace-no-wrap">1</p>
                                              </td>
                                              <td className="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                  <p className="text-gray-900 whitespace-no-wrap">240809-153250</p>
                                              </td>
                                              
                                              <td className="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                  <p className="text-gray-900 whitespace-no-wrap"> <strong>Premium</strong> </p>
                                              </td>
                                              <td className="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                  <p className="text-gray-900 whitespace-no-wrap">
                                                      Razorpay
                                                  </p>
                                              </td>
                                              <td className="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                  <p className="text-gray-900 whitespace-no-wrap">
                                                      Rs1.00
                                                  </p>
                                              </td>
                                              <td className="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                  <p className="text-white text-center rounded-lg whitespace-no-wrap bg-green-500">
                                                     Paid
                                                  </p>
                                              </td>
                                              <td className="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                  <p className="text-gray-900 whitespace-no-wrap">
                                                      2024-08-09 15:32:50
                                                  </p>
                                              </td>

                                              <td className="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                  <span
                                                      className="relative bg-red-500 rounded-full w-10 h-10 flex items-center px-3 py-1 font-semibold text-white">
                                                      <LiaFileInvoiceSolid />
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
          </div>
      </div>
  )
}

export default PurchaseHistory
