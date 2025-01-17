import React, { useEffect } from 'react';
import Table from '../components/Table';
import { useAdminMemberContext } from '@/AdminContext';
import { useAuthContext } from '@/context';
import Loader from '@/constant/loader';

function PremiumMembers() {
    const { premiumMembers, premiumMembersData, loader, page, setPage, disable } = useAdminMemberContext();
    const { userData } = useAuthContext();

    useEffect(() => {
        if (userData?.token) premiumMembers(page);
    }, [userData?.token, page]);

    if (disable) return <Loader />;

    return (
        <div>
            <div className="flex items-center justify-between pb-6">
                <div>
                    <h3 className="text-gray-600 font-semibold text-3xl">Premium Members</h3>
                </div>
            </div>
            {loader ? (<Loader />) : (
                <Table
                    id={'S.No'}
                    profileImage={"Profile Image"}
                    memeberName={"Member Name"}
                    memberId={"Member ID"}
                    detail={"View Details"}
                    data={premiumMembersData}
                    identifier={"members"}
                />
            )}
            <div className="pagination py-4 flex justify-center items-center gap-3">
                <button
                    className="prev bg-RedTheme text-white px-4 py-1 rounded"
                    disabled={disable || page === 1}
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))} > Prev </button>
                <span className='list-none text-blue-600 text-md font-bold'>{page}</span>
                <button
                    className="next bg-RedTheme text-white px-4 py-1 rounded"
                    disabled={disable || premiumMembersData?.length < 5}
                    onClick={() => setPage((prev) => prev + 1)}>Next </button>
            </div>
        </div>
    );
}

export default PremiumMembers;
