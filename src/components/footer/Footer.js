import React from 'react'
import { logo } from '../../assets'
import { FaFacebookF, FaTwitter, FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full h-auto py-20 border-b-[1px] border-b-black grid grid-cols-4 gap-8'>

        <div className='w-full h-full flex flex-col gap-4'>
            <div className='flex  gap-6 items-end '>
            <img className='w-20' src={logo} alt='logo'/>
            <h3 className='text-2xl font-bold text-white'>Chamara Bandara</h3>
            </div>
            <div className="flex gap-4">
              <span className="bannerIcon">
                  <FaFacebookF />
              </span>
              <span className="bannerIcon">
                  <FaTwitter />
              </span>
              <span className="bannerIcon">
                  <FaLinkedinIn />
              </span>
          </div>
        </div>
        <div className='w-full h-full '>
            <h3  className='text-xl uppercase text-designColor tracking-wider'>Quick Link</h3>
            <ul className='flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6'>
                <li >
                    <span className='w-full text-lg relative text-designColor duration-300'>About<span></span></span></li>
            </ul>
        </div>
        <div className='w-full h-full '>
            <h3 className='text-xl uppercase text-designColor tracking-wider'>Quick Link</h3>
            <ul className='flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6'>
                <li className=''>About</li>
            </ul >
        </div>
        <div className='w-full h-full '>
            <h3 className='text-xl uppercase text-designColor tracking-wider'>Quick Link</h3>
            <ul className='flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6'>
                <li className=''>About</li>
            </ul>
        </div>
        </div>
  )
}

export default Footer