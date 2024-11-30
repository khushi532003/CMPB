import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { useAuthContext, useChurayePalContext, usePackageContext } from '@/context';
import { AxiosHandler } from '@/config/Axios.config';
import { toast } from 'react-toastify';
import Loader from '@/constant/loader';
import { useNavigate } from 'react-router-dom';
import EventModal from '../components/EventModal';

function Home() {

  const { programme, GetProgramme, GetPackage, packageData } = usePackageContext();
  const { videoURLData } = useChurayePalContext();
  const { token, member, loader } = useAuthContext();
  const [modal, setModal] = useState(false);
  const navigate = useNavigate()

  const MemberID = localStorage.getItem("MemberID");

  

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script")
      script.src = "https://checkout.razorpay.com/v1/checkout.js"
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }

  const handlePayment = async (e,) => {
    navigate("/verify_account")

    try {
      let res
      if (e.target.id === programme?._id) {
        const amount = programme?.amount
        res = await AxiosHandler.post(`/payment/events?eventid=${programme?._id}&memberid=${MemberID}`, { amount: `${amount}` });
      } else if (e.target.id === packageData?._id) {
        res = await AxiosHandler.post(`/payment/package?memberid=${MemberID}`, {
          amount: `${packageData?.amount}`
        })
      }

      const options = {
        key: import.meta.env.VITE_RAZOR_KEY,
        amount: res?.data?.order?.amount,
        currency: res?.data?.order?.currency,
        name: e.target.id === programme?._id ? "CMPB Event" : "Registration Package",
        description: "",
        image: "",
        order_id: res?.data?.order?.id,
        handler: async (response) => {


          const paymentDetails = {
            razorpayOrderID: response?.razorpay_order_id,
            RazorPayPaymentID: response?.razorpay_payment_id,

          }
          const registrationPayment = {
            PaymentID: response?.razorpay_payment_id,
            OrderID: response?.razorpay_order_id,
            amount: packageData?.amount
          }

          if (response && programme?._id === e.target.id) {
            const eventRes = await AxiosHandler.post(`/events/bookuser/${programme?._id}`, paymentDetails);
            toast.success(eventRes?.data?.message || "Event Booked Successfull")
          }
          else if (response && packageData?._id === e.target.id) {
            const registerRes = await AxiosHandler.put("/user/paymentUpdate", registrationPayment
            );
            console.log(registerRes)
            toast.success(registerRes?.data?.message || "Regiteration Successfull")
          }
        },

        prefill: {
          name: "CMPB",
          email: "abc2gmail.com",
          contact: "9858668646",
        },
        notes: {
          address: "Pitampura , Delhi",
        },
        theme: {
          color: "#fff"
        },
      }

      if (typeof window !== "undefined" && window.Razorpay) {
        const razpopup = new window.Razorpay(
          options
        )
        razpopup.open()
      } else {
        console.log("Razorpay error");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message === "Invalid Token or Token exipre" ? navigate("/login") : error?.response?.data?.message);
    }
  }

  useEffect(() => {
      const timer = setTimeout(() => {
        setModal(true); 
      }, 5000);
      return () => clearTimeout(timer);

  }, []); 

  useEffect(() => {
    loadRazorpayScript();
    GetProgramme();
    GetPackage();
  }, [])


  return (
    <div>

      {modal ? <EventModal onClose={() => setModal(false)} /> : ""}

      {/* Banner section start  */}
      <section className="mainBanner">
        <img src="../images/banner3.webp" alt="Chat Mangni Pat Byah" className='w-full object-cover' />
      </section>
      {/* Banner section end  */}

      {/* Testimonial section start  */}
      <section className="testimonial py-5 w-[80%] mx-auto">
        <div className="heading flex justify-center flex-col items-center text-center">
          <h2 className="text-5xl sm:text-7xl">Churaye hue pal</h2>
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
              <iframe width="100%" className='sm:rounded-full' height="350" src={loader ? <Loader /> : item?.VideoURL} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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
        backgroundImage: "url(./images/wcu.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="grid grid-cols-1 py-4  sm:grid-cols-3 gap-2 w-full sm:w-[80%] mx-auto">
          <div className="bg-white relative mx-3 rounded-md shadow p-4  text-center flex justify-center items-center flex-col">
            <img className="w-20 mb-4 absolute top-[-50px]" src="../images/wcu/Lifetime.png" alt="" />
            <h3 className="text-2xl font-semibold mt-5">Lifetime Experience</h3>
            <p className="text-sm py-2">Our team is dedicated to providing you with a truly unforgettable experience. Feel the joy of a lasting, meaningful connection with your partner every day.</p>
          </div>
          <div className=" bg-white relative rounded-md mx-3 shadow p-4 text-center flex justify-center items-center flex-col">
            <img className="w-24 mb-4 absolute top-[-50px]" src="../images/wcu/2.png" alt="" />
            <h3 className="text-2xl font-semibold mt-5">Relationships Test</h3>
            <p className="text-sm py-2">Under the careful guidance of Paras Bhai Guruji, each relationship is thoughtfully assessed, fostering a strong foundation of trust between you and your partner.</p>
          </div>
          <div className=" bg-white relative rounded-md mx-3 shadow p-4 text-center flex justify-center items-center flex-col">
            <img className="w-20 mb-4 absolute top-[-50px]" src="../images/wcu/CompabilityIcon.png" alt="" />
            <h3 className="text-2xl font-semibold mt-5">Compatibility Check</h3>
            <p className="text-sm py-2">To ensure a perfect match, we conduct thorough horoscope compatibility checks before pairing. All traditional customs are carefully observed for instant engagement and marriage.</p>
          </div>
        </div>
      </section>
      {/* Why choose us section end  */}

      {/* Wedding Theme section start  */}
      <section className="theme py-10 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url(https://r2.erweima.ai/imgcompressed/compressed_cdec15e7b3c17fa59a279b02db89d69d.webp)" }}>
        <div className="block sm:flex justify-between gap-3 px-3 items-center">

          <div className="themes w-full ">
            <div className=" grid-cols-1 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
              <div className="flex items-center">
                <div className="heading"><h2 className="text-5xl sm:text-7xl text-[#BB1A04]">Choose <br /> Wedding <br /> Theme</h2></div>
              </div>
              <div className="theme ">
                <div className="flex flex-col items-center">
                  <div className="w-full">
                    <img className="rounded-t-full h-96 object-cover w-full" src="./images/themes/destination.webp" alt="" /></div>
                  <div className="themeName pt-4 text-center"><h3 className=" text-5xl">Destination</h3> </div>
                </div>
              </div>
              <div className="theme ">
                <div className="flex flex-col items-center">
                  <div className="w-full">
                    <img className="rounded-t-full h-96 object-cover w-full" src="./images/themes/cultural.webp" alt="" /></div>
                  <div className="themeName pt-4 text-center"><h3 className=" text-5xl">Cultural</h3> </div>
                </div>
              </div>
              <div className="theme ">
                <div className="flex flex-col items-center">
                  <div className="w-full">
                    <img className="rounded-t-full h-96 object-cover w-full" src="./images/themes/modern.webp" alt="" /></div>
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
          <h2 className="text-5xl sm:text-7xl">Wedding Process</h2>
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
                <p className="text-sm">Register on our website today to share more about yourself and let us get to know you better. With a few simple steps, you’ll be all setup. </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mx-auto w-full sm:w-[60%]">
            <div className="px-2">
              <div className='flex flex-col justify-center h-full'>
                <h3 className="text-2xl sm:text-3xl font-semibold py-3">Manage Profile</h3>
                <p className="text-sm">Remember to keep your profile updated, just like you would for your social media, so we can stay in touch with any changes.
                </p>
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
                <p className="text-sm">Within 48 hours of registering, our Chat Mangni Pat Byaah team will reach out to you.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mx-auto w-full sm:w-[60%]">
            <div className="px-2">
              <div className='flex flex-col justify-center h-full'>
                <h3 className="text-2xl sm:text-3xl font-semibold py-3">Purchase Package</h3>
                <p className="text-sm">Browse through our packages and select the one that suits you best, as you start this exciting new chapter.</p>
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
                <p className="text-sm"> Here we fixed a personal meeting with Shri Paras Bhai Guruji where he will verify your Kundali and discuss your life goals and aspirations.</p>
              </div>
              
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mx-auto w-full sm:w-[60%]">
            <div className="px-2">
              <div className='flex flex-col justify-center h-full'>
                <h3 className="text-2xl sm:text-3xl font-semibold py-3">Get Marry</h3>
                <p className="text-sm">Chat Mangni Pat Byaah is here to support you in this important journey. It’s our commitment to help you find the right life partner and ensure a joyful, harmonious married life ahead.</p>
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
      <section className="packages py-5" id='packages'>
        <div className="block md:flex  justify-between gap-3 px-3 items-center">
          <div className="themes w-full md:w-[60%]">
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-14">
              {programme && <div className="theme">
                <div className="flex flex-col items-center w-full">
                  <div className="package  lg:h-[600px] border-2 w-full flex flex-col justify-center items-center text-center border-yellow-400 p-10 rounded-b-full rounded-t-full">
                    <h2 className="text-4xl">Programme Package</h2>
                    <h2 className="text-5xl py-3 font-semibold text-yellow-500">₹{programme?.amount}  /-</h2>
                    <div className="programme py-2 text-2xl font-semibold">{programme?.eventName}</div>
                    <p className="py-2">{programme?.description}</p>
                    <div className="programmeDetails mb-4">
                      <div className="state py-2 text-lg">
                        <strong>Location :</strong>{programme?.state}
                      </div>
                      {member === "true" ? <div className="state py-2 text-lg">
                        <strong>Venue :</strong> {programme?.venues}
                      </div> : ""}
                      <div className="state py-2 text-lg">
                        <strong>Date  :</strong> {programme?.availableDates}
                      </div>
                    </div>
                    <button id={programme?._id} type='button' onClick={(e) => handlePayment(e)}
                      className="bg-RedTheme text-white py-2 px-5 border-none cursor-pointer outline-none text-lg rounded-full shadow-md transition-all duration-500 hover:shadow-gray-500"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>}

              {packageData && <div className="theme ">
                <div className="flex flex-col items-center w-full">
                  <div className="package lg:h-[600px] border-2 w-full flex flex-col justify-center items-center  border-yellow-400 p-10 rounded-b-full rounded-t-full">
                    <h2 className="text-4xl">Registration  Package </h2>

                    <h2 className="text-5xl py-3 font-semibold text-yellow-500">₹ {packageData?.amount} /-</h2>
                    <p className="py-2 text-center text-sm">Easy registration facility with complete information.Guidance through phone calls, WhatsApp, or personal meetings if required.
                    </p>

                    <div className="pointss mb-4">
                      <ul>
                        <li className="flex gap-2 items-center py-1 text-sm">
                          <img className="w-8 rotate-45 scale-x-[-1]" src="../images/leaf.png" alt="" />
                          Assistance in finding quick and right marriage combinations.
                        </li>
                        <li className="flex gap-2 items-center py-1 text-sm">
                          <img className="w-8 rotate-45 scale-x-[-1]" src="../images/leaf.png" alt="" />
                          Special Kundli matching service by Shri Paras Bhai Guruji
                        </li>

                        <li className="flex gap-2 items-center py-1 text-sm">
                          <img className="w-8 rotate-45 scale-x-[-1]" src="../images/leaf.png" alt="" />
                          Guidance and consultation in every decision related to marriage
                        </li>
                        <li className="flex gap-2 items-center py-1 text-sm">
                          <img className="w-8 rotate-45 scale-x-[-1]" src="../images/leaf.png" alt="" />
                          The harmony of both the families will be taken care of in the marriage.

                        </li>
                      </ul>
                    </div>
                    <button type='button' id={packageData?._id} onClick={(e) => handlePayment(e)} className="bg-[#BB1A04] text-white py-2 px-5 border-none cursor-pointer outline-none text-lg rounded-full shadow-md transition-all duration-500 hover:shadow-gray-500 ">
                      Register Now
                    </button>

                  </div>
                </div>
              </div>}

            </div>
          </div>
          <div className="w-full md:w-[40%] flex justify-center items-center bg-cover bg-center h-[65vh] sm:h-[100vh] " style={{ backgroundImage: "url(https://static.vecteezy.com/system/resources/previews/024/554/091/non_2x/gold-geometric-floral-greenery-leaves-frames-free-png.png)" }}>
            <div className="heading text-center"><h2 className="text-5xl sm:text-7xl text-[#BB1A04]">Pricing <br />Plans</h2>
              <img src="../images/headingImg.png" alt="" className="w-64" />
            </div>
          </div>
        </div>
      </section>
      {/* Packages section end  */}

      {/* Gallery section start  */}
      <section className="gallery py-5">
        <div className="heading flex justify-center flex-col items-center text-center">
          <h2 className="text-5xl sm:text-7xl">Gallery</h2>
          <img src="../images/headingImg.png" alt="" className="w-64" />
        </div>
        <div className="weddingImages py-4 px-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="sec">
              <img src="./images/gallery/1.webp" alt="" />
              <img src="./images/gallery/2.webp" alt="" className="mt-3" />
            </div>
            <div className="sec">
              <img src="./images/gallery/3.webp" alt="" />
              <img className="mt-3" src="./images/gallery/4.webp" alt="" />
              <img src="./images/gallery/5.webp" alt="" className="mt-3" />
            </div>

            <div className="sec">
              <img src="./images/gallery/6.webp" alt="" />
              <img className="mt-3" src="./images/gallery/7.webp" alt="" />
            </div>
            <div className="sec">
              <img src="./images/gallery/8.webp" alt="" />
              <img className="mt-3" src="./images/gallery/9.webp" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* Gallery section end  */}

    </div>
  )
}

export default Home;