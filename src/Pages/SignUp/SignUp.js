import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Loading from '../Loading/Loading';

const SignUp = () => {
    const [error, setError] = useState(null)
    const {createUser, loading} = useContext(AuthContext)
 useTitle('Sign Up')
    const handleSignUp = e =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            form.reset()
            console.log(user)
        })
        .catch(error => console.error(error))
        if(password.length < 6 ){
            setError('Password should be 6 charectar')
            return
        }
        

    }

    if(loading){
        return  <Loading></Loading>
       }

    return (
        <div className="w-1/2 mx-auto my-20">
            <div className="card  w-full  shadow-2xl bg-base-100 py-20">
                <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                        <p class="text-red-500">{error}</p>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Sign Up" />
                    </div>
                </form>
                <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
        </div>
    </div>
    );
};

export default SignUp;