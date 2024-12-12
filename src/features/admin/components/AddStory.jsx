import { useHappyStroyContext } from '@/AdminContext';
import Loader from '@/constant/loader';
import React, { useRef, useState } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5';
import { TfiClose } from 'react-icons/tfi';
import { toast } from 'react-toastify';

const AddStory = ({ onClose }) => {
    const { CreateHappyStory, loader } = useHappyStroyContext();
    const [image, setImage] = useState(null);
    const [error, setErrors] = useState({});
    const fileInputRef = useRef(null);

    const [addStoryData, setAddStoryData] = useState({
        Groom: "",
        Bride: "",
        Content: "",
        image: null
    })

    const [resetForm, setResetForm] = useState(addStoryData);

    const handleImageChange = (event) => {
        const imageFile = event.target.files;
        if (!imageFile) return;

        if (!imageFile[0].type.startsWith('image/')) {
            console.error("Selected file is not an image.");
            return;
        }

        if (imageFile[0].size > 500 * 1024) {
            setErrors((prevErrors) => ({ ...prevErrors, image: "Image size should not exceed 500 KB" }));
            return;
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, image: "" }));
        }

        const imageUrl = URL.createObjectURL(imageFile[0]);
        setImage(imageUrl);
        setAddStoryData({ ...addStoryData, image: imageFile });

        return () => URL.revokeObjectURL(imageUrl);
    }

    const validate = () => {
        const newError = {};
        if (!addStoryData.Groom.trim()) newError.Groom = "Groom name is required";
        if (!addStoryData.Bride.trim()) newError.Bride = "Bride name is required";
        if (!addStoryData.Content.trim()) newError.Content = "Content is required";
        if (!addStoryData?.image) newError.image = "Image is required";
        setErrors(newError);
        return Object.keys(newError).length === 0;
    }

    const SubmitHandle = async (e) => {
        e.preventDefault();

        if (!validate()) return;
        const formData = new FormData();
        formData.append("Groom", addStoryData.Groom);
        formData.append("Bride", addStoryData.Bride);
        formData.append("Content", addStoryData.Content);
        formData.append("image", addStoryData.image[0]);

        try {
            await CreateHappyStory(formData);
            setAddStoryData(resetForm);
            setImage(null);
            if (fileInputRef.current) fileInputRef.current.value = "";
            await onClose();
        } catch (error) {
            toast.error("Add story update failed");
        }
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setAddStoryData((prev) => ({
            ...prev, [name]: value
        }))
    }

    const handleDeleteImage = () => {
        setImage(null)
        setAddStoryData({ ...addStoryData, image: null })
        if (fileInputRef.current) fileInputRef.current.value = "";
    }

    return (
        <div className='addStory absolute top-0 flex justify-center items-center h-[100vh]  w-full '>
            <form onSubmit={SubmitHandle} className='w-[70%] mx-auto bg-white border border-red-300 shadow z-10 px-4 py-5 rounded-md' style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }}>
                <div className="heading flex justify-between py-4  items-start ">
                    <h4 className="text-4xl">Add Story</h4>
                    <div onClick={onClose} className="close relative top-2 right-2 text-xl">
                        <TfiClose />
                    </div>
                </div>

                <div className="grid grid-cols-2 py-2 gap-2">
                    <div>
                        <label className="" htmlFor="groom">Groom Name</label>
                        <input id="groom" name='Groom' value={addStoryData.Groom} onChange={handleOnChange} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]" placeholder='Enter Groom Name' />
                        {error && error.Groom && <p className=' text-sm text-red-500'>{error.Groom}</p>}
                    </div>
                    <div>
                        <label className="" htmlFor="bride">Bride Name</label>
                        <input id="bride" name='Bride' value={addStoryData.Bride} onChange={handleOnChange} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]" placeholder='Enter Bride Name' />
                        {error && error.Bride && <p className=' text-sm text-red-500'>{error.Bride}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 py-2">
                    <div>
                        <label className="" htmlFor="image">Add Image</label>
                        <input id="image" ref={fileInputRef} accept="image/*" onChange={handleImageChange} type="file" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]" />
                        {image && <div className='relative inline-block m-3' >
                            <img src={image} alt="Preview" className='w-40 h-40 rounded-lg ' />
                            <button type='button' onClick={handleDeleteImage} className='absolute  top-3 right-3 font-bold bg-red-600 text-xl text-white border border-none rounded-md cursor-pointer'><IoCloseCircleOutline /></button>
                        </div>}
                        {error && error.image && <p className=' text-sm text-red-500'>{error.image}</p>}
                    </div>
                </div>
                <div className="grid grid-cols-1 py-2">
                    <div>
                        <label className="" htmlFor="story">Describe Story</label>
                        <textarea rows={5} name='Content' value={addStoryData.Content} onChange={handleOnChange} id="story" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]" placeholder='Write here' />
                        {error && error.Content && <p className=' text-sm text-red-500'>{error.Content}</p>}
                    </div>
                </div>
                <div className="w-full mt-6">
                    <button type='submit' className="px-6 py-2 w-full leading-5 text-white transition-colors duration-200 transform bg-RedTheme rounded-md hover:bg-[#bb0404] focus:outline-none focus:bg-gray-600" disabled={loader} >
                        {loader ? <Loader /> : "Add Story"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddStory;