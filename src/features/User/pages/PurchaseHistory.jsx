import {  usePackageContext, useProfileContext } from '@/context';
import React, { useEffect } from 'react'

function PurchaseHistory() {
    const { packagePurchaseData } = useProfileContext()
    const { GetEventPurchaseData, eventPurchaseData } = usePackageContext();
    console.log(packagePurchaseData);
    

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };
    
useEffect(()=>{
    GetEventPurchaseData()
},[])
    return (
        <div>
            <div className="MyInterest ">

                <div className="ineterests">
                    <div className="bg-white p-8 rounded-md w-full">
                        <h3 className="text-gray-600 font-semibold text-3xl">Event History</h3>

                        <div>
                            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                    <table className="min-w-full leading-normal">
                                        <thead>
                                            <tr>
                                              
                                                <th
                                                    className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                    Purchased At
                                                </th>
                                                <th
                                                    className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                    Amount Paid
                                                </th>
                                                <th
                                                    className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                    Event Date
                                                </th>

                                                <th
                                                    className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                    Event Name
                                                </th>
                                                <th
                                                    className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                    State
                                                </th>
                                                <th
                                                    className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                    Venue
                                                </th>

                                            </tr>
                                        </thead>
                                        {eventPurchaseData && eventPurchaseData?.userEvents.map((item)=> <tbody >
                                            <tr>
                                              
                                                <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">{formatDate(item?.ClientDetails[0]?.createdAt)}</p>
                                                </td>

                                                <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap"> ₹{item?.amount}</p>
                                                </td>
                                                <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {item?.availableDates}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {item?.eventName}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-2 border-b border-gray-200  text-sm">
                                                    <p className=" text-center whitespace-no-wrap ">
                                                        {item?.state}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                    <p className=" text-center whitespace-no-wrap ">
                                                        {item?.venues}
                                                    </p>
                                                </td>

                                            </tr>


                                        </tbody>) }
                                    </table>

                                </div>
                            </div>
                        </div>
                        <h3 className="text-gray-600 font-semibold text-3xl">Packages History</h3>

                        <div>
                            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                    <table className="min-w-full leading-normal">
                                        <thead>
                                            <tr>
                                                <th
                                                    className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                    Member
                                                </th>
                                                <th
                                                    className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                    Member ID
                                                </th>
                                               

                                                <th
                                                    className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                    Amount Paid
                                                </th>
                                                <th
                                                    className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                    Purchase Time
                                                </th>

                                            </tr>
                                        </thead>
                                        {packagePurchaseData && <tbody >
                                            <tr>
                                                <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {packagePurchaseData?.PremiumMember === "true" ? "Premium" : "Free"}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">{packagePurchaseData?.OrderID}</p>
                                                </td>

                                                <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        ₹{packagePurchaseData?.amount}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {formatDate(packagePurchaseData?.createdAt)}
                                                    </p>
                                                </td>
                                              
                                            </tr>
                                        </tbody>}
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

export default PurchaseHistory;