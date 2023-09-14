import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {

    const [ isVisible, setIsVisible ] = useState(false)
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const signOutOnClick = () => {
        logout();
    };

    const signInOnClick = () => {
        loginWithRedirect();
    };

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }


    return (
        <nav className='flex items-center justify-between flex-wrap bg-slate-800 p-6'>
            <div className='flex items-center flex-shrink-0 text-white mr-6'>
                <Link to='/' className='font-semibold text-xl tracking-tight'>Inventory</Link>
            </div>
            <div className='block'>
                <button 
                onClick={dropDown} 
                className='flex items-center px-3 py-2 text-slate-200 border rounded
                 border-slate-400 hover:text-white hover:border-white'
                 >
                    <i className='fas fa-bars'></i>
                </button>
            </div>
            { isVisible ? (
            <div className='w-full flex-grow items-center'>
                <div className="text-sm lg:flex-grow">
                    <Button 
                    className='p-3 m-5 bg-slate-500 hover:bg-slate-400 hover:text-white rounded'
                    onClick={ clicked } 
                    >
                        <div>
                            <Link to='/' className='flex place-items-center lg:inline-block
                             text-black-200 hover:text-white'>
                                Home
                            </Link>
                        </div>
                    </Button>

                    <Button 
                    className='p-3 m-5 bg-slate-500 hover:bg-slate-400 hover:text-white rounded'
                    onClick={ clicked } 
                    >
                        <div>
                            <Link to='/about' className='flex place-items-center lg:inline-block
                             text-black-200 hover:text-white'>
                                About
                            </Link>
                        </div>
                    </Button>
                    
                    <Button 
                    className='p-3 m-5 bg-slate-500 hover:bg-slate-400 hover:text-white rounded'
                    onClick={ clicked } 
                    >
                        <div>
                            <Link to='/contact' className='flex place-items-center lg:inline-block
                             text-black-200 hover:text-white'>
                                Contact
                            </Link>
                        </div>
                    </Button>

                    <Button 
                    className='p-3 m-5 bg-slate-500 hover:bg-slate-400 hover:text-white rounded'
                    onClick={ clicked } 
                    >
                        <div>
                            <Link to='/dashboard' className='flex place-items-center lg:inline-block
                             text-black-200 hover:text-white'>
                                Dashboard
                            </Link>
                        </div>
                    </Button>
                    {
                            !isAuthenticated ? 
                            <Button 
                            className='p-3 m-5 bg-slate-500 hover:bg-slate-400 hover:text-white rounded'
                            onClick={ clicked }
                            >
                                <div>
                                    <Link to="/" onClick={signInOnClick} 
                                    className='flex place-items-center lg:inline-block
                                        text-black-200 hover:text-white'
                                    >
                                        Sign in
                                    </Link>
                                </div>
                            </Button>
                            :
                            <Button 
                            className='p-3 m-5 bg-slate-500 hover:bg-slate-400 hover:text-white rounded'
                            onClick={ clicked }
                            >
                                <div>
                                    <Link to="/" onClick={signOutOnClick} 
                                        className='flex place-items-center lg:inline-block
                                            text-black-200 hover:text-white'
                                        >
                                            Sign Out
                                    </Link>
                                </div>
                            </Button>
                        }
                </div>
            </div>
            ) : (
            <></>
            ) }
        </nav>
    )  
}

export default Navbar