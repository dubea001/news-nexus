import { useState } from 'react';
import { assets } from '../assets/assets';
import { CiSearch } from 'react-icons/ci';
import { RiCloseLine } from 'react-icons/ri';
import { FaAngleDown } from 'react-icons/fa';

const Navbar = () => {
    const [showSearchInput, setShowSearchInput] = useState(false);
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

    const toggleSearch = () => {
        setShowSearchInput(!showSearchInput);
    };

    const toggleCategories = () => {
        setIsCategoriesOpen(!isCategoriesOpen);
    };

    return (
        <nav className='flex items-center justify-between px-8 lg:px-20 bg-background py-2'>
            <div className='flex items-center cursor-pointer'>
                <img
                    src={assets.Logo}
                    alt='logo'
                    className='w-16 lg:w-20 mr-4'
                />
            </div>
            <ul className='flex space-x-16'>
                <li onMouseEnter={() => setIsCategoriesOpen(false)}>
                    <a
                        href='/'
                        className='hover:text-primary hover:transition hover:duration-200 hover:ease-in-out'
                    >
                        Home
                    </a>
                </li>
                <li className='relative'>
                    <div
                        className='cursor-pointer flex items-center hover:text-primary hover:transition hover:duration-200 hover:ease-in-out'
                        onClick={toggleCategories}
                        onMouseEnter={() => setIsCategoriesOpen(true)}
                    >
                        Categories <FaAngleDown className='text-2xl ml-2' />
                    </div>
                    {isCategoriesOpen && (
                        <ul
                            className='absolute top-12 -left-80 bg-background text-black flex items-center justify-between space-x-12 py-5 px-4 mt-2'
                            onMouseLeave={() => setIsCategoriesOpen(false)}
                        >
                            <li className='px-4 py-2 hover:text-primary hover:transition hover:duration-300 hover:ease-in-out cursor-pointer'>
                                Business
                            </li>
                            <li className='px-4 py-2 hover:text-primary hover:transition hover:duration-300 hover:ease-in-out cursor-pointer'>
                                Sports
                            </li>
                            <li className='px-4 py-2 hover:text-primary hover:transition hover:duration-300 hover:ease-in-out cursor-pointer'>
                                Entertainment
                            </li>
                            <li className='px-4 py-2 hover:text-primary hover:transition hover:duration-300 hover:ease-in-out cursor-pointer'>
                                Technology
                            </li>
                            <li className='px-4 py-2 hover:text-primary hover:transition hover:duration-300 hover:ease-in-out cursor-pointer'>
                                Health
                            </li>
                            <li className='px-4 py-2 hover:text-primary hover:transition hover:duration-300 hover:ease-in-out cursor-pointer'>
                                Science
                            </li>
                        </ul>
                    )}
                </li>

                <li onMouseEnter={() => setIsCategoriesOpen(false)}>
                    <a
                        href='/contact'
                        className='hover:text-primary hover:transition hover:duration-200 hover:ease-in-out'
                    >
                        Contact
                    </a>
                </li>
            </ul>
            <div>
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
