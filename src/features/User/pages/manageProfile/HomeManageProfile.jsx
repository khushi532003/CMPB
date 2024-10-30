import React from 'react'
import BasicInfo from './BasicInfo';
import ProfileAddress from './ProfileAddress';
import CareerInfo from './CareerInfo';
import EducationInfo from './EducationInfo';
import PhysicalAttribute from './PhysicalAttribute';
import Languages from './Languages';
import HobbiesInterest from './HobbiesInterest';
import PersonalAttitude from './PersonalAttitude';
import ResidancyInfo from './ResidancyInfo';
import BackgroundInfo from './BackgroundInfo';
import AstronomicInfo from './AstronomicInfo';
import PartnerExpection from './PartnerExpection';
import InterestedIn from './InterestedIn';
import { useProfileContext } from '@/context';
import { useEffect } from 'react';
import Loader from '@/constant/loader';

function HomeManageProfile() {
    const { profile } = useProfileContext()
    console.log(profile)

    if (profile?.length < 1) return <Loader />;
    return (
        <div>
            <div className="flex py-4 gap-3 w-[90%] mx-auto">
                <div className="filter sm:block w-[30%] border border-gray-400 p-4">
                    <div>
                        <div className='w-full flex items-center text-center !justify-center'>
                            <img className='rounded-full w-52 h-52 ' src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg" alt="" />
                        </div>
                        <p className='text-center py-4'>Paras Parivaar</p>
                    </div>
                </div>
                <div className="members w-full sm:w-[70%] border border-gray-400 p-4">
                    <BasicInfo data={profile?.user} />
                    <ProfileAddress />
                    <CareerInfo data={profile?.careerDetails} />
                    <EducationInfo data={profile?.educationDetails} />
                    <PhysicalAttribute data={profile?.physicalattributeDetails} />
                    <Languages />
                    <HobbiesInterest />
                    <PersonalAttitude />
                    <ResidancyInfo data={profile?.residencyinfoDetails} />
                    <BackgroundInfo />
                    <AstronomicInfo />
                    <PartnerExpection />
                    <InterestedIn />
                </div>
            </div>
        </div>
    )
}

export default HomeManageProfile;