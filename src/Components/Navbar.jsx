// import { Link } from 'react-router-dom';
import { navLinks } from '../Constants/index';
import { assets } from '../assets/assets';

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between px-24 border border-black py-8'>
            <div className='flex items-center justify-center border border-blue'>
                <img src={assets.Logo} alt='logo' />
                <h1 className=''>New Nexus</h1>
            </div>
            <ul className='border border-primary flex space-x-12'>
                {navLinks.map((link) => (
                    <li key={link.label} className='border border-red'>
                        <a href={link.linkTo}>{link.label}</a>
                    </li>
                ))}
            </ul>
            <div className='border border-red'>
                <input type='text' />
            </div>
        </nav>
    );
};

export default Navbar;
