import React,{useState} from 'react'
import sun from '../images/icon-sun.svg'
import search from '../images/icon-search.svg'
import locationicon from '../images/icon-location-light.svg'
import locationicond from '../images/icon-location.svg'
import company from '../images/icon-company-light.svg'
import companyd from '../images/icon-company.svg'
import twitter from '../images/icon-twitter-light.svg'
import twitterd from '../images/icon-twitter.svg'
import website from '../images/icon-website-light.svg'
import websited from '../images/icon-website.svg'
import moon from '../images/icon-moon.svg'
const Github = () => {
    const [isdark,setIsdark] = useState(true)
  return (
    <div className={` ${isdark ? 'bg-[#141D2F] text-white ': 'bg-[#F6F8FF] text-black '} bg-[#141D2F] w-full min-h-screen py-36 flex items-center justify-center font-mono  flex-col gap-6`}>
           <div className='w-full flex flex-col gap-6'>
              <div className='flex w-[90%] md:w-[58%] mx-auto items-center justify-between'>
                  <h2 className='font-bold text-2xl'>devfinder</h2>
                   <div onClick={()=>setIsdark(!isdark)} className='flex cursor-pointer  gap-4 items-center'>
                     <span className='uppercase tracking-[3px] text-sm'>{ isdark? 'light':'dark'}</span><img src={isdark? sun : moon} alt="" />
                   </div>
                 </div>
                 <div className='w-[90%] mt-4 relative md:w-[58%] mx-auto'>
                      <input placeholder='Search Github username...' className={`${isdark ? 'bg-[#1E2A47] placeholder:text-white':'bg-white placeholder:text-gray-400 shadow-xl shadow-[#dde1f1]' } w-full px-14 md:px-20 pr-24 md:pr-32 text-[12px] md:text-xl  outline-none  h-14 md:h-16 rounded-xl`} type="text" />
                      <button className='bg-blue-600  hover:bg-blue-300 duration-200 font-bold absolute right-2 top-1/2  -translate-y-1/2 text-[12px] md:text-[14px] text-white px-4  md:px-6 py-3 rounded-xl'>Search</button>
                      <img className='absolute left-5 md:left-8 top-1/2 -translate-y-1/2' src={search} alt="" />
                 </div>
                 <div className={` ${isdark ? 'bg-[#1E2A47] text-white':'bg-white shadow-xl shadow-[#dde1f1] '} w-[90%]  rounded-xl p-4 md:p-8 lg:p-12 flex flex-col gap-10  relative md:w-[58%] mx-auto`}>
                     <div className='flex items-start justify-between'>
                         <div className='flex items-center gap-4'>
                           <img className=' w-[80px]  md:w-[120px] rounded-full' src='https://avatars.githubusercontent.com/u/583231?v=4' alt="" />
                           <div className='flex flex-col gap-2'>
                               <h1 className='font-bold'>The Octocat</h1>
                               <p className='text-blue-600'>@octocat</p>
                               <p className='hidden md:block mt-4 text-gray-500'>This profile has no bio</p>
                               <h2 className={`  ${isdark ? 'text-[#F6F8FF]':'text-gray-500'} block md:hidden`}>Joined 25 Jane 2011</h2>

                           </div>
                         </div>
                         <h2 className={`  ${isdark ? 'text-[#F6F8FF]':'text-gray-500'} md:block hidden`}>Joined 25 Jane 2011</h2>
                        </div> 
                        <p className=' md:hidden text-gray-500'>This profile has no bio</p>

                        <div className={` ${isdark ? 'bg-[#141D2F] text-white':'bg-[#F6F8FF] text-gray-500'}  flex ml-0 md:ml-28  justify-around bg-[#141D2F] py-4 px-8 rounded-xl`}>
                            <div className='flex flex-col '>
                                <p className='text-[12px]'>Repos</p>
                                <p className={`${isdark ? 'text-white': 'text-black'} font-bold text-xl`}>8</p>
                            </div>
                            <div className='flex flex-col '>
                                <p className='text-[12px]'>Followers</p>
                                <p className={`${isdark ? 'text-white': 'text-black'} font-bold text-xl`}>1219</p>
                            </div>
                            <div className='flex flex-col '>
                                <p className='text-[12px]'>Following </p>
                                <p className={`${isdark ? 'text-white': 'text-black'} font-bold text-xl`}>9</p>
                            </div>
                        </div>
                        <div className={` ${isdark ? 'bg-[#141D2F]':'bg-[#F6F8FF] text-[#5C6F9B]'} grid grid-cols-1 md:grid-cols-2 gap-2 ml-0 md:ml-28  justify-around  py-4 px-8 rounded-xl`}>
                            <div className='flex gap-4 items-center '>
                                <img src={isdark ? locationicon : locationicond } alt="" />
                                <p>San Francisco</p>
                            </div>
                            <div className='flex gap-4 items-center '>
                                <img src={ isdark ?  twitter : twitterd} alt="" />
                                <p className='text-gray-400'>Not Available</p>
                            </div>
                            <div className='flex gap-4 items-center '>
                                <img src={ isdark ?  website : websited } alt="" />
                                 <a href="https://github.blog" target='_blank'>https://github.blog</a>
                            </div>
                            <div className='flex gap-4 items-center '>
                                <img src={ isdark ?  company : companyd} alt="" />
                                <p>@github</p>
                            </div>
                            
                        </div>
                        
                         
                 </div>
      
           </div>
    </div>
  )
}

export default Github