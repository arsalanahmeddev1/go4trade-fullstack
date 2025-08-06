import { useState, React } from 'react'
import { navs } from '../../utils/statics';
import { logo } from '../../assets'
import { Link, NavLink } from 'react-router-dom'
import { BubbleButton, Button } from './';
import PlusSvg from './PlusSvg';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);


  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleDropdownToggle = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };


  return (
    <div className='header border-bottom-gradient'>
      <div className="container">
        <div className="all-between">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className='grow lg:block hidden shrink-0'>
            <ul className='all-center primary-navs'>
              {navs.map((nav, index) => (
                <li key={index} className='relative group'>
                  {(!nav.path) ? (
                    <span className='text-white transition nav-link px-[15px] xl:px-[20px] py-[14px] rounded-[60px] hover:font-medium text-[13px] xl:text-[15px] group-hover:bg-(--primary-theme)'>{nav.name} <PlusSvg className="transition-transform duration-300 group-hover:rotate-45" /> </span>
                  ) : (
                    <NavLink
                      to={nav.path}
                      className={({ isActive }) => `text-white transition nav-link px-[15px] xl:px-[20px] py-[14px] rounded-[60px] hover:font-medium text-[13px] xl:text-[15px] ${(isActive) ? 'active' : null}`}
                    >
                      {nav.name}
                    </NavLink>
                  )}

                  {(nav.inner) ? (
                    <ul className='dropdown absolute top-[230%] left-0 bg-[#002e55ad] backdrop-blur-[5px] rounded-2xl rounded-t-[0px] min-w-[200px] max-h-0 overflow-hidden transition-all duration-800 invisible group-hover:max-h-[500px] group-hover:visible ease-in-out z-50'>
                      {nav.inner.map((item, index) => (
                        <li key={index}>
                          <NavLink
                            to={item.path}
                            className={({ isActive }) => `py-2 px-4 block transition-all duration-500 ease-in-out hover:bg-[#1469B1] ${(isActive) ? 'active bg-[#1469B1]' : null}`}
                          >
                            {item.name}
                          </NavLink>
                        </li>
                      ))}

                    </ul>
                  ) : null}


                </li>
              ))}
            </ul>
          </div>
          <div className='all-center gap-4'>
            <button onClick={toggleMenu} className='bg-transparent lg:hidden cursor-pointer'>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <BubbleButton Tag='a' target='_blank' href='https://my.go4trades.com/register?_gl=1*q8vjz2*_ga*MTE5MDgxNzk5OS4xNzUxNjE1ODQz*_ga_2HWEFCWNKC*czE3NTIwNzE4NjUkbzIkZzAkdDE3NTIwNzE4NjUkajYwJGwwJGgw*_ga_SS36ZZJDJK*czE3NTIwNzE4NjUkbzIkZzAkdDE3NTIwNzE4NjUkajYwJGwwJGgw' bubbleColor='#0f6540' className="btn !border-[transparent] btn-primary bg-[#80DBB4] hover:bg-[#19FC9B] opacity-65 hover:opacity-[1] primary-theme hidden lg:block">Try it now</BubbleButton>
          </div>
        </div>
      </div>

      <ul className={`mobile-navs overflow-hidden transition-all duration-500 ease-in-out lg:hidden ${isMenuOpen ? 'max-h-[500px] py-4' : 'max-h-0 p-0'}`}>
        {navs.map((nav, index) => (
          <li key={index} className="mb-4" onClick={() => handleDropdownToggle(index)}>
            {/* Parent link or text */}
            {!nav.path ? (
              <span className="text-white transition nav-link block px-[20px] py-[14px] rounded-[60px] hover:font-medium text-[15px]">
                {nav.name}
                <PlusSvg className={`transition-transform duration-300 inline-block ml-2 ${openIndex === index ? 'rotate-45' : ''}`} />
              </span>
            ) : (
              <Link
                onClick={toggleMenu}
                to={nav.path}
                className="text-white transition nav-link px-[20px] py-[14px] rounded-[60px] hover:font-medium text-[15px]"
              >
                {nav.name}
              </Link>
            )}

            {/* Dropdown */}
            {nav.inner ? (
              <ul className={`dropdown bg-[#002e55ad] backdrop-blur-[5px] rounded-2xl rounded-t-[0px] max-h-0 overflow-hidden transition-all duration-800 ease-in-out z-50 ${openIndex === index ? 'max-h-[500px] visible' : 'max-h-0 invisible'}`}>
                {nav.inner.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      onClick={toggleMenu}
                      to={item.path}
                      className={({ isActive }) =>
                        `py-2 pl-8 block transition-all duration-500 ease-in-out hover:bg-[#1469B1] ${isActive ? 'active bg-[#1469B1]' : ''
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Header
