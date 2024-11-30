import React, { Component } from 'react';
import User from './User';

class About extends Component {
	render() {
		return (
			<div className='w-full h-screen bg-white p-6  mx-auto rounded-lg shadow-md'>
				<User />
			</div>
		);
	}
}

export default About;
