import React, { useState, useEffect } from 'react';
import { CirclePlay, Plus, Minus, LocateFixed, MapPin, Phone, Calculator } from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";

import hero1 from '../images/hero1.svg'
import Swipper from "./Swipper";
import Swipper2 from "./Co-Swipper2";
import pic2 from '../images/desktopview.png'
import map from '../images/map.png'
import logo from '../images/zuludesk-logo.svg'
import likedin from '../images/linkedin-icon.png'
import ig from '../images/instagram-icon.png'

const Home = () =>{
    useEffect(() => {
        AOS.init();
      }, []);
        // State variables to manage visibility of each section
    const [isDeskVisible, setIsDeskVisible] = useState(false);
    const [isCostVisible, setIsCostVisible] = useState(false);
    const [isBook, setIsBook] = useState(false);
    const [isLocation, setIsLocation] = useState(false);
    const [isTime, setIsTime] = useState(false);

    // Toggle functions for each section
    const handleDeskToggle = () => {
        setIsDeskVisible(!isDeskVisible);
    };
    const handleCostToggle = () => {
        setIsCostVisible(!isCostVisible);
    };
    const handleBook = () => {
        setIsBook(!isBook);
    };
    const handleLocation = () => {
        setIsLocation(!isLocation);
    };
    const handleTime = () => {
        setIsTime(!isTime);
    };

    return(
        <div className="">
 
        <div className='grid grid-cols-3 px-16 gap-16'>
            <div data-aos="zoom-out-left" data-aos-duration="2000" data-aos-easing="ease-in-sine" className='col-span-2'>
                <h1 className='text-8xl'>Welcome to Your Next Workspace</h1>
                <p className='text-2xl mt-8'>Discover the coolest co working space in Accra.</p>
                <button className='bg-green-800 text-2xl px-11 py-4 text-white rounded-2xl mt-5'>Reserve your Desk now</button>
            </div>
            <div data-aos="zoom-out-left" data-aos-delay="200" data-aos-duration="2000" className='col-span-1'>
                <p className='text-2xl'>
                Zulu Desk, a distinctive co-working space in Accra, offers a creative and collaborative environment. It's an ideal spot for entrepreneurs, freelancers, and businesses aiming to do their best work in the heart of the city.
                </p>
                <button className='mt-5'> <CirclePlay color="darkgreen" size={72}/> </button>
            </div>
           </div>

            <div className="flex justify-end">
                 <div data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-sine" className="bg-black flex text-white w-2/6 p-6 mr-48 rounded-xl z-30">
                <h1 className="text-6xl font-bold">135+</h1>
                <p>weekly workers <br></br> and visitors</p>
                <h1 className="text-6xl font-bold">100%</h1>
                <p>Customer <br></br> Satisfaction</p>
            </div>
            </div>
           <div className="bg-slate-800 absolute w-[100%]">
           
            <div className="ml-[7%]">
                <img data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-sine" className="mt-[-70px] " src={hero1}/>    
            </div>
                <div data-aos="fade-right" data-aos-duration="3000" data-aos-easing=""  className="bg-slate-800 p-16">
                    <Swipper />
                </div>

                {/* co working */}
                <div className="grid grid-cols-5 pl-16">
                    <div data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-sine"  className="col-span-3">
                        <h1 className="text-8xl text-white ">
                            Co working Space should be cosy.
                        </h1>
                        <p className="text-2xl text-slate-300">
                            work is hard enough as it is. We strive to make coming to work easier in a space that boosts creativity.
                        </p>
                        <div className="flex justify-between">
                            <div className="flex items-center">
                                <h1 className="text-9xl text-white">7</h1>
                                <p className="text-slate-300 text-2xl">Private Desks</p>
                            </div>
                            <div className="flex items-center">
                                <h1 className="text-9xl text-white">17</h1>
                                <p className="text-slate-300 text-2xl">Private Desks</p>
                            </div>
                            <div className="flex items-center">
                                <h1 className="text-9xl text-white">2</h1>
                                <p className="text-slate-300 text-2xl">Private Desks</p>
                            </div>
                        </div>
                        <button data-aos="fade-up" data-aos-duration="3000" data-aos-easing="ease-in-sine" className="bg-green-800 text-2xl px-11 py-4 text-white rounded-2xl mt-5">Reserve your Desk now</button>
                    </div>

                    {/* slider */}
                    <div data-aos="fade-left" data-aos-duration="3000" data-aos-easing="ease-in-sine" className="col-span-2">
                        <Swipper2 />
                    </div>
                </div>

                <div className="text-center py-24">
                    <h1 className="text-7xl text-white">Designed for Your <br></br> Success</h1>
                    <p className="text-2xl text-slate-300">
                        We want you to be comfortable because we know that's when you do your best work. so we chose the best space, most comfy swivel chairs, ambient lighting and just the right colours to keep you going all day
                    </p>
                    <button className='bg-green-800 text-2xl px-11 py-4 text-white rounded-2xl mt-5'>
                        Reserve your Desk now
                    </button>
                </div>

                {/* 3 images */}
                <div className="flex gap-12 mx-20">
                    <div data-aos="zoom-out-left" data-aos-duration="2000" data-aos-easing="ease-in-sine" className="flex flex-col items-center justify-center h-screen">
                        <img src={pic2} className="h-[75vh] rounded-3xl"/>
                        <h1 className="text-3xl text-white">Good facilities</h1>
                    </div>
                    <div data-aos="zoom-in-left" data-aos-duration="2000" data-aos-easing="ease-in-sine" className="flex flex-col items-center">
                        <img src={pic2} className="h-[75vh] rounded-3xl"/>
                        <h1 className="text-3xl text-white">Good facilities</h1>
                    </div>
                    <div data-aos="zoom-out-left" data-aos-duration="2000" data-aos-easing="ease-in-sine" className="flex flex-col items-center justify-center h-screen">
                        <img src={pic2} className="h-[75vh] rounded-3xl"/>
                        <h1 className="text-3xl text-white">Good facilities</h1>
                    </div>
                </div>

                {/* inspiration */}
                <div className="flex gap-20 mx-24">
                    <div>
                        <h1 className="text-7xl text-white">Inspiration from
                        Our Members</h1>
                        <p className="text-slate-300 text-2xl my-5">
                            Hear what our members have to say about the positive impact of Zuludesk on their work and creativity. Join the community and experience the difference.
                        </p>
                        <img className="h-[80vh] w-[100%]" src={pic2}/>
                        <i>logo</i>
                        <h4 className="text-3xl text-white">Esther Howard</h4>
                        <p className="text-slate-300 text-xl my-1">
                        This workspace is really amazing, I like it because of the interior design
                        </p>
                    </div>
                    <div>
                        <img className="h-[80vh] w-[100%]" src={pic2}/>
                        <i>logo</i>
                        <h4 className="text-3xl text-white">Esther Howard</h4>
                        <p className="text-slate-300 text-xl my-1">
                        This workspace is really amazing, I like it because of the interior design
                        </p>
                    </div>
                </div>


                    {/* network */}
                    <div className="flex gap-24 px-24">
                        <div className="flex justify-center items-center flex-col">
                            <h1 className="text-8xl text-white">Networking
                            Redefined</h1>
                            <p className="text-xl text-slate-300">
                            Immerse yourself in a community that goes beyond shared spaces. Stay updated on our networking events and workshops designed to elevate your professional journey.
                            </p>
                            <button className='bg-green-800 text-2xl px-11 py-4 text-white rounded-2xl mt-5'>Reserve your Desk now</button>

                        </div>
                        <div>
                            <img className="h-[75vh] rounded-3xl" src={pic2}/>
                        </div>
                    </div>


{/* network */}
                    <div className="grid grid-cols-2 p-24">
                        <div>
                            <h1 className="text-7xl text-white">We’re Here <br></br>
                            to Help</h1>
                        </div>
                    <div>
                        <p className="text-xl text-slate-300">
                             Have questions? Find answers in our FAQ section. If you need further assistance, our support team is ready to help.
                        </p>
                        <button className='bg-green-800 text-2xl px-11 py-4 text-white rounded-2xl mt-5'>Reserve your Desk now</button>
                    </div>
                    </div>

                    {/* START:: QUESTIONS */}
                    <div className='px-24'>
            {/* Desk Reservation Section */}
            <div className='border-b rounded-full px-5 mb-16'>
                <div className='flex justify-between text-white font-bold' onClick={handleDeskToggle}>
                    <h3 className='text-lg'>
                        How do I reserve a desk?
                    </h3>
                    <h6 className='text-sm'>
                        {isDeskVisible ? <Minus /> : <Plus />} {/* Toggle icon based on visibility */}
                    </h6>
                </div>
                {isDeskVisible && (
                    <p className='pt-3 text-slate-300 text-lg'>
                        Reserving a desk is easy! Simply click on the "Reserve Your Desk Now" button on the homepage banner to arrange a booking call or just call 0530471125.
                    </p>
                )}
            </div>
            
            {/* Cost of Booking Section */}
            <div className='border-b rounded-full px-5 mb-16'>
                <div className='flex justify-between text-white font-bold' onClick={handleCostToggle}>
                    <h3 className='text-lg'>
                        How much does it cost to book a desk?
                    </h3>
                    <h6 className='text-sm'>
                        {isCostVisible ? <Minus /> : <Plus />} {/* Toggle icon based on visibility */}
                    </h6>
                </div>
                {isCostVisible && (
                    <p className='pt-3 text-slate-300 text-lg px-5'>
                        
                            <li>Walk-in booking normal booth - <span className='text-white font-bold'>GH₵150</span>  per day</li>
                            <li>Walk-in booking booth with extra screen - <span className='text-white font-bold'>GH₵200</span> per day</li>
                            <li>Book the entire space half day - <span className='text-white font-bold'>GH₵1500</span></li>
                        
                    </p>
                )}
            </div>
            
            {/* Booking Section */}
            <div className='border-b rounded-full px-5 mb-16'>
                <div className='flex justify-between text-white font-bold' onClick={handleBook}>
                    <h3 className='text-lg'>
                        Can i just turn up without a booking?
                    </h3>
                    <h6 className='text-sm'>
                        {isBook ? <Minus /> : <Plus />} {/* Toggle icon based on visibility */}
                    </h6>
                </div>
                {isBook && (
                    <p className='pt-3 text-slate-300 text-lg px-5'>
                        Yes you can - but you might not get a desk if its really busy its always best to call ahead. 0530471125.
                    </p>
                )}
            </div>
            
            {/* Location Section */}
            <div className='border-b rounded-full px-5 mb-16'>
                <div className='flex justify-between text-white font-bold' onClick={handleLocation}>
                    <h3 className='text-lg'>
                        Where are you Location?
                    </h3>
                    <h6 className='text-sm'>
                        {isLocation ? <Minus /> : <Plus />} {/* Toggle icon based on visibility */}
                    </h6>
                </div>
                {isLocation && (
                    <p className='pt-3 text-slate-300 text-lg px-5'>
                        We are just behind Accra mall, just enter Zuludesk in google to get directions to the office
                    </p>
                )}
            </div>
            
            {/* times Section */}
            <div className='border-b rounded-full px-5 mb-16'>
                <div className='flex justify-between text-white font-bold' onClick={handleTime}>
                    <h3 className='text-lg'>
                        Where are you Location?
                    </h3>
                    <h6 className='text-sm'>
                        {isTime ? <Minus /> : <Plus />} {/* Toggle icon based on visibility */}
                    </h6>
                </div>
                {isTime && (
                    <p className='pt-3 text-slate-300 text-lg px-5'>
                       <p> Mon to Sat - 8am to 10pm</p>
                       <p> Sun - 10am to 8pm</p>
                    </p>
                )}
            </div>
                    </div>
                    {/* END:: QUESTIONS */}

                        {/* START:: VISIT US */}
                    <div className='text-center'>
                        <h1 className='text-white text-7xl'>Visit Us and Get <br></br>
                        Inspired</h1>
                        <p className='text-lg text-slate-300'>Locate us easily with the following details.</p>
                    </div>

                        {/* END:: VISIT US */}


                        {/* START:: ADDRESS */}
                        <div className='pr-2 pl-24 grid grid-cols-2 mt-10'>
                            <div>
                                <div className='mb-10'>
                                    <div className='flex text-white'>
                                        <MapPin /> 
                                        <h1 className='text-white text-xl pl-5'> Phone</h1> 
                                    </div>
                                   
                                    <p className='text-slate-300 pl-10'>+233530471125</p>
                                </div>
                                <div className='mb-10'>
                                    <div className='flex text-white'>
                                        <Phone /> 
                                        <h1 className='text-white text-xl pl-5'> Address</h1> 
                                    </div>
                                   
                                    <p className='text-slate-300 pl-10'>City Galleria Mall, Unit FO2, Spintex Rd</p>
                                </div>
                                <div className='mb-10'>
                                    <div className='flex text-white'>
                                        <Calculator /> 
                                        <h1 className='text-white text-xl pl-5'> Opening Hours</h1> 
                                    </div>
                                   
                                    <p className='text-slate-300 pl-10'>
                                     
                                     <li>Monday - Saturday: 8:00        AM-10:00pm</li> 
                                       <li>Sunday: 10:00 AM- 8:00pm</li> 
                                    </p>
                                </div>
                            </div>
                            <div>
                                    <img className='w-[100%] h-72 rounded-2xl' src={map}/>
                            </div>
                        </div>
                        {/* END:: ADDRESS */}

                        {/* START:: FOOTER */}
                        <div className='flex justify-between p-5 pl-10'>
                            <div>
                                <img className='w-52' src={logo}/>
                            </div>
                            <div>
                                <h1 className='text-green-700 text-xl'>Terms and Condition</h1>
                                <p className='text-white'>Made with Love from TeamAlfy</p>
                            </div>
                            <div className='flex gap-7'>
                                <img src={likedin}/>
                                <img src={ig}/>
                            </div>

                        </div>
                        {/* END:: FOOTER */}

           </div>

        </div>
    )
}

export default Home;