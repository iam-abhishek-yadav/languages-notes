import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchMenu from '../utils/useFetchMenu';

const RestaurantMenu = () => {
	const { id } = useParams();
	const { resInfo, menu, loading, error } = useFetchMenu(id);

	if (loading) {
		return (
			<div className='relative w-full h-full overflow-hidden'>
				<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:800px_104px] animate-shimmer'>
					<div className='rounded-md bg-gray-300 mb-2.5 large'></div>
					<div className='rounded-md bg-gray-300 mb-2.5 medium'></div>
					<div className='rounded-md bg-gray-300 mb-2.5 small'></div>
					<div className='rounded-md bg-gray-300 mb-2.5 small'></div>
				</div>
			</div>
		);
	}

	if (error) {
		return <div>Error fetching menu.</div>;
	}

	const { name, cuisines, costForTwoMessage, avgRating } = resInfo;

	return (
		<div className='max-w-6xl mx-auto my-5 p-5 bg-white rounded-lg shadow-md'>
			<h1 className='text-3xl text-gray-800'>{name}</h1>
			<p className='text-gray-600 my-1'>Cuisines: {cuisines?.join(', ')}</p>
			<p className='text-gray-600 my-1'>{costForTwoMessage}</p>
			<p className='text-gray-600 my-1'>Rating: {avgRating}</p>
			<h2 className='text-2xl text-orange-600 my-5'>Menu</h2>
			{menu.length > 0 ? (
				menu.map((item) => (
					<div
						className='border-b border-gray-300 py-4'
						key={item?.card?.info?.id}>
						<h3 className='text-xl text-gray-800'>{item?.card?.info?.name}</h3>
						<p className='text-gray-600'>{item?.card?.info?.description}</p>
						<p className='text-orange-600 font-bold'>
							Rs. {item?.card?.info?.finalPrice / 100}
						</p>
					</div>
				))
			) : (
				<p>No menu items available.</p>
			)}
		</div>
	);
};

export default RestaurantMenu;
