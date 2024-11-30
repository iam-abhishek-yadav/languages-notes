import React, { useState, useCallback, useEffect } from 'react';
import { RestaurantCard, SkeletonCard } from './index';
import SearchBar from './SearchBar';
import Filters from './Filters';
import RestaurantList from './RestaurantList';
import useFetchRestaurants from '../utils/useFetchRestaurants';

const Body = () => {
	const {
		restaurants: fetchedRestaurants,
		allRestaurants,
		loading,
	} = useFetchRestaurants();

	const [restaurants, setRestaurants] = useState(fetchedRestaurants);
	const [isTopRated, setIsTopRated] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const [selectedCost, setSelectedCost] = useState('');
	const [selectedDeliveryTime, setSelectedDeliveryTime] = useState('');

	useEffect(() => {
		setRestaurants(fetchedRestaurants);
	}, [fetchedRestaurants]);

	const handleClick = useCallback(() => {
		if (isTopRated) {
			setRestaurants(allRestaurants);
			setIsTopRated(false);
			setSearchQuery('');
			setSelectedCost('');
			setSelectedDeliveryTime('');
		} else {
			const topRated = restaurants.filter(
				(restaurant) => restaurant?.info?.avgRating >= 4.5
			);
			setRestaurants(topRated);
			setIsTopRated(true);
		}
	}, [allRestaurants, isTopRated, restaurants]);

	const handleSearch = useCallback(() => {
		let filtered = allRestaurants.filter((restaurant) =>
			restaurant.info.name.toLowerCase().includes(searchQuery.toLowerCase())
		);

		if (selectedCost) {
			const costLimit = parseInt(selectedCost, 10);
			filtered = filtered.filter((restaurant) => {
				const costStr = restaurant.info.costForTwo;
				const costNum = parseInt(costStr.replace(/[^\d]/g, ''), 10);
				return costNum <= costLimit;
			});
		}

		if (selectedDeliveryTime) {
			filtered = filtered.filter(
				(restaurant) => restaurant.info.sla.deliveryTime <= selectedDeliveryTime
			);
		}

		setRestaurants(filtered);
	}, [allRestaurants, searchQuery, selectedCost, selectedDeliveryTime]);

	return (
		<div className='bg-white p-5'>
			<div className='flex items-center gap-5 mb-5 flex-wrap'>
				<SearchBar
					searchQuery={searchQuery}
					setSearchQuery={setSearchQuery}
					onSearch={handleSearch}
				/>
				<Filters
					isTopRated={isTopRated}
					handleClick={handleClick}
					setSelectedCost={setSelectedCost}
					setSelectedDeliveryTime={setSelectedDeliveryTime}
					selectedCost={selectedCost}
					selectedDeliveryTime={selectedDeliveryTime}
				/>
			</div>
			<RestaurantList
				restaurants={restaurants}
				loading={loading}
				SkeletonCard={SkeletonCard}
				RestaurantCard={RestaurantCard}
			/>
		</div>
	);
};

export default Body;
