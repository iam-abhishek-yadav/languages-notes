const { kafka } = require('./client');
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

async function init() {
	try {
		const producer = kafka.producer();

		console.log('Connecting Producer...');
		await producer.connect();
		console.log('Producer connected successfully.');

		rl.setPrompt('> ');
		rl.prompt();

		rl.on('line', async (line) => {
			const [riderName, location] = line.split(' ');
			if (!riderName || !location) {
				console.log(
					'Invalid input. Please enter rider name and location (e.g., John north)'
				);
				rl.prompt();
				return;
			}

			try {
				await producer.send({
					topic: 'rider-status',
					messages: [
						{
							key: 'location-update',
							value: JSON.stringify({ name: riderName, location }),
							partition: location.toLowerCase() === 'north' ? 0 : 1,
						},
					],
				});
				console.log(`Message sent: ${riderName} is at ${location}`);
			} catch (error) {
				console.error('Error sending message:', error);
			}

			rl.prompt();
		}).on('close', async () => {
			console.log('Disconnecting Producer...');
			await producer.disconnect();
			console.log('Producer disconnected.');
			process.exit(0);
		});
	} catch (error) {
		console.error('Failed to initialize producer:', error);
		process.exit(1);
	}
}

init();
