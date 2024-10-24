import React from 'react'
import { LiaFileInvoiceSolid } from "react-icons/lia";

function PurchaseHistory() {
  return (
      <div>
          <div className="MyInterest py-8 mt-20">

              <div className="ineterests">
                  <div class="bg-white p-8 rounded-md w-full">
                      <div class=" flex items-center justify-between pb-6">
                          <div>
                              <h3 class="text-gray-600 font-semibold text-3xl">Packages History</h3>
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
                                                  Code
                                              </th>
                                              <th
                                                  class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                  Package
                                              </th>
                                              <th
                                                  class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                  Payment Method
                                              </th>

                                              <th
                                                  class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                  Amount
                                              </th>
                                              <th
                                                  class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                  Payment Status
                                              </th>
                                              <th
                                                  class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                  Purchase Date
                                              </th>
                                              <th
                                                  class="px-5 py-3 border-b-2 border-gray-200 bg-[#BB1A04] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                  Invoice
                                              </th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr>
                                              <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                  <p class="text-gray-900 whitespace-no-wrap">1</p>
                                              </td>
                                              <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                  <p class="text-gray-900 whitespace-no-wrap">240809-153250</p>
                                              </td>
                                              
                                              <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                  <p class="text-gray-900 whitespace-no-wrap"> <strong>Premium</strong> </p>
                                              </td>
                                              <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                  <p class="text-gray-900 whitespace-no-wrap">
                                                      Razorpay
                                                  </p>
                                              </td>
                                              <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                  <p class="text-gray-900 whitespace-no-wrap">
                                                      Rs1.00
                                                  </p>
                                              </td>
                                              <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                  <p class="text-white text-center rounded-lg whitespace-no-wrap bg-green-500">
                                                     Paid
                                                  </p>
                                              </td>
                                              <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                  <p class="text-gray-900 whitespace-no-wrap">
                                                      2024-08-09 15:32:50
                                                  </p>
                                              </td>

                                              <td class="px-5 py-2 border-b border-gray-200 bg-white text-lg">
                                                  <span
                                                      class="relative bg-red-500 rounded-full w-10 h-10 flex items-center px-3 py-1 font-semibold text-white">
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
