import { useState, useEffect } from 'react';
import { API_URL } from '../utils/constants';

const useFetchRestaurants = () => {
	const [restaurants, setRestaurants] = useState([]);
	const [allRestaurants, setAllRestaurants] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			setError(null);
			try {
				const response = await fetch(API_URL);
				const data = await response.json();
				const fetchedRestaurants =
					data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
						?.restaurants || [];

				setRestaurants(fetchedRestaurants);
				setAllRestaurants(fetchedRestaurants);
			} catch (error) {
				setError(error);
				console.error('Error fetching data:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	return { restaurants, allRestaurants, loading, error };
};

export default useFetchRestaurants;
