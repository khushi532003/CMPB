import React from 'react'

function About() {
  return (
    <div>
      {/* Banner section start  */}
      <section className="mainBanner">
        <img src="../images/banner.jpg" alt="Chat Mangni Pat Byah" className='w-full object-cover' />
      </section>
      {/* Banner section end  */}

      {/* About section start  */}
      <section className="about py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pe-4">
          <div className="aboutImg bg-cover h-[350px] sm:h-[500px] bg-right rounded-r-3xl w-[80%]" style={{ backgroundImage: "url(https://akshitphotography.com/wp-content/uploads/2023/08/15-1-scaled.jpg)" }}>

          </div>
          <div className="aboutContent flex flex-col justify-center ps-5 sm:ps-0">
            <h2 className='text-7xl ps-10'>About Us</h2>
            <img src="../images/headingImg.png" alt="" className="w-64" />
            <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur facilis aut dolores earum natus consectetur ratione blanditiis nam minus. Quae expedita eligendi blanditiis consectetur velit aliquid omnis placeat facere, itaque fuga dignissimos veritatis ab, cum autem odit tempora nobis illum sequi commodi ratione est laboriosam! Veniam assumenda expedita qui rem, ea cum tenetur iste. Rerum molestias sint quisquam tempora et?</p>
          </div>
        </div>
      </section>
      {/* About section end  */}

      {/* Service section start  */}
      <section className="services py-5">
        <div className="heading flex justify-center flex-col items-center text-center">
          <h2 className="text-6xl sm:text-8xl">Services Includes</h2>
          <img src="../images/headingImg.png" alt="" className="w-64" />
        </div>
        <div className="service py-5">
          <div className='block sm:flex gap-7 w-full px-4'>
            <div className="functions block sm:flex gap-3 w-full sm:w-[70%] items-center">
              <div className="function py-2">
                <img className='rounded-t-full h-96 object-cover w-full' src="https://images.pexels.com/photos/19346381/pexels-photo-19346381/free-photo-of-family-on-a-traditional-indian-celebration.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              </div>
              <div className="function py-2">
                <img className='rounded-t-full h-96 object-cover w-full' src="https://symphonyevents.com.au/wp-content/uploads/2023/06/Mehndi-626-scaled.jpg" alt="" />
              </div>
              <div className="function py-2">
                <img className='rounded-t-full h-96 object-cover w-full' src="https://i.ytimg.com/vi/bdoqUbWbrpA/maxresdefault.jpg" alt="" />
              </div>
            </div>
            <div className="functionName w-full sm:w-[30%] flex flex-col justify-center text-center bg-cover bg-center h-[65vh] sm:h-[80vh]" style={{ backgroundImage: "url(https://static.vecteezy.com/system/resources/previews/024/554/091/non_2x/gold-geometric-floral-greenery-leaves-frames-free-png.png)" }}>
              <h3 className='text-5xl sm:text-6xl'>Haldi</h3>
              <h3 className='text-5xl sm:text-6xl py-4 ps-20'>Mehendi</h3>
              <h3 className='text-5xl sm:text-6xl'>Sangeet</h3>
            </div>
          </div>
          <div className='block sm:flex gap-7 w-full px-4'>
            <div className="functionName  w-full sm:w-[30%] flex flex-col justify-center text-center bg-cover bg-center h-[65vh] sm:h-[80vh]" style={{ backgroundImage: "url(https://static.vecteezy.com/system/resources/previews/024/554/091/non_2x/gold-geometric-floral-greenery-leaves-frames-free-png.png)" }}>
              <h3 className='text-5xl sm:text-6xl'>Cocktail</h3>
              <h3 className='text-5xl sm:text-6xl py-4 pe-20'>Wedding</h3>
              <h3 className='text-5xl sm:text-6xl'>Reception</h3>
            </div>
            <div className="functions block sm:flex gap-3 w-full sm:w-[70%] items-center">
              <div className="function  py-2">
                <img className='rounded-t-full h-96 object-cover w-full' src="https://images.wedmegood.com/wp-content/uploads/2018/10/Evening-function-130.jpg" alt="" />
              </div>
              <div className="function py-2">
                <img className='rounded-t-full h-96 object-cover w-full' src="https://images.shaadisaga.com/shaadisaga_production/photos/pictures/004/026/414/new_medium/284912622_537363174599565_8313416739499186466_n.jpg?1654403346" alt="" />
              </div>
              <div className="function py-2">
                <img className='rounded-t-full h-96 object-cover w-full' src="https://cdn0.weddingwire.in/article-gallery-o/00000/3_2/960/jpg/articulos-india/2019/non-troncales/indian-traditional-games-list/pixelstory-in-indian-traditional-games-list-add-a-little-amusement-to-your-fun-yet-hectic-wedding-functions.jpeg" alt="" />
              </div>
            </div>
          </div>
          <div className='block sm:flex gap-7 w-full px-4'>
            <div className="functions block sm:flex gap-3 w-full sm:w-[70%] items-center">
              <div className="function  py-2">
                <img className='rounded-t-full h-96 object-cover w-full' src="https://www.fabcouture.in/s/5a6ef16301bd210c588e3577/65eab13ca816474c69cf0631/indian-wedding-dresses-640x640.jpg" alt="" />
              </div>
              <div className="function py-2">
                <img className='rounded-t-full h-96 object-cover w-full' src="https://media.istockphoto.com/id/1335303339/photo/wedding-photographer.jpg?s=612x612&w=0&k=20&c=81jJuqbAvlDRQTxsfwDzoellrbgFuDDAOjIbrBfnu4U=" alt="" />
              </div>
              <div className="function py-2">
                <img className='rounded-t-full h-96 object-cover w-full' src="https://www.weddingsutra.com/images/gyanjee-caterers-thumb-700x452.jpg?%3E" alt="" />
              </div>
            </div>
            <div className="functionName w-full sm:w-[30%] flex flex-col justify-center text-center bg-cover bg-center h-[65vh] sm:h-[80vh]" style={{ backgroundImage: "url(https://static.vecteezy.com/system/resources/previews/024/554/091/non_2x/gold-geometric-floral-greenery-leaves-frames-free-png.png)" }}>
              <h3 className='text-5xl sm:text-6xl'>Clothes</h3>
              <h3 className='text-5xl sm:text-6xl py-4 '>Photographers</h3>
              <h3 className='text-5xl sm:text-6xl'>Caterers</h3>
            </div>
          </div>
        </div>
      </section>
      {/* Service section end  */}
    </div>
  )
}

export default About;