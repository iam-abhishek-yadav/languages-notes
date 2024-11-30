import React, { useState, useEffect } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const user = localStorage.getItem('user');
		setIsLoggedIn(!!user);
	}, []);

	const handleAuthClick = () => {
		if (isLoggedIn) {
			localStorage.removeItem('user');
			setIsLoggedIn(false);
		} else {
			localStorage.setItem('user', 'loggedIn');
			setIsLoggedIn(true);
		}
	};

	return (
		<div className='flex items-center justify-between p-4 bg-white border-b border-gray-200'>
			<div className='flex-shrink-0'>
				<img
					className='h-10'
					src={LOGO_URL}
					alt='logo'
				/>
			</div>
			<nav className='flex-grow'>
				<ul className='flex justify-center items-center list-none p-0 m-0 space-x-4'>
					<li>
						<Link
							to='/'
							className='text-gray-800 text-lg font-medium py-2 px-3 rounded transition-colors duration-300 hover:bg-orange-500 hover:text-white focus:outline-none'>
							Home
						</Link>
					</li>
					<li>
						<Link
							to='/about'
							className='text-gray-800 text-lg font-medium py-2 px-3 rounded transition-colors duration-300 hover:bg-orange-500 hover:text-white focus:outline-none'>
							About Us
						</Link>
					</li>
					<li>
						<Link
							to='/contact'
							className='text-gray-800 text-lg font-medium py-2 px-3 rounded transition-colors duration-300 hover:bg-orange-500 hover:text-white focus:outline-none'>
							Contact
						</Link>
					</li>
					<li>
						<Link
							to='/grocery'
							className='text-gray-800 text-lg font-medium py-2 px-3 rounded transition-colors duration-300 hover:bg-orange-500 hover:text-white focus:outline-none'>
							Grocery
						</Link>
					</li>
					<li>
						<Link
							to='/cart'
							className='text-gray-800 text-lg font-medium py-2 px-3 rounded transition-colors duration-300 hover:bg-orange-500 hover:text-white focus:outline-none'>
							Cart
						</Link>
					</li>
				</ul>
			</nav>
			<div>
				<button
					className='bg-orange-500 text-white border-none py-2 px-4 rounded cursor-pointer text-lg transition-colors duration-300 hover:bg-orange-600'
					onClick={handleAuthClick}>
					{isLoggedIn ? 'Logout' : 'Login'}
				</button>
			</div>
		</div>
	);
};

export default Header;
