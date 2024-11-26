import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Blogs() {
    const {id} = useParams()
    return (
        <div className="w-[80%] mx-auto py-5">
            <div className="heading flex justify-center flex-col items-center text-center">
                <h2 className="text-5xl sm:text-7xl">Blogs</h2>
                <img src="../images/headingImg.png" alt="" className="w-64" />
            </div>
            <div className="blogs grid sm:grid-cols-2 grid-cols-1 gap-3 py-4 ">
                <Link to={`/bloginner/${id}`}> <div className="blog py-4">
                    <div className="blogImg flex justify-center">
                        <img src="https://image.wedmegood.com/resized-nw/450X650/wp-content/uploads/2024/11/Collage12.jpg" alt="" />
                    </div>
                    <div className="content p-4">
                        <div className="blogTitle text-center">
                            <h3 className='text-3xl'>  Dreamy Hilltop Wedding With A Radiant DIY Bridal Makeup Look!</h3>
                        </div>
                        <div className="date text-center py-2"> | 24 Nov 2023 |</div>
                        <div className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed rem expedita quod fugiat, optio nemo. Officia laborum asperiores ab accusamus quia alias, aut, reprehenderit assumenda maxime incidunt quaerat odit nisi!</div>
                    </div>
                </div></Link>
                <Link to={`/bloginner/${id}`}> <div className="blog py-4">
                    <div className="blogImg flex justify-center">
                        <img src="https://image.wedmegood.com/resized-nw/450X650/wp-content/uploads/2024/11/Collage12.jpg" alt="" />
                    </div>
                    <div className="content p-4">
                        <div className="blogTitle text-center">
                            <h3 className='text-3xl'>Khushio</h3>
                        </div>
                        <div className="date text-center py-2"> | 24 Nov 2023 |</div>
                        <div className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed rem expedita quod fugiat, optio nemo. Officia laborum asperiores ab accusamus quia alias, aut, reprehenderit assumenda maxime incidunt quaerat odit nisi!</div>
                    </div>
                </div></Link>
               
               
            </div>
        </div>
    )
}

export default Blogs
