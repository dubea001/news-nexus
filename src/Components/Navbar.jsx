// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { navLinks } from '../Constants/index';
import { assets } from '../assets/assets';
import { CiSearch } from 'react-icons/ci';
import { RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
    const [showSearchInput, setShowSearchInput] = useState(false);

    const toggleSearch = () => {
        setShowSearchInput(!showSearchInput);
    };
    return (
        <nav className='flex items-center justify-between px-8 lg:px-20 border border-black py-2'>
            <div className='flex items-center cursor-pointer'>
                <img
                    src={assets.Logo}
                    alt='logo'
                    className='w-16 lg:w-20 mr-4'
                />
            </div>
            <ul className='hidden md:flex space-x-4 md:space-x-12'>
                {navLinks.map((link) => (
                    <li
                        key={link.label}
                        className='px-2 text-lg font-medium hover:border-b-2 hover:border-b-primary transition duration-300 ease-in'
                    >
                        <a href={link.linkTo}>{link.label}</a>
                    </li>
                ))}
            </ul>
            <div className=''>
                {showSearchInput ? (
                    <div className='flex items-center transition duration-200 ease-in-out'>
                        <input
                            type='text'
                            placeholder='Search keyword and Press Enter...'
                            className='mx-2 p-2 min-w-72 border border-primary outline-primary'
                        />
                        <RiCloseLine
                            className='text-2xl cursor-pointer text-red font-bold'
                            onClick={toggleSearch}
                        />
                    </div>
                ) : (
                    <CiSearch
                        className='text-2xl cursor-pointer text-black font-bold'
                        onClick={toggleSearch}
                    />
                )}
            </div>
        </nav>
    );
};

export default Navbar;
