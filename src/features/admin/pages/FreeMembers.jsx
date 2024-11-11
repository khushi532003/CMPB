import React, { useEffect } from 'react'
import Table from '../components/Table'
import { useAdminMemberContext } from '@/AdminContext'
import { useAuthContext } from '@/context';
import Loader from '@/constant/loader';

function FreeMembers() {

    const { freeMembers, freeMembersData, loader } = useAdminMemberContext()
    const { token } = useAuthContext()


    useEffect(() => {
        if (token)
            freeMembers()
    }, [token])


    return (
        <div>
            <div className=" flex items-center justify-between pb-6">
                <div>
                    <h3 className="text-gray-600 font-semibold text-3xl">Free Members</h3>
                </div>
            </div>

            {loader ? <Loader/> :  <Table id={'S.N0.'} profileImage={"Profile Image"} memeberName={"Member Name"} memberId={"Member ID"} detail={"View Details"} data={freeMembersData} identifier={"members"} />}
        </div>
    )
}

export default FreeMembers;