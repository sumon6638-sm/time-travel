import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import './Navbar.css'

const Navbar = () => {
    const activeTab = {
        fontWeight: 'bold',
        border: '2px solid yellow',
        borderRadius: '5px',
    }

    const { user, logOut, } = useAuth();

    const handleAdminPanel = ()=> {
        alert('Hey, Are you sure you want to manage it?')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark my-nav">
            <div className="container-fluid">
                <NavLink className="navbar-brand " to="/" style={{ fontFamily: "Permanent Marker" }}>
                    <img className='img-fluid rounded' style={{ height: "50px", width: '100px' }} src="https://i.ibb.co/Tc1TkGY/logo.png" alt="" srcset="" />
                </NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse text-center" id="navbarTogglerDemo02" style={{ fontFamily: "IM Fell English SC" }}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className='text-warning text-decoration-none nav-link' activeStyle={activeTab} to='/home' >HOME</NavLink>
                        </li>

                        <li className="nav-item dropdown">
                            <NavLink className='text-warning text-decoration-none nav-link dropdown-toggle' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" activeStyle={activeTab} to='/services'>TOUR PACKAGE</NavLink>

                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <NavLink className='text-dark text-decoration-none dropdown-item' activeStyle={activeTab} to='/hilltours'>HILL TOUR</NavLink>
                                </li>
                                <li>
                                    <NavLink className='text-dark text-decoration-none dropdown-item' activeStyle={activeTab} to='/oceantours'>OCEAN TOUR</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className='text-warning text-decoration-none nav-link' activeStyle={activeTab} to='/myOrders'>MY ORDER</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='text-warning text-decoration-none nav-link' activeStyle={activeTab} to='/blogs'>BLOGS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='text-warning text-decoration-none nav-link' activeStyle={activeTab} to='/guide'>GUIDE</NavLink>
                        </li>
                        {
                            user.email &&
                            <li className="nav-item">
                                <NavLink onClick={handleAdminPanel} className='text-warning text-decoration-none nav-link' activeStyle={activeTab} to='/admin'>ADMIN</NavLink>
                            </li>
                        }
                        
                        <li className="nav-item">
                            <NavLink className='text-warning text-decoration-none nav-link' activeStyle={activeTab} to='/about'>ABOUT US</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='text-warning text-decoration-none nav-link' activeStyle={activeTab} to='/contact'>CONTACT US</NavLink>
                        </li>
                    </ul>

                    {/* <button onClick={handleLogin} className='btn btn-outline-warning me-3'><i className="fas fa-sign-in-alt"></i> Login/Register</button> */}

                    {/* <div>
                        <Link to='/login'>
                            <button onClick={ToggleButton} className='btn btn-outline-warning me-3'><i className="fas fa-sign-in-alt"></i> {isLogin ?
                                "Login" :
                                "LogOut"}</button>
                        </Link>
                    </div> */}

                    {
                        user.email &&
                        <span style={{ color: 'white', marginRight: '10px' }}>Hello {user.displayName} </span>
                    }

                    {
                        user?.email ?
                            <button onClick={logOut} className='btn btn-outline-warning me-3'><img className='img-fluid rounded-circle' style={{ height: '35px' }} src={user.photoURL} alt="" /> Log Out</button> :
                            <div>
                                <Link to='/login'>
                                    <button className='btn btn-outline-warning me-3'><i className="fas fa-sign-in-alt"></i> Login/Register</button>
                                </Link>
                            </div>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;