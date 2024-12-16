import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { useAuthContext, useChurayePalContext, usePackageContext } from '@/context';
import { toast } from 'react-toastify';
import Loader from '@/constant/loader';
import EventModal from '../components/EventModal';
import BookingRegistration from '../components/BookingRegistration';
import axios from 'axios';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)


function Home() {
  const { programme, GetProgramme, GetPackage, packageData } = usePackageContext();
  const { videoURLData } = useChurayePalContext();
  const { userData, loader } = useAuthContext();
  const [toggleModal, setToggleModal] = useState(false);
  const [modal, setModal] = useState(false);
  const [totalSeat, setTotalSeat] = useState(1)
  const [buyNow, setbuyNow] = useState({
    event: {
      isBuyingEvent: false,
      buyEvent: false

    },
    package: {
      isBuyingPackage: false,
      buyPackage: false
    }
  });

  const EventButtonRef = useRef();
  const PackageButtonRef = useRef();

  const MemberID = localStorage.getItem("MemberID");

  useGSAP(() => {
    gsap.from(".whyus img", {
      y: 30,
      opacity: 0,
      duration: 3,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".whyus",
        scroller: "body"
      }
    })
    gsap.from(".process img.left", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.7,
      scrollTrigger: {
        trigger: ".process img",
        scroller: "body",
      }
    })
    gsap.from(".process img.right", {
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.7,
      scrollTrigger: {
        trigger: ".process img",
        scroller: "body",
      }
    })
  })

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script")
      script.src = "https://checkout.razorpay.com/v1/checkout.js"
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }

  const handlePayment = async (e) => {
    if (userData?.token === null) {

      if (e.target.id === programme?._id) {
        setbuyNow(prevState => ({
          ...prevState,
          event: {
            ...prevState.event,
            isBuyingEvent: true
          }
        }));


      } else if (e.target.id === packageData?._id) {
        setbuyNow(prevState => ({
          ...prevState,
          package: {
            ...prevState.package,
            isBuyingPackage: true
          }
        }));

      }
      setToggleModal(true);

    } else {
      await BookNow(e)
    }
  }

  const BookNow = async (e) => {
    try {
      let res
      if (e.target.id === programme?._id) {
        const amount = programme?.amount
        res = await axios.post(
          `${import.meta.env.VITE_APP_API_URL}/payment/events?eventid=${programme?._id}&memberid=${MemberID}`,
          { amount: `${amount * totalSeat}` },
          {
            headers: {
              "Authorization": `Bearer ${userData?.token}`,
              "Content-Type": "application/json"
            },
            withCredentials: true
          }
        );

      } else if (e.target.id === packageData?._id) {
        res = await axios.post(
          `${import.meta.env.VITE_APP_API_URL}/payment/package?memberid=${MemberID}`,
          { amount: `${packageData?.amount}` },
          {
            headers: {
              "Authorization": `Bearer ${userData?.token}`,
              "Content-Type": "application/json"
            },
            withCredentials: true
          }
        );

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
            const eventRes = await axios.post(
              `${import.meta.env.VITE_APP_API_URL}/events/bookuser/${programme?._id}`,
              paymentDetails,
              {
                headers: {
                  "Authorization": `Bearer ${userData?.token}`,
                  "Content-Type": "application/json"
                },
                withCredentials: true
              }
            );

            toast.success(eventRes?.data?.message || "Event Booked Successfull")
          }
          else if (response && packageData?._id === e.target.id) {
            const registerRes = await axios.put(
              `${import.meta.env.VITE_APP_API_URL}/user/paymentUpdate`,
              registrationPayment,
              {
                headers: {
                  "Authorization": `Bearer ${userData?.token}`,
                  "Content-Type": "application/json"
                },
                withCredentials: true
              }
            );
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
      }
    } catch (error) {
      // toast.error("Failed to make payment")
    }

  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setModal(true);
    }, 5000);
    return () => clearTimeout(timer);

  }, []);

  useEffect(() => {
    if (userData?.token) {
      loadRazorpayScript();
    }
    GetProgramme();
    GetPackage();
  }, [userData?.token])

  useEffect(() => {
    if (!toggleModal && (userData?.token !== null)) {
      if (buyNow?.event.isBuyingEvent, buyNow?.event.buyEvent) {

        EventButtonRef.current.click();

      }
      else if (buyNow?.package.isBuyingPackage, buyNow?.package.buyPackage) {
        PackageButtonRef.current.click()
      }
    }


  }, [toggleModal, userData?.token])

  return (
    <div>

      {toggleModal ? <BookingRegistration buyNow={buyNow} setbuyNow={setbuyNow} toggleModal={toggleModal} setToggleModal={setToggleModal} /> : ""}
      {modal ? <EventModal onClose={() => setModal(false)} /> : ""}

      {/* Banner section start  */}
      <section className="mainBanner">
        <img src="../images/MainBanner.webp" alt="Chat Mangni Pat Byah" className='w-full object-cover' />
      </section>
      {/* Banner section end  */}

      {/* Testimonial section start  */}
      <section className="testimonial py-5 w-[80%] mx-auto">
        <div className="heading flex justify-center flex-col items-center text-center">
          <h1 className="text-5xl sm:text-7xl">Churaye hue pal</h1>
          <img src="../images/headingImg.webp" alt="Heading-icon" className="w-64" />
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
                <img src="https://static.vecteezy.com/system/resources/thumbnails/036/296/405/small_2x/ai-generated-green-floral-watercolor-illustration-for-wedding-invitation-botanical-frame-png.png" alt="background-icon" />
              </div>
              <div className="petal hidden sm:block absolute top-4 right-0 rotate-180">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/036/296/405/small_2x/ai-generated-green-floral-watercolor-illustration-for-wedding-invitation-botanical-frame-png.png" alt="background-icon" />
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
            <img className="w-20 mb-4 absolute top-[-50px]" src="../images/wcu/Lifetime.webp" alt="Life-time-icon" />
            <h3 className="text-2xl font-semibold mt-5">Lifetime Experience</h3>
            <p className="text-sm py-2">Our team is dedicated to providing you with a truly unforgettable experience. Feel the joy of a lasting, meaningful connection with your partner every day.</p>
          </div>
          <div className=" bg-white relative rounded-md mx-3 shadow p-4 text-center flex justify-center items-center flex-col">
            <img className="w-24 mb-4 absolute top-[-50px]" src="../images/wcu/2.webp" alt="relationShip-icon" />
            <h3 className="text-2xl font-semibold mt-5">Relationships Test</h3>
            <p className="text-sm py-2">Under the careful guidance of Paras Bhai Guruji, each relationship is thoughtfully assessed, fostering a strong foundation of trust between you and your partner.</p>
          </div>
          <div className=" bg-white relative rounded-md mx-3 shadow p-4 text-center flex justify-center items-center flex-col">
            <img className="w-20 mb-4 absolute top-[-50px]" src="../images/wcu/CompabilityIcon.webp" alt="Compatibility-check-icon" />
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
                    <img className="rounded-t-full h-96 object-cover w-full" src="./images/themes/destination.webp" alt="destination-icon" /></div>
                  <div className="themeName pt-4 text-center"><h3 className=" text-5xl">Destination</h3> </div>
                </div>
              </div>
              <div className="theme ">
                <div className="flex flex-col items-center">
                  <div className="w-full">
                    <img className="rounded-t-full h-96 object-cover w-full" src="./images/themes/cultural.webp" alt="Cultural-icon" /></div>
                  <div className="themeName pt-4 text-center"><h3 className=" text-5xl">Cultural</h3> </div>
                </div>
              </div>
              <div className="theme ">
                <div className="flex flex-col items-center">
                  <div className="w-full">
                    <img className="rounded-t-full h-96 object-cover w-full" src="./images/themes/modern.webp" alt="modern-icon" /></div>
                  <div className="themeName pt-4 text-center"><h3 className=" text-5xl">Modern</h3> </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* Wedding Theme section end  */}

      {/* Process section start  */}
      <section className="processsec py-10">
        <div className="heading flex justify-center flex-col items-center text-center">
          <h3 className="text-5xl sm:text-7xl">Wedding Process</h3>
          <img src="../images/headingImg.webp" alt="heading-icon" className="w-64 object-cover" />
        </div>
        <div className="process py-4">
          <div className="grid grid-cols-3 gap-2 mx-auto w-full sm:w-[60%]">
            <div className="px-2 flex items-center">
              <div className="icon">
                <img className='left' src="../images/processIcons/register.webp" alt="register-icon" />
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
                <img className='right' src="../images/processIcons/manageProfile.webp" alt="mangae-profile-icon" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mx-auto w-full sm:w-[60%]">
            <div className="px-2 flex items-center">
              <div className="icon">
                <img className='left' src="../images/processIcons/attendCall.webp" alt="attend-call-icon" />
              </div >
            </div >
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
          </div >
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
                <img className='right' src="../images/processIcons/package.webp" alt="package-icon" />
              </div >
            </div >
          </div >
          <div className="grid grid-cols-3 gap-2 mx-auto w-full sm:w-[60%]">
            <div className="px-2 flex items-center">
              <div className="icon">
                <img className='left' src="../images/processIcons/meeting.webp" alt="meeting-icon" />
              </div >
            </div >
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
          </div >
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
                <img className='right' src="../images/processIcons/marry.webp" alt="marry-icon" />
              </div >
            </div >
          </div >
        </div >
      </section >
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
                    <h2 className="text-5xl py-2 font-semibold text-yellow-500">₹{programme?.amount}  /-</h2>
                    <div className="seats">
                      <input id="seat" type="number" defaultValue={totalSeat} min={1} onChange={(e) => setTotalSeat(e.target.value)} maxLength={20}
                        className="block w-16 text-xs px-2 py-2 mt-2 text-gray-700 bg-white border border-[#BB1A04] focus:outline-[#BB1A04]" placeholder='No. of Seats' />
                    </div>
                    <div className="programme py-2 text-2xl font-semibold">{programme?.eventName}</div>
                    <p className="py-2">{programme?.description}</p>
                    <div className="programmeDetails mb-4">
                      <div className="state py-2 text-lg">
                        <strong>Location :</strong>{programme?.state}
                      </div>
                      {userData?.member === "true" ? <div className="state py-2 text-lg">
                        <strong>Venue :</strong> {programme?.venues}
                      </div> : ""}
                      <div className="state py-2 text-lg">
                        <strong>Date  :</strong> {programme?.availableDates}
                      </div>
                    </div>
                    <button ref={EventButtonRef} id={programme?._id} type='button' onClick={(e) => handlePayment(e)}
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
                          <img className="w-8 rotate-45 scale-x-[-1]" src="../images/leaf.webp" alt="package-icon" />
                          Assistance in finding quick and right marriage combinations.
                        </li>
                        <li className="flex gap-2 items-center py-1 text-sm">
                          <img className="w-8 rotate-45 scale-x-[-1]" src="../images/leaf.webp" alt="package-icon" />
                          Special Kundli matching service by Shri Paras Bhai Guruji
                        </li>

                        <li className="flex gap-2 items-center py-1 text-sm">
                          <img className="w-8 rotate-45 scale-x-[-1]" src="../images/leaf.webp" alt="package-icon" />
                          Guidance and consultation in every decision related to marriage
                        </li>
                        <li className="flex gap-2 items-center py-1 text-sm">
                          <img className="w-8 rotate-45 scale-x-[-1]" src="../images/leaf.webp" alt="package-icon" />
                          The harmony of both the families will be taken care of in the marriage.

                        </li>
                      </ul>
                    </div>
                    <button ref={PackageButtonRef} type='button' id={packageData?._id} onClick={(e) => handlePayment(e)} className="bg-[#BB1A04] text-white py-2 px-5 border-none cursor-pointer outline-none text-lg rounded-full shadow-md transition-all duration-500 hover:shadow-gray-500 ">
                      Register Now
                    </button>

                  </div>
                </div>
              </div>}

            </div>
          </div>
          <div className="w-full md:w-[40%] flex justify-center items-center bg-cover bg-center h-[65vh] sm:h-[100vh] " style={{ backgroundImage: "url(https://static.vecteezy.com/system/resources/previews/024/554/091/non_2x/gold-geometric-floral-greenery-leaves-frames-free-png.png)" }}>
            <div className="heading text-center"><h2 className="text-5xl sm:text-7xl text-[#BB1A04]">Pricing <br />Plans</h2>
              <img src="../images/headingImg.webp" alt="heading-icon" className="w-64" />
            </div>
          </div>
        </div>
      </section>
      {/* Packages section end  */}

      {/* Gallery section start  */}
      <section className="gallery py-5">
        <div className="heading flex justify-center flex-col items-center text-center">
          <h3 className="text-6xl sm:text-7xl">Gallery</h3>
          <img src="../images/headingImg.webp" alt="heading-icon" className="w-64" />
        </div>
        <div className="weddingImages py-4 px-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="sec">
              <img src="./images/gallery/1.webp" alt="gallery-icon-01" />
              <img src="./images/gallery/2.webp" alt="gallery-icon-02" className="mt-3" />
            </div>
            <div className="sec">
              <img src="./images/gallery/3.webp" alt="gallery-icon-03" />
              <img className="mt-3" src="./images/gallery/4.webp" alt="gallery-icon-04" />
              <img src="./images/gallery/5.webp" alt="gallery-icon-05" className="mt-3" />
            </div>

            <div className="sec">
              <img src="./images/gallery/6.webp" alt="gallery-icon-06" />
              <img className="mt-3" src="./images/gallery/7.webp" alt="gallery-icon-07" />
            </div>
            <div className="sec">
              <img src="./images/gallery/8.webp" alt="gallery-icon-08" />
              <img className="mt-3" src="./images/gallery/9.webp" alt="gallery-icon-09" />
            </div>
          </div>
        </div>
      </section>
      {/* Gallery section end  */}

    </div >
  )
}

export default Home;