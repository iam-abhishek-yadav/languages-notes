**Hashes**
Redis hashes are collections of field-value pairs, useful for representing objects or storing groupings of counters.

**Commands**

- **HSET**: Sets the value of one or more fields in a hash.
- **HGET**: Retrieves the value at a given field.
- **HMGET**: Returns the values of one or more fields.
- **HINCRBY**: Increments the value at a given field by the provided integer.

**Examples**

- **Setting and Getting Hash Fields:**

  ```shell
  HSET bike:1 model Deimos brand Ergonom type 'Enduro bikes' price 4972
  HGET bike:1 model
  HGET bike:1 price
  HGETALL bike:1
  ```

  ```javascript
  const redis = require('redis');
  const client = redis.createClient();

  client.hset(
  	'bike:1',
  	'model',
  	'Deimos',
  	'brand',
  	'Ergonom',
  	'type',
  	'Enduro bikes',
  	'price',
  	'4972'
  );
  client.hget('bike:1', 'model', (err, reply) => console.log(reply));
  client.hget('bike:1', 'price', (err, reply) => console.log(reply));
  client.hgetall('bike:1', (err, reply) => console.log(reply));
  ```

- **Getting Multiple Fields:**

  ```shell
  HMGET bike:1 model price no-such-field
  ```

  ```javascript
  client.hmget('bike:1', ['model', 'price', 'no-such-field'], (err, reply) =>
  	console.log(reply)
  );
  ```

- **Incrementing Field Values:**

  ```shell
  HINCRBY bike:1 price 100
  HINCRBY bike:1 price -100
  ```

  ```javascript
  client.hincrby('bike:1', 'price', 100, (err, reply) => console.log(reply));
  client.hincrby('bike:1', 'price', -100, (err, reply) => console.log(reply));
  ```

- **Storing Counters:**

  ```shell
  HINCRBY bike:1:stats rides 1
  HINCRBY bike:1:stats crashes 1
  HINCRBY bike:1:stats owners 1
  HGET bike:1:stats rides
  HMGET bike:1:stats owners crashes
  ```

  ```javascript
  client.hincrby('bike:1:stats', 'rides', 1, (err, reply) =>
  	console.log(reply)
  );
  client.hincrby('bike:1:stats', 'crashes', 1, (err, reply) =>
  	console.log(reply)
  );
  client.hincrby('bike:1:stats', 'owners', 1, (err, reply) =>
  	console.log(reply)
  );
  client.hget('bike:1:stats', 'rides', (err, reply) => console.log(reply));
  client.hmget('bike:1:stats', ['owners', 'crashes'], (err, reply) =>
  	console.log(reply)
  );
  ```

**Field Expiration**
New in Redis Community Edition 7.4 is the ability to specify an expiration time or a time-to-live (TTL) value for individual hash fields. Commands include:

- **HEXPIRE**: Set TTL in seconds.
- **HPEXPIRE**: Set TTL in milliseconds.
- **HEXPIREAT**: Set expiration time to a timestamp in seconds.
- **HPEXPIREAT**: Set expiration time to a timestamp in milliseconds.
- **HEXPIRETIME**: Get expiration time as a timestamp in seconds.
- **HPEXPIRETIME**: Get expiration time as a timestamp in milliseconds.
- **HTTL**: Get remaining TTL in seconds.
- **HPTTL**: Get remaining TTL in milliseconds.
- **HPERSIST**: Remove the expiration.

**Examples:**

```javascript
const event = {
	air_quality: 256,
	battery_level: 89,
};

client.hset('sensor:sensor1', event);

client.send_command('HEXPIRE', [
	'sensor:sensor1',
	60,
	'air_quality',
	'battery_level',
]);
client.send_command(
	'HTTL',
	['sensor:sensor1', 'air_quality', 'battery_level'],
	(err, reply) => console.log(reply)
);

client.send_command('HPEXPIRE', ['sensor:sensor1', 60000, 'air_quality']);
client.send_command('HPTTL', ['sensor:sensor1', 'air_quality'], (err, reply) =>
	console.log(reply)
);

const expirationTime = Math.floor(Date.now() / 1000) + 86400;
client.send_command('HEXPIREAT', [
	'sensor:sensor1',
	expirationTime,
	'air_quality',
]);
client.send_command(
	'HEXPIRETIME',
	['sensor:sensor1', 'air_quality'],
	(err, reply) => console.log(reply)
);
```

**Performance**

- Most Redis hash commands are O(1).
- Commands like HKEYS, HVALS, HGETALL, and expiration-related commands are O(n), where n is the number of field-value pairs.

**Limits**

- Each hash can store up to 4,294,967,295 (2^32 - 1) field-value pairs.
- In practice, hashes are limited by the memory available on the Redis server.
