import React from 'react';

const SkeletonCard = () => {
	return (
		<div className='p-4 w-52 flex flex-col border border-gray-300 rounded-md bg-gray-100 shadow-sm'>
			<div className='w-full h-32 bg-gray-300 rounded-md mb-4 animate-pulse'></div>
			<div className='w-4/5 h-5 bg-gray-300 rounded-md mb-3 animate-pulse'></div>
			<div className='w-3/5 h-5 bg-gray-300 rounded-md mb-3 animate-pulse'></div>
			<div className='w-2/5 h-5 bg-gray-300 rounded-md mb-3 animate-pulse'></div>
			<div className='w-2/5 h-5 bg-gray-300 rounded-md mb-3 animate-pulse'></div>
			<div className='w-2/5 h-5 bg-gray-300 rounded-md mb-3 animate-pulse'></div>
		</div>
	);
};

export default SkeletonCard;
