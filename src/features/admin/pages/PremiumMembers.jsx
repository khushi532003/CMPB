import React, { useEffect } from 'react'
import Table from '../components/Table'
import { useAdminMemberContext } from '@/AdminContext'
import { useAuthContext } from '@/context'

function PremiumMembers() {
    const { premiumMembers, premiumMembersData } = useAdminMemberContext()
    const { token } = useAuthContext()

    
    
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
            <Table id={'S.No'} profileImage={"Profile Image"} memeberName={"Member Name"} memberId={"Member ID"} detail={"View Details"} data={premiumMembersData} identifier={"members"} />
        </div>
    )
}

export default PremiumMembers
