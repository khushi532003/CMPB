
import React, { useEffect, useState } from 'react';
import { useAuthContext, useProfileContext } from '@/context';
import Loader from '@/constant/loader';
import { AxiosHandler } from '@/config/Axios.config';
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
import PermanentAddress from './PermanentAddress';
import { FaCamera } from 'react-icons/fa';
import { toast } from 'react-toastify';

function HomeManageProfile() {
    const { profile, GetProfile, setProfile } = useProfileContext();
    const [imageFile, setImageFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);


    console.log(profile)
    
    useEffect(() => {
        GetProfile();
    }, []);

    if (profile?.length < 1) return <Loader />;

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImageFile(file);
        }
    };

    const handleUpload = async () => {
        if (!imageFile) return;
        const formData = new FormData();
        formData.append('image', imageFile);

        try {
            setIsUploading(true);
            const response = await AxiosHandler.put('/user/profile_image/update', formData, {
                headers: { 'Content-Type': 'multipart/form-data', },
            });
            if (response?.data?.success) {
                const updatedProfile = { ...profile, user: { ...profile?.user, profileImage: response?.data.imageUrl } };
                setProfile(updatedProfile);
            }
            GetProfile();
            toast.success("Profile image updated successfully")

        } catch (error) {
            console.error('Error uploading image:', error);
            toast.error("failed to upload image");
        } finally {
            setIsUploading(false);
        }
    };



    return (
        <div>
            <div className="flex flex-col sm:flex-row py-4 gap-3 w-[90%] mx-auto">

                <div className="filter sm:block w-full sm:w-[30%] border border-red-100 p-4">
                    <div className="relative flex items-center justify-center text-center">
                        <img
                            className="rounded-full w-52 h-52"
                            src={profile?.user?.profileImage?.ImageURL || "https://thumbs.dreamstime.com/z/vinayagar-images-ai-hd-photo-2023-289916691.jpg"}
                            alt="profile"
                        />
                        <div className="absolute text-2xl bottom-5 right-20 cursor-pointer ">
                            <label htmlFor="profile-image-upload" className='cursor-pointer'>
                                <FaCamera />
                            </label>
                            <input
                                type="file"
                                id="profile-image-upload"
                                accept="image/*"
                                style={{ display: 'none' }}
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>
                    <div>
                        <p className="text-center py-4">{profile?.user?.firstName}</p>
                    </div>
                    <button
                        onClick={handleUpload}
                        disabled={isUploading}
                        className="w-full bg-RedTheme text-white py-2 rounded mt-4"
                    >
                        {isUploading ? 'Uploading...' : 'Update Profile Image'}
                    </button>
                </div>

                <div className="members w-full sm:w-[70%] border border-red-100 p-4">
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
    );
}

export default HomeManageProfile;