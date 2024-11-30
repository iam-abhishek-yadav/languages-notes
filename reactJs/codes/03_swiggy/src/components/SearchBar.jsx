import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery, onSearch }) => {
	return (
		<div className='flex items-center'>
			<input
				type='text'
				placeholder='Search...'
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				className='p-2 text-lg border border-gray-300 rounded-l-md w-64 focus:outline-none focus:border-orange-500'
			/>
			<button
				className='bg-orange-500 text-white border border-gray-300 rounded-r-md py-2 px-4 text-lg cursor-pointer hover:bg-orange-600'
				onClick={onSearch}>
				Search
			</button>
		</div>
	);
};

export default SearchBar;
