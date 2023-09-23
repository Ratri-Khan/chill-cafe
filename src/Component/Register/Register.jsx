
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const {createUser}  = useContext(AuthContext);

    const handleRegister = event =>{
        event.preventDefault();
      const form = event.target;
      const name = form.name.value;
    //   const image = form.image.value;
      const email = form.email.value;
      const password = form.password.value;
      const confirmPassword = form.confirmPassword.value;
    //   console.log(name,email,password);
    createUser(email,name,password,confirmPassword)
    .then(result =>{
        const createdUser = result.user;
        console.log(createdUser);
    })
    .catch(error => {
        console.log(error);
    })
       
    }
 
    return (
        <form onSubmit={handleRegister} className='m-auto mt-5 w-2/4'>
            <div className='p-10 w-3/4 border-2 m-auto'>
                <h3 className='text-center text-xl'>Please Register</h3>
                <div className="form-control">
                    <label className='block text-xl'>Name</label>
                    <input className='rounded w-full border-2 py-2 bg-red-100 border-red-700' type="text" name="name" placeholder='Enter Your Name' id="" />
                </div>
                {/* <div className="form-control">
                    <label className='block text-xl'>Image</label>
                    <input className='rounded w-full border-2 py-2 bg-red-100 border-red-700' type="text" name="name" placeholder='Enter Your Image URL' id="" />
                </div> */}
                <div className="form-control">
                    <label className='block text-xl'>Email</label>
                    <input className='rounded w-full border-2 py-2 bg-red-100 border-red-700' type="email" name="email" placeholder='Enter Your Email' id="" />
                </div>
                <div className="form-control">
                    <label className='block text-xl'>Password</label>
                    <input className='rounded w-full border-2 py-2 bg-red-100 border-red-700' type="text" name="password" placeholder='Enter Your password' id="" />
                </div>
                <div className="form-control">
                    <label className='block text-xl'>Confirm Password</label>
                    <input className='rounded w-full border-2 py-2 bg-red-100 border-red-700' type="text" name="confirmPassword" placeholder='Enter Your password' id="" />
                </div>
                <div className="form-control">
                    <p className=''><Link to='/login'>Already have an Account?</Link></p>
                </div>
                <div>
                    <button className='rounded w-full border-2 py-2 mt-5 bg-red-700 border-red-700 text-white' type="submit">Register</button>
                </div>
            </div>
        </form>
    );
};

export default Register;