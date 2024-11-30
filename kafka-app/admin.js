const { kafka } = require('./client');

async function init() {
	const admin = kafka.admin();

	try {
		console.log('Admin connecting...');
		await admin.connect();
		console.log('Admin Connection Success...');

		console.log('Creating Topic [rider-status]');
		await admin.createTopics({
			topics: [
				{
					topic: 'rider-status',
					numPartitions: 2,
				},
			],
		});
		console.log('Topic Created Success [rider-status]');
	} catch (error) {
		console.error('Error during admin operation:', error);
	} finally {
		console.log('Disconnecting Admin...');
		await admin.disconnect();
	}
}

init().catch((error) => {
	console.error('Failed to initialize:', error);
});
