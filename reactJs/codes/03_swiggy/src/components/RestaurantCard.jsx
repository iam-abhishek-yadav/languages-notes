import { CDN_URL } from '../utils/constants';

const RestaurantCard = ({
	restaurantInfo: {
		cloudinaryImageId,
		name,
		cuisines,
		costForTwo,
		avgRatingString,
		sla: { deliveryTime },
	},
}) => {
	return (
		<div className='p-4 w-52 flex flex-col items-center border border-white shadow-md transition-shadow duration-300 ease-in-out rounded-md bg-white hover:bg-gray-100 hover:border-gray-300 hover:shadow-lg'>
			<img
				className='w-full h-auto mb-4'
				alt='res-logo'
				src={CDN_URL + cloudinaryImageId}
				onError={(e) => {
					e.target.onerror = null;
					e.target.src = 'https://via.placeholder.com/264x288';
				}}
			/>
			<h3 className='w-full mb-2 text-sm font-semibold truncate'>{name}</h3>
			<h4 className='w-full mb-1 text-xs text-gray-600 truncate'>
				{cuisines.join(', ')}
			</h4>
			<h4 className='w-full mb-1 text-sm truncate'>{costForTwo}</h4>
			<h4 className='w-full mb-1 text-sm truncate'>{avgRatingString} stars</h4>
			<h4 className='w-full mb-1 text-sm truncate'>{deliveryTime} mins</h4>
		</div>
	);
};

export default RestaurantCard;
