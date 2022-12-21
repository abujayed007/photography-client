import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';




const Login = () => {
    const [error, setError] = useState(null)
    const { logIn, googleLogin , } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    useTitle('Login')

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                navigate(from, {replace: true})
                form.reset()
                console.log(user);
            })
            .catch(error => console.log(error));

            if(password.length < 6 ){
                setError('Password should be 6 charectar')
                return
            }
            
    }

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleLogin = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                navigate(from, {replace: true})
                console.log(user);
            })
            .catch(error => console.log(error));
    }

   
    return (
        <div className=" w-1/2 mx-auto my-20">
            <div className="hero-content">
                <div className="card  w-full  shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required type="email" name='email' placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input required type="password" name='password' placeholder="password" className="input input-bordered" />
                            <p class="text-red-500 text-left">{error}</p>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center'>New to Jayed's Photography? <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                    <button onClick={handleGoogleLogin} className='w-2/3 mt-6 mx-auto btn bg-blue-600'> Google Login</button>

                </div>
            </div>
        </div>
    );
};

export default Login;