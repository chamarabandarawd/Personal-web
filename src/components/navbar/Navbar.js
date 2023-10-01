import React, { useState } from 'react'
import { logo } from '../../assets'
import { navLinksdata } from '../../constants'
import { FiMenu } from "react-icons/fi"
import { Link } from 'react-scroll'
import { FaFacebookF, FaTwitter, FaLinkedinIn} from 'react-icons/fa'
import { MdClose } from "react-icons/md";



const Navbar = () => {
const[showMenu,setShowMenu]=useState(false);



    return (
        <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
            <div className="flex items-center gap-4">
                <img className='h-[70px] rounded-full border-1 border-gray-300 flex items-center justify-center' src={logo} alt='logo' />
                <span className="text-xl text-gray-300 tracking-wider cursor-pointer hover:text-designColor duration-300 ">Chamara Bandara</span>
            </div>
            <div>
                <ul className=" hidden mdl:inline-flex items-center gap-6 lg:gap-10">
                    {navLinksdata.map(({ _id, title, link }) => (
                        <li
                            key={_id}
                            className="text-xl text-gray-300 tracking-wider cursor-pointer hover:text-designColor duration-300"

                        >
                            <Link
                                activeClass='active'
                                to={link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                {title}
                            </Link>
                        </li>
                    ))}

                </ul>
                <span
                    onClick={()=>{setShowMenu(!showMenu)
                    console.log(showMenu)}}
                    className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"

                ><FiMenu /></span>
                        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div className='flex flex-col gap-4'>
                <img className="w-28" src={logo} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                I'm a passionate software engineer with a BSc
                 in Engineering from the University of Moratuwa. 
                 I specialize in web development, utilizing technologies like React,
                  Angular, Node.js, Spring Boot, and Nest.js. 
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
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
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
            </div>
        </div>
    )
}

export default Navbar