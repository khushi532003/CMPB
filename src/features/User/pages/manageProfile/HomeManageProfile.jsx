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
    const { userData } = useAuthContext();
    console.log(profile)


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


    useEffect(() => {
        if (userData?.token) {
            GetProfile();
        }
    }, [userData?.token]);


    if (profile?.length < 1) return <Loader />;


    return (
        <div>
            <div className="flex flex-col sm:flex-row py-4 gap-3 w-[90%] mx-auto">

                <div className="filter sm:block w-full sm:w-[30%] border border-red-100 p-4">
                    <div className="relative flex items-center justify-center text-center">
                        <img
                            className="rounded-full object-cover w-52 h-52"
                            src={profile?.user?.profileImage?.ImageURL || (profile?.user?.gender === "male"
                                ? "https://media.istockphoto.com/id/517998264/vector/male-user-icon.jpg?s=170667a&w=0&k=20&c=ZUf0DE14mBsbtgTvNdhDB1uzey9CK2BJlhhMhfFftB8="
                                : profile?.user?.gender === "female"
                                    ? "https://png.pngitem.com/pimgs/s/618-6183618_transparent-unknown-person-png-transparent-background-female-user.png"
                                    : "https://example.com/default-image.png")}
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
                        <p className="text-center font-bold text-gray-700 py-4">{`${profile?.user?.firstName} ${profile?.user?.lastName}`}</p>
                    </div>
                    <button
                        onClick={handleUpload}
                        disabled={isUploading}
                        className="w-full bg-RedTheme text-white py-2 rounded mt-4"
                    >
                        {isUploading ? <Loader /> : 'Update Profile Image'}
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