import Loader from '@/constant/loader';
import { useAuthContext, useMembersContext } from '@/context';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ActiveMembers() {
    const { activeUser, GetActiveMembers, loader } = useMembersContext();
    const [filteredUsers, setFilteredUsers] = useState(activeUser);
    const { member, token } = useAuthContext();



    const [ageFrom, setAgeFrom] = useState('');
    const [ageTo, setAgeTo] = useState('');
    const [memberId, setMemberId] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [religion, setReligion] = useState('');
    const [caste, setCaste] = useState('');
    const [subCaste, setSubCaste] = useState('');
    const [motherTongue, setMotherTongue] = useState('');
    const [profession, setProfession] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');



    const applyFilter = () => {
        let filtered = activeUser;

        if (ageFrom) {
            filtered = filtered.filter(item => item.age >= ageFrom);
        }
        if (ageTo) {
            filtered = filtered.filter(item => item.age <= ageTo);
        }
        if (memberId) {
            filtered = filtered.filter(item => item.MemberID.toLowerCase().includes(memberId.toLowerCase()));
        }
        if (maritalStatus) {
            filtered = filtered.filter(item => item.maritalStatus === maritalStatus);
        }
        if (religion) {
            filtered = filtered.filter(item => item.religion === religion);
        }
        if (caste) {
            filtered = filtered.filter(item => item.caste === caste);
        }
        if (subCaste) {
            filtered = filtered.filter(item => item.subCaste === subCaste);
        }
        if (motherTongue) {
            filtered = filtered.filter(item => item.motherTongue === motherTongue);
        }
        if (profession) {
            filtered = filtered.filter(item => item.profession.toLowerCase().includes(profession.toLowerCase()));
        }
        if (country) {
            filtered = filtered.filter(item => item.country === country);
        }
        if (state) {
            filtered = filtered.filter(item => item.state === state);
        }
        if (city) {
            filtered = filtered.filter(item => item.city === city);
        }

        setFilteredUsers(filtered);
    };

    useEffect(() => {
        if (token)
            GetActiveMembers();
    }, [token]);

    return (
        <div>
            <div className="activeMemebers py-8 mt-5">
                <div className="flex gap-3 w-[90%] mx-auto">
                    <div className="filter hidden sm:block w-[30%] border border-gray-400 p-4">
                        <h4 className='text-xl'>FILTER SEARCH</h4>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="ageFrom">Age From</label>
                                    <input
                                        type="number"
                                        value={ageFrom}
                                        onChange={(e) => setAgeFrom(e.target.value)}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="ageTo">Age To</label>
                                    <input
                                        type="number"
                                        value={ageTo}
                                        onChange={(e) => setAgeTo(e.target.value)}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 py-2">
                                <div>
                                    <label htmlFor="memberId">Member ID</label>
                                    <input
                                        type="text"
                                        value={memberId}
                                        onChange={(e) => setMemberId(e.target.value)}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 py-2">
                                <div>
                                    <label className="" htmlFor="passwordConfirmation">Marital Status</label>
                                    <select value={maritalStatus}
                                        onChange={(e) => setMaritalStatus(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]">
                                        <option value="">Select</option>
                                        <option>Unmarried</option>
                                        <option>Married</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 py-2">
                                <div>
                                    <label className="" htmlFor="passwordConfirmation">Religion</label>
                                    <select value={religion}
                                        onChange={(e) => setReligion(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]">
                                        <option value="">Select</option>
                                        <option>Hindu</option>
                                        <option>Sikh</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 py-2">
                                <div>
                                    <label className="" htmlFor="passwordConfirmation">Caste</label>
                                    <select value={caste}
                                        onChange={(e) => setCaste(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]">
                                        <option value="">Select</option>
                                        <option>Sharma</option>
                                        <option>Kumar</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 py-2">
                                <div>
                                    <label className="" htmlFor="passwordConfirmation">Sub Caste</label>
                                    <select value={subCaste}
                                        onChange={(e) => setSubCaste(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]">
                                        <option value="">Select</option>
                                        <option>Sharma</option>
                                        <option>Kumar</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 py-2">
                                <div>
                                    <label className="" htmlFor="passwordConfirmation">Mother Toungue</label>
                                    <select value={motherTongue}
                                        onChange={(e) => setMotherTongue(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]">
                                        <option value="">Select</option>
                                        <option>Hindi</option>
                                        <option>English</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 py-2">
                                <div>
                                    <label className="" htmlFor="username">Profession</label>
                                    <input value={profession}
                                        onChange={(e) => setProfession(e.target.value)} id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 py-2">
                                <div>
                                    <label className="" htmlFor="passwordConfirmation">Country</label>
                                    <select value={country}
                                        onChange={(e) => setCountry(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]">
                                        <option value="">Select</option>
                                        <option>India</option>
                                        <option>Europe</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 py-2">
                                <div>
                                    <label className="" htmlFor="passwordConfirmation">State</label>
                                    <select value={state}
                                        onChange={(e) => setState(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]">
                                        <option value="">Select</option>
                                        <option>Delhi</option>
                                        <option>Mumbai</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 py-2">
                                <div>
                                    <label className="" htmlFor="passwordConfirmation">City</label>
                                    <select value={city}
                                        onChange={(e) => setCity(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]">
                                        <option value="">Select</option>
                                        <option>Hindi</option>
                                        <option>English</option>
                                    </select>
                                </div>
                            </div>
                            <div className="w-full mt-6">
                                <button
                                    type="button"
                                    onClick={applyFilter}
                                    className="px-6 py-2 w-full leading-5 text-white transition-colors duration-200 transform bg-RedTheme rounded-md hover:bg-[#bb0404]"
                                >
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="members w-full sm:w-[70%] border border-gray-400 p-4">
                        <div className="heading flex justify-center flex-col py-3">
                            <h2 className="text-6xl">Active Members</h2>
                            <img src="../images/headingImg.png" alt="" className="w-64" />
                        </div>

                        {loader ? (
                            <Loader />
                        ) : (
                            (filteredUsers?.length > 0 ? filteredUsers : activeUser)?.map((item) => (
                                <div className="member relative border my-2 border-yellow-600 rounded-md" key={item._id}>
                                    <div className="block sm:flex items-center gap-6 p-3">
                                        <div className="profileImg pb-5 sm:pb-0">
                                            <img
                                                className="w-52 h-52 object-cover rounded-full"
                                                src={
                                                    item?.profileImage?.ImageURL ||
                                                    (item?.gender === "male"
                                                        ? "https://media.istockphoto.com/id/517998264/vector/male-user-icon.jpg?s=170667a&w=0&k=20&c=ZUf0DE14mBsbtgTvNdhDB1uzey9CK2BJlhhMhfFftB8="
                                                        : item?.gender === "female"
? "https://png.pngitem.com/pimgs/s/618-6183618_transparent-unknown-person-png-transparent-background-female-user.png"
                                                            : "https://example.com/default-image.png")
                                                }
                                                alt="Profile"
                                            />
                                        </div>
                                        <div className="profileDetails">
                                            <div className="memberType absolute right-2 top-2 rounded-sm px-3 py-1 bg-RedTheme text-white">
                                                {item?.RegisterPackage ? "Premium" : "Free"}
                                            </div>
                                            <h3 className="text-3xl capitalize">
                                                {item?.firstName} {item?.lastName}
                                            </h3>
                                            <div className="id py-3">
                                                <strong>MEMBER ID : </strong> {item?.MemberID}
                                            </div>
                                            <div className="w-full mt-6">
                                                {member === "true" ? (
                                                    <Link to={`/member_profile/${item?._id}`}>
                                                        <button className="px-6 py-2 w-full leading-5 text-white transition-colors duration-200 transform bg-RedTheme rounded-md hover:bg-[#bb0404]">
                                                            View Details
                                                        </button>
                                                    </Link>
                                                ) : (
                                                    <button
                                                        disabled
                                                        className="px-6 py-2 w-full leading-5 text-white transition-colors duration-200 transform bg-RedTheme rounded-md hover:bg-[#bb0404]"
                                                    >
                                                        View Details
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )) || <h4 className="text-black text-3xl font-semibold">No Data Found</h4>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActiveMembers;
