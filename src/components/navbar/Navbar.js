import React from 'react'
import { logo } from '../../assets'
import { navLinksdata } from '../../constants'
import { Link } from 'react-scroll'



const Navbar = () => {
    return (
        <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
        <div className="flex items-center">
                <img className='h-[70px] rounded-full border-1 border-gray-300 flex items-center justify-center' src={logo} alt='logo' />
                <span className="ml-2 text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 ">Chamara Bandara</span>
            </div>
            <div>
                <ul className='flex items-center gap-10 '>
                    {navLinksdata.map(({ _id, title, link }) => (
                        <li
                            key={_id}
                            className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
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
            </div>
        </div>
    )
}

export default Navbar