import Accordian from '@/features/User/components/Accordian'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useAdminMemberContext } from '@/AdminContext';

function ViewUserDetails() {

    const [openIndex, setOpenIndex] = useState(null);
    const { GetActiveUserById, userDetails } = useAdminMemberContext()
    const { id } = useParams()

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        if (id) {
            GetActiveUserById(id);
        }
    }, [id])

    return (
        <div>
            <div className="flex gap-2 w-[90%] mx-auto py-5">
                <div className="profile w-[30%]">
                    <div className="profileImg">
                        <img className='w-80 h-80 rounded-full' src={userDetails?.profileDetails?.User?.profileImage?.ImageURL ||
                            (userDetails?.profileDetails?.User?.gender === "male"
                                ? "https://media.istockphoto.com/id/517998264/vector/male-user-icon.jpg?s=170667a&w=0&k=20&c=ZUf0DE14mBsbtgTvNdhDB1uzey9CK2BJlhhMhfFftB8="
                                : userDetails?.profileDetails?.User?.gender === "female"
                                    ? "https://png.pngitem.com/pimgs/s/618-6183618_transparent-unknown-person-png-transparent-background-female-user.png"
                                    : "https://example.com/default-image.png")} alt="" />
                    </div>
                </div>
                <div className="details w-[70%]">
                    <div className="info">
                        <h3 className="text-5xl pt-5">Profile Information</h3>
                        <img src="../images/headingImg.png" alt="" className="w-64 pb-5" />
                        <div className="px-5">
                            <h4 className='text-4xl capitalize'>{userDetails?.profileDetails?.User?.firstName} </h4>
                            <div className="id py-3"> <strong>MEMBER ID : </strong> #{userDetails?.profileDetails?.User?.MemberID}</div>
                            {/* <div className="memberType inline-block rounded-full px-6 py-1 bg-RedTheme text-white">Free</div> */}
                        </div>

                        <div className="information w-[80%]">
                            <Accordian title="Basic Information" isOpen={openIndex === 1}
                                onToggle={() => toggleAccordion(1)} >
                                <div className="text-sm">
                                    {userDetails?.profileDetails && <ul>
                                        <div className="flex justify-between gap-10 py-3">
                                            <li><strong>First name : </strong> {userDetails?.profileDetails?.User?.firstName}</li>
                                            <li><strong>Last name : </strong> {userDetails?.profileDetails?.User?.lastName}</li>
                                        </div>
                                        <div className="flex justify-between gap-10 py-3">
                                            <li><strong>Date of birth : </strong> {userDetails?.profileDetails?.User?.DOB}</li>
                                            <li><strong>Gender : </strong> {userDetails?.profileDetails?.User?.gender}</li>
                                        </div>
                                        <div className="flex justify-between gap-10 py-3">
                                            <li><strong>Email ID : </strong> {userDetails?.profileDetails?.User?.email}</li>
                                            <li><strong>Mobile No. : </strong> {userDetails?.profileDetails?.User?.phone}</li>
                                        </div>
                                    </ul>}
                                </div>
                            </Accordian>
                            <Accordian title="Present Address" isOpen={openIndex === 2}
                                onToggle={() => toggleAccordion(2)} >
                                <div className="text-sm">
                                    {userDetails?.profileDetails && <ul>
                                        <div className="flex justify-between gap-10 py-3">
                                            <li><strong>Country : </strong> {userDetails?.profileDetails?.addressDetails?.Country}</li>
                                            <li><strong>City : </strong> {userDetails?.profileDetails?.addressDetails?.City}</li>
                                        </div>
                                        <div className="flex justify-between gap-10 py-3">

                                            <li><strong>State : </strong> {userDetails?.profileDetails?.addressDetails?.State}</li>
                                            <li><strong>Pin code : </strong>{userDetails?.profileDetails?.
                                                addressDetails?.Pincode}</li>
                                        </div>

                                    </ul>}
                                </div>
                            </Accordian>
                            <Accordian title="Career Information" isOpen={openIndex === 3}
                                onToggle={() => toggleAccordion(3)} >
                                <div className="text-sm">
                                    {userDetails?.profileDetails && <ul>
                                        <div className="flex justify-between gap-10 py-3">
                                            <li><strong>Designation : </strong> {userDetails?.profileDetails?.
                                                careerDetails?.designation}</li>
                                            <li><strong>Company Name : </strong> {userDetails?.profileDetails?.
                                                careerDetails?.company}</li>
                                        </div>
                                        <div className="flex justify-between gap-10 py-3">
                                            <li><strong>Start date : </strong> {userDetails?.profileDetails?.
                                                careerDetails?.start}</li>
                                            <li><strong>End date : </strong> {userDetails?.profileDetails?.
                                                careerDetails?.end}</li>
                                        </div>

                                    </ul>}
                                </div>
                            </Accordian>
                            <Accordian title="Education" isOpen={openIndex === 4}
                                onToggle={() => toggleAccordion(4)} >
                                <div className="text-sm">
                                    {userDetails?.profileDetails && <ul>
                                        <div className="flex justify-between gap-10 py-3">
                                            <li><strong>Degree : </strong> {userDetails?.profileDetails?.educationDetails?.Degree}</li>
                                            <li><strong>Institution : </strong> {userDetails?.profileDetails?.educationDetails?.insitution}</li>
                                        </div>
                                        <div className="flex justify-between gap-10 py-3">
                                            <li><strong>Start date : </strong> {userDetails?.profileDetails?.educationDetails?.start}</li>
                                            <li><strong>End date : </strong> {userDetails?.profileDetails?.educationDetails?.end}</li>
                                        </div>
                                    </ul>}
                                </div>
                            </Accordian>
                            <Accordian title="Physical Attribute" isOpen={openIndex === 5}
                                onToggle={() => toggleAccordion(5)} >
                                <div className="text-sm">
                                    {userDetails?.profileDetails && <ul>
                                        <div className="flex justify-between gap-10 py-3">
                                            <li><strong>Height : </strong> {userDetails?.profileDetails?.physicalattributeDetails?.Height}</li>
                                            <li><strong>Weight : </strong> {userDetails?.profileDetails?.physicalattributeDetails?.weight}</li>
                                        </div>
                                        <div className="flex justify-between gap-10 py-3">
                                            <li><strong>Skin Complexion : </strong> {userDetails?.profileDetails?.physicalattributeDetails?.skinComplexion}</li>
                                            <li><strong>Blood Group : </strong> {userDetails?.profileDetails?.physicalattributeDetails?.BloodGroup}</li>
                                        </div>
                                        <div className="flex justify-between gap-10 py-3">
                                            <li><strong>Disability : </strong> {userDetails?.profileDetails?.physicalattributeDetails?.Disablity}</li>
                                        </div>
                                    </ul>}
                                </div>
                            </Accordian>
                            <Accordian title="Languages" isOpen={openIndex === 6}
                                onToggle={() => toggleAccordion(6)} >
                                <div className="text-sm">
                                    {userDetails?.profileDetails && <ul>
                                        <div className="flex justify-between gap-10 py-3">
                                            <li><strong>Mother Tounge : </strong> {userDetails?.profileDetails?.languageDetails?.motherTounge}</li>
                                            <li><strong>Known Language : </strong> {userDetails?.profileDetails?.languageDetails?.knownLanguage}</li>
                                        </div>
                                    </ul>}
                                </div>
                            </Accordian>
                            <Accordian title="Hobbies & Interest" isOpen={openIndex === 7}
                                onToggle={() => toggleAccordion(7)} >
                                <div className="text-sm">
                                    {userDetails?.profileDetails && <ul>
                                        <div className="flex justify-between gap-10 py-3">
                                            <li><strong>Hobbies : </strong> {userDetails?.profileDetails?.hoobiesandintrestDetails?.Hobbies}</li>
                                            <li><strong>Interest : </strong> {userDetails?.profileDetails?.hoobiesandintrestDetails?.Intrest}</li>
                                        </div>
                                        <div className="flex justify-between gap-10 py-3">
                                            <li><strong>Music : </strong> {userDetails?.profileDetails?.hoobiesandintrestDetails?.Music}</li>
                                            <li><strong>Books : </strong> {userDetails?.profileDetails?.hoobiesandintrestDetails?.Books}</li>
                                        </div>
                                        <div className="flex justify-between gap-10 py-3">
                                            <li><strong>Movies : </strong> {userDetails?.profileDetails?.hoobiesandintrestDetails?.Movies}</li>
                                            <li><strong>TV Show : </strong> {userDetails?.profileDetails?.hoobiesandintrestDetails?.tvShow}</li>
                                        </div>
                                        <div className="flex justify-between gap-10 py-3">
                                            <li><strong>Fitness Activities : </strong> {userDetails?.profileDetails?.hoobiesandintrestDetails?.fitnessActivities}</li>
                                            <li><strong>Sports : </strong> {userDetails?.profileDetails?.hoobiesandintrestDetails?.Sports}</li>
                                        </div>
                                        <div className="flex justify-between gap-10 py-3">
                                            <li><strong>Cuisines : </strong> {userDetails?.profileDetails?.hoobiesandintrestDetails?.cuisines}</li>
                                            <li><strong>Dress Style : </strong> {userDetails?.profileDetails?.hoobiesandintrestDetails?.dressStyle}</li>
                                        </div>
                                    </ul>}
                                </div>
                            </Accordian>
                            <Accordian title="Personal Attitude" isOpen={openIndex === 8}
                                onToggle={() => toggleAccordion(8)} >
                                <div className="text-sm">
                                    {userDetails?.profileDetails && <ul>
                                        <div className="flex justify-between gap-10 py-3">
                                            <li><strong>Affection : </strong> {userDetails?.profileDetails?.personalattitudeDetails?.Affection}</li>
                                            <li><strong>Religion Service : </strong> {userDetails?.profileDetails?.personalattitudeDetails?.religionService}</li>
                                        </div>
                                    </ul>}
                                </div>
                            </Accordian>
                            <Accordian title="Residancy Information" isOpen={openIndex === 9}
                                onToggle={() => toggleAccordion(9)} >
                                <div className="text-sm">
                                    {userDetails?.profileDetails && <ul>
                                        <div className="flex justify-between gap-10 py-3">
                                            <li><strong>Birth County : </strong> {userDetails?.profileDetails?.residencyinfoDetails?.birthCounty}</li>
                                            <li><strong>Residency County : </strong> {userDetails?.profileDetails?.residencyinfoDetails?.residencyCounty}</li>
                                        </div>
                                        <div className="flex justify-between gap-10 py-3">
                                            <li><strong>GrownUp Country : </strong> {userDetails?.profileDetails?.residencyinfoDetails?.grownUpCountry}</li>
                                            <li><strong>Immigration Status : </strong> {userDetails?.profileDetails?.residencyinfoDetails?.ImmigrationStatus}</li>
                                        </div>
                                    </ul>}
                                </div>
                            </Accordian>
                            <Accordian title="Background Info" isOpen={openIndex === 10}
                                onToggle={() => toggleAccordion(10)} >
                                <div className="text-sm">
                                    {userDetails?.profileDetails && <ul>
                                        <div className="flex justify-between gap-10 py-3">

                                            <li><strong>Caste : </strong> {userDetails?.profileDetails?.backgroundDetails?.Caste}</li>
                                            <li><strong>Sub Cast : </strong> {userDetails?.profileDetails?.backgroundDetails?.SubCast}</li>
                                        </div>
                                        <div className="flex justify-between gap-10 py-3">

                                            <li><strong>Self Worth : </strong> {userDetails?.profileDetails?.backgroundDetails?.SelfWorth}</li>
                                            <li><strong>Family Worth : </strong> {userDetails?.profileDetails?.backgroundDetails?.FamilyWorth}</li>
                                        </div>
                                        <div className="flex justify-between gap-10 py-3">
                                            <li><strong>Religion : </strong> {userDetails?.profileDetails?.backgroundDetails?.Religion}</li>
                                        </div>
                                    </ul>}
                                </div>
                            </Accordian>
                            <Accordian title="Partner Expection" isOpen={openIndex === 11}
                                onToggle={() => toggleAccordion(11)} >
                                <div className="text-sm">
                                    {userDetails?.profileDetails && <ul>
                                        <div className="flex justify-between gap-10 py-3">
                                            <li><strong>General Requirement : </strong> {userDetails?.profileDetails?.partnerexpectationDetails?.GernalRequirement}</li>
                                            <li><strong>Residence Country : </strong> {userDetails?.profileDetails?.partnerexpectationDetails?.ResidenceCountry}</li>
                                        </div>
                                        <div className="flex justify-between gap-10 py-3">
                                            <li><strong>Height : </strong> {userDetails?.profileDetails?.partnerexpectationDetails?.Height}</li>
                                            <li><strong>Weight : </strong> {userDetails?.profileDetails?.partnerexpectationDetails?.weight}</li>
                                        </div>
                                        <div className="flex justify-between gap-10 py-3">
                                            <li><strong>Marital Status : </strong> {userDetails?.profileDetails?.partnerexpectationDetails?.MaritalStatus}</li>
                                            <li><strong>Children : </strong> {userDetails?.profileDetails?.partnerexpectationDetails?.Children}</li>
                                        </div>
                                        <div className="flex justify-between gap-10 py-3">
                                            <li><strong>Religion : </strong> {userDetails?.profileDetails?.partnerexpectationDetails?.Religion}</li>
                                            <li><strong>Caste : </strong> {userDetails?.profileDetails?.partnerexpectationDetails?.Caste}</li>
                                        </div>
                                        <div className="flex justify-between gap-10 py-3">
                                            <li><strong>Sub Caste : </strong> {userDetails?.profileDetails?.partnerexpectationDetails?.SubCaste}</li>
                                            <li><strong>Language : </strong> {userDetails?.profileDetails?.partnerexpectationDetails?.Language}</li>
                                        </div>
                                        <div className="flex justify-between gap-10 py-3">
                                            <li><strong>Education : </strong> {userDetails?.profileDetails?.partnerexpectationDetails?.Education}</li>
                                            <li><strong>Profession : </strong> {userDetails?.profileDetails?.partnerexpectationDetails?.Profession}</li>
                                        </div>
                                        <div className="flex justify-between gap-10 py-3">
                                            <li><strong>Smoking Acceptable : </strong> {userDetails?.profileDetails?.partnerexpectationDetails?.SmokingAcceptable}</li>
                                            <li><strong>Drink Acceptable : </strong> {userDetails?.profileDetails?.partnerexpectationDetails?.DrinkAcceptable}</li>
                                        </div>
                                        <div className="flex justify-between gap-10 py-3">
                                            <li><strong>Diet Acceptable : </strong> {userDetails?.profileDetails?.partnerexpectationDetails?.DietAcceptable}</li>
                                            <li><strong>Manglik : </strong> {userDetails?.profileDetails?.partnerexpectationDetails?.Manglik}</li>
                                        </div>
                                        <div className="flex justify-between gap-10 py-3">
                                            <li><strong>Personal Value : </strong> {userDetails?.partnerexpectationDetails?.personalValue}</li>
                                            <li><strong>Family Value : </strong> {userDetails?.partnerexpectationDetails?.FamilyValue}</li>
                                        </div>
                                        <div className="flex justify-between gap-10 py-3">
                                            <li><strong>Preferred Country : </strong> {userDetails?.profileDetails?.partnerexpectationDetails?.PreferredCountry}</li>
                                            <li><strong>Preferred State : </strong> {userDetails?.profileDetails?.partnerexpectationDetails?.PreferredState}</li>
                                        </div>
                                        <div className="flex justify-between gap-10 py-3">
                                            <li><strong>Complexion : </strong> {userDetails?.profileDetails
                                                ?.partnerexpectationDetails?.Complexion}</li>
                                        </div>
                                    </ul>}
                                </div>
                            </Accordian>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewUserDetails;