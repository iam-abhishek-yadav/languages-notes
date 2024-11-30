import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantList = ({
	restaurants,
	loading,
	SkeletonCard,
	RestaurantCard,
}) => {
	return (
		<div className='h-full flex flex-wrap gap-5 justify-around'>
			{loading
				? Array.from({ length: 8 }).map((_, index) => (
						<SkeletonCard key={index} />
				  ))
				: restaurants.map((restaurant) => (
						<Link
							to={`/restaurant/${restaurant.info.id}`}
							key={restaurant.info.id}
							className='block text-inherit no-underline hover:text-inherit'>
							<RestaurantCard restaurantInfo={restaurant.info} />
						</Link>
				  ))}
		</div>
	);
};

export default RestaurantList;
