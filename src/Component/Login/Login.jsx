import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate('/');
        })
    }

    return (
        <form onSubmit={handleLogin} className='m-auto mt-5 w-2/4'>
            <div className='p-10 w-3/4 border-2 m-auto'>
                <h3 className='text-center text-xl'>Please Login</h3>
                <div className="form-control">
                    <label className='block text-xl'>Email</label>
                    <input className='rounded w-full border-2 py-2 bg-red-100 border-red-700' type="email" name="email" placeholder='Enter Your Email' id="" />
                </div>
                <div className="form-control">
                    <label className='block text-xl'>Password</label>
                    <input className='rounded w-full border-2 py-2 bg-red-100 border-red-700' type="text" name="password" placeholder='Enter Your password' id="" />
                </div>
                <div>
                    <button className='rounded w-full border-2 py-2 mt-5 bg-red-700 border-red-700 text-white' type="submit">Login</button>
                </div>
            </div>
        </form>
    );
};

export default Login;