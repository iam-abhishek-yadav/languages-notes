const express = require('express');
const axios = require('axios');
const Redis = require('ioredis');

const app = express();
const port = 3000;
const redis = new Redis();

const baseURL = 'https://jsonplaceholder.typicode.com';

app.use(express.json());

app.get('/photos', async (req, res) => {
	const cacheKey = 'photos';

	try {
		const cacheData = await redis.get(cacheKey);
		if (cacheData) {
			console.log('Fetching photos from Redis cache...');
			const photos = JSON.parse(cacheData);
			res.json(photos);
		} else {
			console.log('Fetching photos from API...');
			const response = await axios.get(`${baseURL}/photos`);
			const photos = response.data;

			await redis.set(cacheKey, JSON.stringify(photos), 'EX', 3600);
			console.log('photos stored in Redis cache.');

			res.json(photos);
		}
	} catch (error) {
		console.error('Error fetching photos:', error.message);
		res.status(500).json({ error: 'Failed to fetch photos' });
	}
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
