import React from 'react'
import contactImg from '../../assets/contactImg.jpg'
import { FaFacebookF, FaTwitter, FaLinkedinIn} from 'react-icons/fa'

const ContactLeft = () => {
  return (
    <div className='w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center'>
    <img className='w-full h-64 object-cover rounded  mb-2'
    src={contactImg} alt='conatctImg'/>
    <div className='flex flex-col gap-4'>
      <h3 className='text-3xl font-bold text-white'>Chamara Bandara</h3>
      <p className='text-lg font-normal text-gray-400'>Full Stack Developer</p>
      <p className='text-base text-gray-400 tracking-wide'>
        We found a way for you to contribute to the project! Looks 
        like react-lorem-ipsum-component is missing a Code of Conduct.
        How about a good first contribution to this project? 
        It seems that react-lorem-ipsum-component is missing a LICENSE file.</p>
        <p className='text-base text-gray-400 flex items-center gap-2'>
          Phone: <span className='text-lightText'> +94 76 696 0861</span>
        </p>
        <p className='text-base text-gray-400 flex items-center gap-2'>
          Email: <span className='text-lightText'> chamarabandarawd@gmail.com</span>
        </p>
    </div>
    <div className='flex flex-col gap-6'>
      <h2>
        FIND ME IN
        </h2>
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
  </div>
  )
}

export default ContactLeft