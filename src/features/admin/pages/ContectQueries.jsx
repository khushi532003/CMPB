import React from 'react';
import Table from '../components/Table';
import { useAdminContactContext } from '@/AdminContext';

const ContectQueries = () => {

    const { contactQuery, GetContactQueries } = useAdminContactContext();
    console.log(contactQuery);
    
    useEffect(() => {
        GetContactQueries()
    }, [])
    return (
        <div>
            <div className=" py-4 relative">
                <div className="">
                    <div className="bg-white p-8 rounded-md w-full">
                        <div className=" flex items-center justify-between pb-6">
                            <div>
                                <h3 className="text-gray-600 font-semibold text-3xl"> Contact Queries </h3>
                            </div>
                        </div>
                        <Table id={"S.no"} name={"Name"} email={"Email"} phone={"Phone No."} message={"Message"} action={"Action"} identifier={"contact"} data={contactQuery} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContectQueries