import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { useChurayePalContext, usePackageContext } from '@/context';

function Home() {

  const { programme } = usePackageContext();
  const { videoURLData } = useChurayePalContext();
  // console.log(videoURLData);
  

  return (
    <div>

      {/* Banner section start  */}
      <section className="mainBanner">
        <img src="../images/banner3.jpg" alt="Chat Mangni Pat Byah" className='w-full object-cover' />
      </section>
      {/* Banner section end  */}

      {/* Testimonial section start  */}
      <section className="testimonial py-5 w-[80%] mx-auto">
        <div className="heading flex justify-center flex-col items-center text-center">
          <h2 className="text-6xl sm:text-7xl">Churaye hue pal</h2>
          <img src="../images/headingImg.png" alt="" className="w-64" />
        </div>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="mySwiper"
        >

          {videoURLData?.map((item, i) => <SwiperSlide key={i} >
            <div className="pal py-10 relative">
              <iframe width="100%" className='sm:rounded-full' height="350" src={item?.VideoURL} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> 
              <div className="petal hidden sm:block absolute top-4 left-0">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/036/296/405/small_2x/ai-generated-green-floral-watercolor-illustration-for-wedding-invitation-botanical-frame-png.png" alt="" />
              </div>
              <div className="petal hidden sm:block absolute top-4 right-0 rotate-180">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/036/296/405/small_2x/ai-generated-green-floral-watercolor-illustration-for-wedding-invitation-botanical-frame-png.png" alt="" />
              </div>
            </div>

          </SwiperSlide>)}
        

        </Swiper>
      </section>
      {/* Testimonial section end  */}

      {/* Why choose us section start  */}
      <section className="whyus py-5 flex justify-center items-center" style={{
        backgroundImage: "url(https://img.freepik.com/free-vector/cute-watercolor-leaves-frame-with-watercolor-background_1361-3335.jpg?semt=ais_hybrid)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="grid grid-cols-1 py-4  sm:grid-cols-3 gap-6 w-full sm:w-[80%] mx-auto">
          <div className="bg-white relative mx-3 rounded-md shadow p-4  text-center flex justify-center items-center flex-col">
            <img className="w-14 mb-4 absolute top-[-30px]" src="https://rn53themes.net/themes/matrimo/images/icon/prize.png" alt="" />
            <h3 className="text-3xl font-semibold mt-5">Genuine profiles</h3>
            <p className="text-lg py-2">The most trusted wedding matrimony brand</p>
          </div>
          <div className=" bg-white relative rounded-md mx-3 shadow p-4 text-center flex justify-center items-center flex-col">
            <img className="w-14 mb-4 absolute top-[-30px]" src="https://rn53themes.net/themes/matrimo/images/icon/trust.png" alt="" />
            <h3 className="text-3xl font-semibold mt-5">Most trusted</h3>
            <p className="text-lg py-2">The most trusted wedding matrimony brand</p>
          </div>
          <div className=" bg-white relative rounded-md mx-3 shadow p-4 text-center flex justify-center items-center flex-col">
            <img className="w-14 mb-4 absolute top-[-30px]" src="https://rn53themes.net/themes/matrimo/images/icon/rings.png" alt="" />
            <h3 className="text-3xl font-semibold mt-5">2000+ weddings</h3>
            <p className="text-lg py-2">The most trusted wedding matrimony brand</p>
          </div>
        </div>
      </section>
      {/* Why choose us section end  */}

      {/* Wedding Theme section start  */}
      <section className="theme py-10 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url(https://r2.erweima.ai/imgcompressed/compressed_cdec15e7b3c17fa59a279b02db89d69d.webp)" }}>
        <div className="block sm:flex justify-between gap-3 px-3 items-center">
          <div className="sm:w-[20%] w-full">
            <div className="heading"><h2 className="text-6xl sm:text-7xl text-[#BB1A04]">Choose <br /> Wedding <br /> Themes</h2></div>
          </div>
          <div className="themes w-full sm:w-[80%]">
            <div className=" grid-cols-1 grid sm:grid-cols-3 gap-10">
              <div className="theme ">
                <div className="flex flex-col items-center">
                  <div className="w-full">
                    <img className="rounded-t-full h-96 object-cover w-full" src="https://luxaus.au/wp-content/uploads/2023/03/kerala-1024x683.jpeg" alt="" /></div>
                  <div className="themeName pt-4 text-center"><h3 className=" text-5xl">Destination</h3> </div>
                </div>
              </div>
              <div className="theme ">
                <div className="flex flex-col items-center">
                  <div className="w-full">
                    <img className="rounded-t-full h-96 object-cover w-full" src="https://images.shaadisaga.com/shaadisaga_production/photos/pictures/005/385/981/new_medium/307137831_1218744365589893_7565817865238985355_n.jpg?1669191321" alt="" /></div>
                  <div className="themeName pt-4 text-center"><h3 className=" text-5xl">Cultural</h3> </div>
                </div>
              </div>
              <div className="theme ">
                <div className="flex flex-col items-center">
                  <div className="w-full">
                    <img className="rounded-t-full h-96 object-cover w-full" src="https://themaharanidiaries.com/wp-content/uploads/2018/03/5-Steps-to-Planning-a-Modern-Wedding-Lin-Jirsa-Photography-The-Maharani-Diaries.jpg" alt="" /></div>
                  <div className="themeName pt-4 text-center"><h3 className=" text-5xl">Modern</h3> </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* Wedding Theme section end  */}

      {/* Process section start  */}
      <section className="process py-10">
        <div className="heading flex justify-center flex-col items-center text-center">
          <h2 className="text-6xl sm:text-7xl">Wedding Process</h2>
          <img src="../images/headingImg.png" alt="" className="w-64 object-cover" />
        </div>
        <div className="process py-4">
          <div className="grid grid-cols-3 gap-2 mx-auto w-full sm:w-[60%]">
            <div className="px-2 flex items-center">
              <div className="icon">
                <img src="../images/processIcons/register.png" alt="" /> 
              </div>
            </div>
            <div className="relative px-2 flex  justify-center mx-auto">
              <div className="before:content-[''] before:absolute before:w-px before:bg-[#493628] before:h-full before:left-1/2 before:top-0"></div>
              <div className="absolute w-10 h-10 bg-[#DEAC80] text-white text-center leading-10 rounded-full left-1/2 transform -translate-x-1/2 -translate-y-2">1</div>
            </div>
            <div className="px-2">
              <div className='flex flex-col justify-center h-full'>
                <h3 className="text-2xl sm:text-3xl font-semibold py-3">Register</h3>
                <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mx-auto w-full sm:w-[60%]">
            <div className="px-2">
              <div className='flex flex-col justify-center h-full'>
                <h3 className="text-2xl sm:text-3xl font-semibold py-3">Manage Profile</h3>
                <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
              </div>
            </div>
            <div className="relative px-2 flex  justify-center mx-auto">
              <div className="before:content-[''] before:absolute before:w-px before:bg-[#493628] before:h-full before:left-1/2 before:top-0"></div>
              <div className="absolute w-10 h-10 bg-[#DEAC80] text-white text-center leading-10 rounded-full left-1/2 transform -translate-x-1/2 -translate-y-2">2</div>
            </div>
            <div className="px-2 flex items-center">
              <div className="icon ">
                <img src="../images/processIcons/manageProfile.png" alt="" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mx-auto w-full sm:w-[60%]">
            <div className="px-2 flex items-center">
              <div className="icon">
                <img src="../images/processIcons/attendCall.png" alt="" />
              </div>
            </div>
            <div className="relative px-2 flex  justify-center mx-auto">
              <div className="before:content-[''] before:absolute before:w-px before:bg-[#493628] before:h-full before:left-1/2 before:top-0"></div>
              <div className="absolute w-10 h-10 bg-[#DEAC80] text-white text-center leading-10 rounded-full left-1/2 transform -translate-x-1/2 -translate-y-2">3</div>
            </div>
            <div className="px-2">
              <div className='flex flex-col justify-center h-full'>
                <h3 className="text-2xl sm:text-3xl font-semibold py-3">Attend Call</h3>
                <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mx-auto w-full sm:w-[60%]">
            <div className="px-2">
              <div className='flex flex-col justify-center h-full'>
                <h3 className="text-2xl sm:text-3xl font-semibold py-3">Purchase Package</h3>
                <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
              </div>
            </div>
            <div className="relative px-2 flex  justify-center mx-auto">
              <div className="before:content-[''] before:absolute before:w-px before:bg-[#493628] before:h-full before:left-1/2 before:top-0"></div>
              <div className="absolute w-10 h-10 bg-[#DEAC80] text-white text-center leading-10 rounded-full left-1/2 transform -translate-x-1/2 -translate-y-2">4</div>
            </div>
            <div className="px-2 flex items-center">
              <div className="icon ">
                <img src="../images/processIcons/package.png" alt="" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mx-auto w-full sm:w-[60%]">
            <div className="px-2 flex items-center">
              <div className="icon">
                <img src="../images/processIcons/meeting.png" alt="" />
              </div>
            </div>
            <div className="relative px-2 flex  justify-center mx-auto">
              <div className="before:content-[''] before:absolute before:w-px before:bg-[#493628] before:h-full before:left-1/2 before:top-0"></div>
              <div className="absolute w-10 h-10 bg-[#DEAC80] text-white text-center leading-10 rounded-full left-1/2 transform -translate-x-1/2 -translate-y-2">5</div>
            </div>
            <div className="px-2">
              <div className='flex flex-col justify-center h-full'>
                <h3 className="text-2xl sm:text-3xl font-semibold py-3">Fix Meeting</h3>
                <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mx-auto w-full sm:w-[60%]">
            <div className="px-2">
              <div className='flex flex-col justify-center h-full'>
                <h3 className="text-2xl sm:text-3xl font-semibold py-3">Get Marry</h3>
                <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
              </div>
            </div>
            <div className="relative px-2 flex  justify-center mx-auto">
              <div className="before:content-[''] before:absolute before:w-px before:bg-[#493628] before:h-full before:left-1/2 before:top-0"></div>
              <div className="absolute w-10 h-10 bg-[#DEAC80] text-white text-center leading-10 rounded-full left-1/2 transform -translate-x-1/2 -translate-y-2">6</div>
            </div>
            <div className="px-2 flex items-center">
              <div className="icon ">
                <img src="../images/processIcons/marry.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Process section end  */}

      {/* Packages section start  */}
      <section className="packages py-5">
        <div className="block sm:flex justify-between gap-3 px-3 items-center">
          <div className="themes w-full sm:w-[60%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-14">
              {programme?.map((item) => (
                <div key={item?._id} className="theme">
                  <div className="flex flex-col items-center">
                    <div className="package  h-[550px] border-2 flex flex-col justify-center items-center text-center border-yellow-400 p-10 rounded-b-full rounded-t-full">
                      <h2 className="text-4xl">Program Package</h2>

                      <h3 className="text-5xl py-3 font-semibold text-yellow-500">₹ {item?.amount} /-</h3>
                      <div className="programme py-2 text-2xl font-semibold">{item?.eventName}</div>
                      <p className="py-2">{item?.description}</p>
                      <div className="programmeDetails mb-4">
                        <div className="state py-2 text-lg">
                          <strong>Location :</strong> {item?.state}
                        </div>
                        <div className="state py-2 text-lg">
                          <strong>Venue :</strong> {item?.venues}
                        </div>
                        <div className="state py-2 text-lg">
                          <strong>Date :</strong> {item?.availableDates}
                        </div>
                      </div>
                      <button
                        className="bg-[#BB1A04] text-white py-2 px-5 border-none cursor-pointer outline-none text-lg rounded-full shadow-md transition-all duration-500 hover:shadow-gray-500"
                        aria-label={`Book ${item?.name} package`}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="theme ">
                <div className="flex flex-col items-center ">
                  <div className="package h-[550px] border-2 flex flex-col justify-center items-center text-center border-yellow-400 p-10 rounded-b-full rounded-t-full">
                    <h2 className="text-4xl">Registration  Package </h2>

                    <h3 className="text-5xl py-3 font-semibold text-yellow-500">₹ 20000 /-</h3>
                    <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quas quisquam veniam nam nisi quo? Nihil aspernatur labore nisi quibusdam</p>

                    <div className="pointss mb-4">
                      <ul>
                        <li className="flex gap-2 items-center py-1">
                          <img className="w-10 rotate-45 scale-x-[-1]" src="../images/leaf.png" alt="" />
                          Free Counselling
                        </li>
                        <li className="flex gap-2 items-center py-1">
                          <img className="w-10 rotate-45 scale-x-[-1]" src="../images/leaf.png" alt="" />
                          Get rid of all your Q&A's
                        </li>

                        <li className="flex gap-2 items-center py-1">
                          <img className="w-10 rotate-45 scale-x-[-1]" src="../images/leaf.png" alt="" />
                          Get rid of all your Q&A's
                        </li>
                      </ul>
                    </div>
                    <button className="bg-[#BB1A04] text-white py-2 px-5 border-none cursor-pointer outline-none text-lg rounded-full shadow-md transition-all duration-500 hover:shadow-gray-500 ">
                      Register Now
                    </button>

                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="w-full sm:w-[40%] flex justify-center items-center bg-cover bg-center h-[65vh] sm:h-[100vh] " style={{ backgroundImage: "url(https://static.vecteezy.com/system/resources/previews/024/554/091/non_2x/gold-geometric-floral-greenery-leaves-frames-free-png.png)" }}>
            <div className="heading text-center"><h2 className="text-6xl sm:text-7xl text-[#BB1A04]">Pricing <br />Plans</h2>
              <img src="../images/headingImg.png" alt="" className="w-64" />
            </div>
          </div>
        </div>
      </section>
      {/* Packages section end  */}

      {/* Gallery section start  */}
      <section className="gallery py-5">
        <div className="heading flex justify-center flex-col items-center text-center">
          <h2 className="text-6xl sm:text-7xl">Gallery</h2>
          <img src="../images/headingImg.png" alt="" className="w-64" />
        </div>
        <div className="weddingImages py-4 px-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="sec">
              <img src="https://images.pexels.com/photos/18253230/pexels-photo-18253230/free-photo-of-traditional-indian-wedding-couple.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
              <img src="https://images.pexels.com/photos/7153798/pexels-photo-7153798.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="mt-3" />
            </div>
            <div className="sec">
              <img src="https://images.pexels.com/photos/9392445/pexels-photo-9392445.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
              <img className="mt-3" src="https://images.pexels.com/photos/15698720/pexels-photo-15698720/free-photo-of-newlywed-indian-couple.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
              <img src="https://images.pexels.com/photos/3871582/pexels-photo-3871582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="mt-3" />
            </div>
            <div className="sec">
              <img src="https://images.pexels.com/photos/20254417/pexels-photo-20254417/free-photo-of-indian-wedding.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
              <img className="mt-3" src="https://images.pexels.com/photos/19439647/pexels-photo-19439647/free-photo-of-traditional-wedding-couple-walking-on-pavement.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
            </div>
            <div className="sec">
              <img src="https://images.pexels.com/photos/28210866/pexels-photo-28210866/free-photo-of-a-couple-in-traditional-indian-attire-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
              <img className="mt-3" src="https://images.pexels.com/photos/28200149/pexels-photo-28200149/free-photo-of-dancing-with-joy-at-a-wedding-celebration.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* Gallery section end  */}

    </div>
  )
}

export default Home;