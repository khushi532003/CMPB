import React, { useEffect } from 'react'
import Table from '../components/Table'
import { useAdminMemberContext } from '@/AdminContext'
import { useAuthContext } from '@/context'
import Loader from '@/constant/loader'

function PremiumMembers() {
    const { premiumMembers, premiumMembersData, loader } = useAdminMemberContext()
    const { token } = useAuthContext();
    
    useEffect(() => {
        if (token)
            premiumMembers()
    }, [token])
    return (
        <div>
            <div className=" flex items-center justify-between pb-6">
                <div>
                    <h3 className="text-gray-600 font-semibold text-3xl">Premium Members</h3>
                </div>
            </div>
           {loader ? <Loader/> : <Table id={'S.No'} profileImage={"Profile Image"} memeberName={"Member Name"} memberId={"Member ID"} detail={"View Details"} data={premiumMembersData} identifier={"members"} />}
            <div className="pagination py-4 flex justify-center items-center gap-3">
                <button className="prev bg-RedTheme text-white px-4 py-1 rounded">Prev</button>
                <button className="prev bg-RedTheme text-white px-4 py-1 rounded">Next</button>
            </div>
        </div>
    )
}

export default PremiumMembers
