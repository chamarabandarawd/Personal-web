import React from 'react'
import contactImg from '../../assets/contactImg.jpg'
import { FaWhatsappSquare, FaLinkedinIn} from 'react-icons/fa'
import { MdMarkEmailUnread } from "react-icons/md"


const ContactLeft = () => {
  const openLinkdinPage = () => {
    window.open('https://www.linkedin.com/in/chamara-bandara-096681141/', '_blank'); // Replace 'https://www.example.com' with the URL you want to open
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '94766960861';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center'>
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
                        <span onClick={openLinkdinPage} className="bannerIcon">
                            <FaLinkedinIn  />
                        </span>
                        <span className="bannerIcon">
                            <MdMarkEmailUnread />
                        </span>
                        <span  onClick={handleWhatsAppClick} className="bannerIcon">
                            <FaWhatsappSquare />
                        </span>
                    </div>
    </div>
  </div>
  )
}

export default ContactLeft