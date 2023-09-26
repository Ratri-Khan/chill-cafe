import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    const handleLogout = () =>{
        logOut()
        .then()
        .catch(error => console.log(error));
    }

    return (
        <div className="navbar bg-red-900">
            <div className="navbar-start">
            <Link to='/'> <a className="normal-case text-xl text-white">
                    Chill-Cafe</a></Link>
            </div>
            <div className="navbar-end">
                <ul className='flex text-white font-bold'>                   
                <Link to='/'> <li className='mr-6'>Home</li></Link>
                    {
                        user ? <li className='cursor-pointer' onClick={handleLogout} >Logout</li>:
                        <>
                        <li className='mr-6 cursor-pointer'><Link to='/register'>Register</Link></li>
                    <li className='cursor-pointer'><Link to='/login'>Login</Link></li>
                        </>
                    }
                    
                    
                </ul>
            </div>
        </div>
    );
};

export default Header;