import React from 'react'
import BasicInfo from './BasicInfo';
import PresentAddress from './presentAddress';
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
import { useProfileContext } from '@/context';
import Loader from '@/constant/loader';
import PermanentAddress from './PermanentAddress';

function HomeManageProfile() {
    const { profile } = useProfileContext()

    if (profile?.length < 1) return <Loader />;
    return (
        <div>
            <div className="flex flex-col sm:flex-row py-4 gap-3 w-[90%] mx-auto">
                <div className="filter sm:block w-[30%] border border-gray-400 p-4">
                    <div className='w-full flex items-center text-center !justify-center'>
                        <img className='rounded-full w-52 h-52' src={profile?.user?.profileImage?.ImageURL} alt="profile" />
                    </div>
                    <p className='text-center py-4'>{profile?.user?.firstName}</p>
                </div>

                <div className="members w-full sm:w-[70%] border border-gray-400 p-4">
                    <BasicInfo data={profile?.user} />
                    <PresentAddress data={profile?.addressDetails} />
                    <CareerInfo data={profile?.careerDetails} />
                    <EducationInfo data={profile?.educationDetails} />
                    <PhysicalAttribute data={profile?.physicalattributeDetails} />
                    <Languages data={profile?.languageDetails} />
                    <HobbiesInterest data={profile?.hoobiesandintrestDetails} />
                    <PermanentAddress data={profile?.permanentaddressDetails} />
                    <PersonalAttitude data={profile?.personalattitudeDetails} />
                    <ResidancyInfo data={profile?.residencyinfoDetails} />
                    <BackgroundInfo data={profile?.backgroundDetails} />
                    <AstronomicInfo data={profile?.astronomicDetails} />
                    <PartnerExpection data={profile?.partnerexpectationDetails} />
                </div>
            </div>
        </div>
    )
}

export default HomeManageProfile;
