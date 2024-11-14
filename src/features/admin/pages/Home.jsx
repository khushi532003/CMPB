import React, { useEffect, useState } from 'react';
import ListCards from "@admin/components/ListCards";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { useAdminMemberContext } from '@/AdminContext';
import { useAuthContext } from '@/context';

const Home = () => {
    const { countFreeMember, countPremiumMember, freeMembers, premiumMembers, TotalMembers } = useAdminMemberContext()
    const {token} = useAuthContext()
    const data = [{ name: 'Page A', uv: 100, amt: 2400 }, { name: 'Page B', uv: 350, amt: 2400 }, { name: 'Page C', uv: 10, amt: 1500 }, { name: 'Page D', uv: 220, amt: 1500 }];

    useEffect(() => {
        if (token){
            freeMembers()
            premiumMembers()
        }
    }, [token])

    return (
        <div>
            <div className='grid grid-cols-2 gap-10 h-96' >
                <ListCards title={"Total Members"} member={TotalMembers} className={"bg-total_user text-white"} />
                <ListCards title={"Premium Members"} member={countPremiumMember} className={"bg-total_user1 text-white"} />
                <ListCards title={"Free Members"} member={countFreeMember} className={"bg-total_user2 text-white"} />
                <ListCards title={"Programs Bookings"} member={20} className={"bg-total_user3 text-white"} />
            </div>

            {/* <div className='py-20 z-0 ' >
                    <LineChart width={900} height={350} data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
            </div> */}
            {/* <div className='grid grid-cols-4 gap-3 h-48' >
                <ListCards title={"Total Earnings"} member={`RS ${20}`} className={"text-white bg-total_user3"} />
                <ListCards title={"Last Month Earnings"} member={`RS ${20}`} className={"text-white bg-total_user2"} />
                <ListCards title={"Last 6 Month Earnings"} member={`RS ${20}`} className={"text-white bg-total_user1"} />
                <ListCards title={"Last 12 Month Earnings"} member={`RS ${20}`} className={"text-white bg-total_user"} />
            </div> */}
        </div>
    )
}

export default Home