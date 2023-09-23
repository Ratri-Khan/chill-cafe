import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-red-700">
            <div className="navbar-start">
                <a className="normal-case text-xl text-white">Chill-Cafe</a>
            </div>
            <div className="navbar-end">
                <ul className='flex text-white font-bold'>                   
                    <li className='mr-6'><Link to='/'>Home</Link></li>
                    <li className='mr-6 cursor-pointer'><Link to='/register'>Register</Link></li>
                    <li className='cursor-pointer'><Link to='/login'>Login</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;