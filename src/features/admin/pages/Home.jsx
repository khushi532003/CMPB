import React, { useState } from 'react';
import ListCards from "@admin/components/ListCards";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Home = () => {
    const data = [{ name: 'Page A', uv: 100, amt: 2400 }, { name: 'Page B', uv: 350, amt: 2400 }, { name: 'Page C', uv: 10, amt: 1500 }, { name: 'Page D', uv: 220, amt: 1500 }];
    return (
        <div>
            <div className='grid grid-cols-4 gap-7 h-48' >
                <ListCards title={"Total Members"} member={20} className={"bg-total_user"} />
                <ListCards title={"Premium Members"} member={20} className={"bg-total_user1"} />
                <ListCards title={"Free Members"} member={20} className={"bg-total_user2"} />
                <ListCards title={"Programs Bookings"} member={20} className={"bg-total_user3"} />
            </div> 
            <div className='py-10 ' >
                <LineChart width={1000} height={250} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </div>
            <div className='grid grid-cols-4 gap-7 h-48' >
                <ListCards title={"Total Earnings"} member={`RS ${20}`}  className={"text-black"} />
                <ListCards title={"Last Month Earnings"} member={`RS ${20}`} />
                <ListCards title={"Last 6 Month Earnings"} member={`RS ${20}`} />
                <ListCards title={"Last 12 Month Earnings"} member={`RS ${20}`} />
            </div>
        </div>
    )
}

export default Home