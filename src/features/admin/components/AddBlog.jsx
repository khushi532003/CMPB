import Loader from '@/constant/loader'
import { TfiClose } from 'react-icons/tfi'
import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import { useLocation, useParams } from 'react-router-dom';

function AddBlog({ onClose }) {
    const { state } = useLocation();
    const { id } = useParams();
    const editor = useRef(null);
    const [content, setContent] = useState(state?.blogDesc ? state?.blogDesc : "");

    // Handle Jodit editor content change
    const handleEditorChange = (newContent) => {
        // Set the original HTML content for the editor
        setContent(newContent);

        // Update Formik field with the HTML content instead of plain text
        setFieldValue('blogDesc', newContent);
    };

    const config = useMemo(() => ({
        uploader: {
            insertImageAsBase64URI: true,
        },
        width: 900,
        height: 600,
        readonly: false,
        placeholder: 'Start typing...'
    }), []);

  return (
      <div className='addBlog relative top-[-100px] flex justify-center items-center h-[100vh]  w-full '>
          <form  className='w-[70%] mx-auto bg-white border border-red-300 shadow z-10 px-4 py-5 rounded-md' style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }}>
              <div className="heading flex justify-between py-4  items-start ">
                  <h4 className="text-4xl">Add Blog</h4>
                  <div onClick={onClose} className="close relative top-2 right-2 text-xl">
                      <TfiClose />
                  </div>
              </div>
              <div className="grid grid-cols-1 py-2 gap-2">
                  <div>
                      <label className="" htmlFor="title">Add Title</label>
                      <input id="title" name='Title' value="" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]" placeholder='Enter Title' />
                  </div>
              </div>
              <div className="grid grid-cols-1 py-2">
                  <div>
                      <label className="" htmlFor="image">Add Image</label>
                      <input id="image"  type="file" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]" />   
                  </div>
              </div>
              <div className="grid grid-cols-1 py-2">
                  <div>
                      <label className="" htmlFor="description">Blog Description</label>
                      <JoditEditor
                          ref={editor}
                          value={content}
                          config={config}
                          onChange={handleEditorChange}
                      />
                  </div>
              </div>
              <div className="w-full mt-6">
                  <button type='submit' className="px-6 py-2 w-full leading-5 text-white transition-colors duration-200 transform bg-RedTheme rounded-md hover:bg-[#bb0404] focus:outline-none focus:bg-gray-600" >Add Blog</button>
              </div>
          </form>
      </div>
  )
}

export default AddBlog;