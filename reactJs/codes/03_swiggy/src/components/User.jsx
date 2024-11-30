import React from 'react';

class User extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo: null,
			loading: true,
			error: null,
		};
	}

	async componentDidMount() {
		try {
			const response = await fetch(
				'https://api.github.com/users/iam-abhishek-yadav'
			);
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const data = await response.json();
			this.setState({ userInfo: data, loading: false });
		} catch (error) {
			this.setState({ error: error.message, loading: false });
		}
	}

	componentWillUnmount() {
		console.log('Component will unmount');
	}

	render() {
		const { userInfo, loading, error } = this.state;

		if (loading) {
			return (
				<div className='flex items-center justify-center h-screen'>
					<div className='animate-pulse space-y-4'>
						<div className='w-32 h-32 bg-gray-200 rounded-full'></div>
						<div className='w-48 h-6 bg-gray-200 rounded'></div>
						<div className='w-32 h-6 bg-gray-200 rounded'></div>
						<div className='w-32 h-6 bg-gray-200 rounded'></div>
					</div>
				</div>
			);
		}

		if (error) {
			return (
				<div className='flex items-center justify-center h-screen bg-red-100'>
					<p className='text-red-500'>Error: {error}</p>
				</div>
			);
		}

		const {
			name,
			location,
			avatar_url,
			html_url,
			bio,
			twitter_username,
			public_repos,
			followers,
			following,
		} = userInfo;

		return (
			<div className='flex flex-col items-center p-6 max-w-md mx-auto bg-gray-100 rounded-lg shadow-md'>
				<img
					className='w-32 h-32 rounded-full border-4 border-gray-200'
					src={avatar_url}
					alt='User Avatar'
				/>
				<h1 className='text-2xl font-semibold mt-4'>{name}</h1>
				<h3 className='text-gray-600 mt-2'>{location}</h3>
				<p className='text-gray-700 mt-2 text-center'>{bio}</p>
				<div className='mt-4'>
					<a
						href={html_url}
						target='_blank'
						rel='noopener noreferrer'
						className='text-blue-500 hover:underline'>
						Visit GitHub Profile
					</a>
				</div>
				<div className='mt-4 flex flex-col items-center'>
					<p className='text-gray-600'>
						Twitter: {twitter_username ? `@${twitter_username}` : 'N/A'}
					</p>
					<p className='text-gray-600'>Repositories: {public_repos}</p>
					<p className='text-gray-600'>Followers: {followers}</p>
					<p className='text-gray-600'>Following: {following}</p>
				</div>
			</div>
		);
	}
}

export default User;
