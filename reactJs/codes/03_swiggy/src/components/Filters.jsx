import React from 'react';

const Filters = ({
	isTopRated,
	handleClick,
	setSelectedCost,
	setSelectedDeliveryTime,
	selectedCost,
	selectedDeliveryTime,
}) => {
	return (
		<div className='flex items-center'>
			<button
				className='bg-orange-500 text-white border-none py-2 px-4 rounded cursor-pointer text-lg hover:bg-orange-600'
				onClick={handleClick}>
				{isTopRated ? 'Show All Restaurants' : 'Top Rated Restaurants'}
			</button>
			<div className='ml-4 flex items-center gap-8'>
				<div className='flex flex-col gap-1'>
					<label
						htmlFor='cost'
						className='text-gray-800 text-sm'>
						Max Cost for Two:
					</label>
					<select
						id='cost'
						value={selectedCost}
						onChange={(e) => setSelectedCost(e.target.value)}
						className='p-2 border border-gray-300 rounded-md text-sm w-48'>
						<option value=''>Any</option>
						<option value='200'>Up to ₹200</option>
						<option value='500'>Up to ₹500</option>
						<option value='1000'>Up to ₹1000</option>
					</select>
				</div>
				<div className='flex flex-col gap-1'>
					<label
						htmlFor='delivery-time'
						className='text-gray-800 text-sm'>
						Max Delivery Time (minutes):
					</label>
					<select
						id='delivery-time'
						value={selectedDeliveryTime}
						onChange={(e) => setSelectedDeliveryTime(e.target.value)}
						className='p-2 border border-gray-300 rounded-md text-sm w-48'>
						<option value=''>Any</option>
						<option value='30'>Up to 30 minutes</option>
						<option value='45'>Up to 45 minutes</option>
						<option value='60'>Up to 60 minutes</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default Filters;
