import { useState, useEffect } from 'react';
import { RESTAURANT_URL } from '../utils/constants';

const useFetchMenu = (id) => {
	const [resInfo, setResInfo] = useState({});
	const [menu, setMenu] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchMenu = async () => {
			setLoading(true);
			setError(null);
			try {
				const response = await fetch(`${RESTAURANT_URL + id}`);
				const data = await response.json();
				const info = data?.data.cards[2].card.card.info;
				const menu =
					data?.data.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
						?.card?.itemCards;

				setResInfo(info);
				setMenu(menu);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		if (id) {
			fetchMenu();
		}
	}, [id]);

	return { resInfo, menu, loading, error };
};

export default useFetchMenu;
