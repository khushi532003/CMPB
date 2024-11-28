import Loader from '@/constant/loader';
import { TfiClose } from 'react-icons/tfi';
import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import { useLocation } from 'react-router-dom';
import { useBlogContext } from '@/AdminContext';
import { IoCloseCircleOutline } from 'react-icons/io5';

function AddBlog({ onClose }) {
    const { CreateBlog, loader } = useBlogContext();
    const { state } = useLocation();
    const editor = useRef(null);
    const fileInputRef = useRef(null);

    const [content, setContent] = useState(state?.blogDesc || "");
    const [image, setImage] = useState(null);
    const [error, setErrors] = useState({});
    const [addBlogData, setAddBlogData] = useState({
        title: "",
        alt: "",
        slug: "",
        description: "",
        image: null,
    });

    const resetBlogData = {
        title: "",
        alt: "",
        slug: "",
        description: "",
        image: null,
    };

    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        if (!imageFile) return;
        if (!imageFile.type.startsWith('image/')) {
            setErrors({ image: "Selected file is not an image." });
            return;
        }
        const imageUrl = URL.createObjectURL(imageFile);
        setImage(imageUrl);
        setAddBlogData({ ...addBlogData, image: imageFile });
        return () => URL.revokeObjectURL(imageUrl);
    };

    const validate = () => {
        const newError = {};
        if (!addBlogData.title.trim()) newError.title = "Title is required";
        if (!addBlogData.alt.trim()) newError.alt = "Alt is required";
        if (!addBlogData.slug.trim()) newError.slug = "Slug is required";
        if (!content.trim()) newError.description = "Description is required";
        if (!addBlogData.image) newError.image = "Image is required";
        setErrors(newError);
        return Object.keys(newError).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        console.log(addBlogData);
        const formData = new FormData();
        formData.append("title", addBlogData?.title);
        formData.append("alt", addBlogData?.alt);
        formData.append("slug", addBlogData?.slug);
        formData.append("description", content);
        formData.append("image", addBlogData?.image);

        try {
            await CreateBlog(formData);
            setAddBlogData(resetBlogData);
            setImage(null);
            if (fileInputRef.current) fileInputRef.current.value = "";
        } catch (error) {
            console.error("Failed to add blog:", error);
        }
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setAddBlogData((prev) => ({ ...prev, [name]: value }));
    };

    const handleDeleteImage = () => {
        setImage(null);
        setAddBlogData({ ...addBlogData, image: null });
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleEditorChange = (newContent) => {
        setContent(newContent.replace(/<\/?[^>]+(>|$)/g, ""));
    };

    const editorConfig = useMemo(() => ({
        uploader: { insertImageAsBase64URI: true },
        width: 900,
        height: 600,
        readonly: false,
        placeholder: 'Start typing...',
    }), []);

    return (
        <div className="addBlog flex justify-center items-center h-screen w-full">
            <form
                onSubmit={handleSubmit}
                className="w-3/4 bg-white border absolute top-20 border-red-300 shadow px-4 py-5 rounded-md"
            >
                <div className="heading flex justify-between py-4 items-start">
                    <h4 className="text-4xl">Add Blog</h4>
                    <button type="button" onClick={onClose} className="text-xl">
                        <TfiClose />
                    </button>
                </div>

                <div className="mb-4">
                    <label htmlFor="title" className="block">Title</label>
                    <input
                        id="title"
                        name="title"
                        value={addBlogData.title}
                        onChange={handleOnChange}
                        type="text"
                        className="w-full px-4 py-2 mt-2 border rounded-md"
                        placeholder="Enter Title"
                    />
                    {error.title && <p className="text-xs text-red-500">{error.title}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="alt" className="block">Alt</label>
                        <input
                            id="alt"
                            name="alt"
                            value={addBlogData.alt}
                            onChange={handleOnChange}
                            type="text"
                            className="w-full px-4 py-2 mt-2 border rounded-md"
                            placeholder="Enter Alt Text"
                        />
                        {error.alt && <p className="text-xs text-red-500">{error.alt}</p>}
                    </div>
                    <div>
                        <label htmlFor="slug" className="block">Slug</label>
                        <input
                            id="slug"
                            name="slug"
                            value={addBlogData.slug}
                            onChange={handleOnChange}
                            type="text"
                            className="w-full px-4 py-2 mt-2 border rounded-md"
                            placeholder="Enter Slug"
                        />
                        {error.slug && <p className="text-xs text-red-500">{error.slug}</p>}
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="image" className="block">Image</label>
                    <input
                        id="image"
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="block w-full px-4 py-2 mt-2 border rounded-md"
                    />
                    {image && (
                        <div className="relative mt-4">
                            <img src={image} alt="Preview" className="w-40 h-40 rounded-lg" />
                            <button
                                type="button"
                                onClick={handleDeleteImage}
                                className="absolute top-2 right-2 text-red-600 text-2xl"
                            >
                                <IoCloseCircleOutline />
                            </button>
                        </div>
                    )}
                    {error.image && <p className="text-xs text-red-500">{error.image}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block">Blog Description</label>
                    <JoditEditor
                        ref={editor}
                        value={content}
                        config={editorConfig}
                        onChange={handleEditorChange}
                    />
                    {error.description && <p className="text-xs text-red-500">{error.description}</p>}
                </div>
                <button
                    type="submit"
                    className="w-full px-6 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 disabled:bg-gray-400"
                    disabled={loader}
                >
                    {loader ? <Loader /> : "Add Blog"}
                </button>
            </form>
        </div>
    );
}

export default AddBlog;