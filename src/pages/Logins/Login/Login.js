import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from '@firebase/auth';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';

const Login = () => {
    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/home';

    const auth = getAuth();

    // for login with email and password
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }

        if (isLogin) {
            processLogin(email, password);
        }
        else {
            registerNewUser(email, password);
        }
    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                history.push(redirect_url);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
                history.push(redirect_url);
                window.location.reload();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => { })
    }


    // for login with google
    const { signInUsingGoogle } = useAuth();

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    return (
        <div className="container-fluid login-form">
            <div className='card shadow-lg my-5 w-50 mx-auto'>
                <form onSubmit={handleRegistration} className='row'>
                    <h2 className='text-success fw-bold mt-3 text-center'>Please {isLogin ? 'Login' : 'Register'} </h2>

                    {isLogin ?
                        <div className='text-center'>
                            <div className="row container-fluid">
                                <div className="col-xxl-4 col-md-4 col-sm-12 col-xs-12">
                                    <label for="validationDefault05" className="form-label text-start">Email:</label>
                                </div>

                                <div className="col-xxl-8 col-md-8 col-sm-12 col-xs-12">
                                    <input onBlur={handleEmailChange} className='container' type="email" name="" id="" placeholder="Your Email" required />
                                    <br />
                                </div>
                            </div>

                            <div className="row container-fluid">
                                <div className="col-xxl-4 col-md-4 col-sm-12 col-xs-12">
                                    <label for="validationDefault05" className="form-label text-start">Password:</label>
                                </div>

                                <div className="col-xxl-8 col-md-8 col-sm-12 col-xs-12">
                                    <input onBlur={handlePasswordChange} className='container-fluid' type="password" name="" id="" placeholder='Password' required />
                                    <br />
                                </div>
                            </div>
                        </div>
                        :
                        <div className='text-center'>
                            <div className="row container-fluid">
                                <div className="col-xxl-4 col-md-4 col-sm-12 col-xs-12">
                                    <label for="validationDefault05" className="form-label text-start">Name:</label>
                                </div>

                                <div className="col-xxl-8 col-md-8 col-sm-12 col-xs-12">
                                    <input onBlur={handleNameChange} className='container' type="text" name="" id="" placeholder="Your Name" required /><br />
                                </div>
                            </div>

                            <div className="row container-fluid">
                                <div className="col-xxl-4 col-md-4 col-sm-12 col-xs-12">
                                    <label for="validationDefault05" className="form-label text-start">Email:</label>
                                </div>

                                <div className="col-xxl-8 col-md-8 col-sm-12 col-xs-12">
                                    <input onBlur={handleEmailChange} className='container' type="email" name="" id="" placeholder="Your Email" required />
                                    <br />
                                </div>
                            </div>

                            <div className="row container-fluid">
                                <div className="col-xxl-4 col-md-4 col-sm-12 col-xs-12">
                                    <label for="validationDefault05" className="form-label text-start">Password:</label>
                                </div>

                                <div className="col-xxl-8 col-md-8 col-sm-12 col-xs-12">
                                    <input onBlur={handlePasswordChange} className='container' type="password" name="" id="" placeholder='Password' required />
                                    <br />
                                </div>
                            </div>
                        </div>
                    }


                    <div className="container px-2">
                        <div className="container-fluid form-check mt-3">
                            <div className="col-md-4">
                                <input onChange={toggleLogin} className="form-check-input ms-2" type="checkbox" id="gridCheck1" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-check-label" htmlFor="gridCheck1">
                                    Already Registered ?
                                </label>
                            </div>
                        </div>

                        <div className='row text-danger my-2 text-center'>
                            <div className='cols-12'>
                                {error}
                            </div>
                        </div>
                    </div>

                    <div className="container row justify-content-evenly text-center">
                        <div className='col-md-4 col-sm-12 my-3'>
                            <button type="submit" className='btn btn-success'>
                                {isLogin ?
                                    'Login' : 'Register and Login'}
                            </button>
                        </div>

                        <div className='col-md-4 col-sm-12 my-3'>
                            <button type='button' onClick={handleResetPassword} className="btn btn-danger ms-3">Reset Password</button>
                        </div>
                    </div>
                </form>

                <div className="text-center">
                    <p>New to <span className='fw-bold text-danger'>MEDICAL PLANET? </span></p>
                    <Link to="/login"> <button className='btn btn-outline-primary ms-1'>Create Account</button></Link>
                </div>

                <div className='text-center'>----------or----------</div>
                <button
                    className="btn btn-warning my-3 w-50 mx-auto"
                    onClick={handleGoogleLogin}
                >Google Sign In
                </button>
            </div>
        </div>
    );
};

export default Login;