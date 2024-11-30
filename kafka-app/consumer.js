const { kafka } = require('./client');
const { KafkaJSNonRetriableError } = require('kafkajs');

const group = process.argv[2];

async function init() {
	if (!group) {
		console.error(
			'Error: Please provide a consumer group as a command-line argument.'
		);
		process.exit(1);
	}

	const consumer = kafka.consumer({ groupId: group });

	try {
		await consumer.connect();
		console.log(
			`Consumer connected to Kafka broker as part of group '${group}'.`
		);

		await consumer.subscribe({ topic: 'rider-status', fromBeginning: true });
		console.log(`Consumer subscribed to topic 'rider-status'.`);

		await consumer.run({
			eachMessage: async ({ topic, partition, message }) => {
				console.log(
					`${group}: [${topic}]: PART:${partition}: ${message.value.toString()}`
				);
			},
		});
	} catch (error) {
		if (error instanceof KafkaJSNonRetriableError) {
			console.error('Non-retriable error occurred:', error.message);
		} else {
			console.error('Unexpected error occurred:', error);
		}
		process.exit(1);
	}
}

init().catch((error) => {
	console.error('Failed to initialize consumer:', error);
	process.exit(1);
});
