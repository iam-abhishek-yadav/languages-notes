import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Header, Error } from './components';

const Body = lazy(() => import('./components/Body'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const RestaurantMenu = lazy(() => import('./components/RestaurantMenu'));
const Grocery = lazy(() => import('./components/Grocery'));
const Cart = lazy(() => import('./components/Cart'));

const AppLayout = () => {
	return (
		<div className='app'>
			<Header />
			<Suspense fallback={<div>Loading...</div>}>
				<Outlet />
			</Suspense>
		</div>
	);
};

const router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				path: '/',
				element: (
					<Suspense fallback={<div>Body Loading...</div>}>
						<Body />
					</Suspense>
				),
			},
			{
				path: '/about',
				element: (
					<Suspense fallback={<div>About Loading...</div>}>
						<About />
					</Suspense>
				),
			},
			{
				path: '/contact',
				element: (
					<Suspense fallback={<div>Contact Loading...</div>}>
						<Contact />
					</Suspense>
				),
			},
			{
				path: '/grocery',
				element: (
					<Suspense fallback={<div>Grocery Loading...</div>}>
						<Grocery />
					</Suspense>
				),
			},
			{
				path: '/cart',
				element: (
					<Suspense fallback={<div>Cart Loading...</div>}>
						<Cart />
					</Suspense>
				),
			},
			{
				path: '/restaurant/:id',
				element: (
					<Suspense fallback={<div>Restaurant Menu Loading...</div>}>
						<RestaurantMenu />
					</Suspense>
				),
			},
		],
		errorElement: <Error />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
