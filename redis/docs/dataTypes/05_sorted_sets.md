**Sets**
Redis sorted sets are collections of unique strings (members) ordered by an associated score. They combine the unique properties of sets with ordered elements, making them ideal for use cases like leaderboards and rate limiters.

- Each member in a sorted set is associated with a score, allowing for ordered retrieval.
- Members with the same score are ordered lexicographically.

**Commands**

- **ZADD**: Adds or updates members and their scores in the sorted set.
- **ZRANGE**: Returns members within a specified range, ordered low to high.
- **ZREVRANGE**: Returns members within a specified range, ordered high to low.
- **ZRANGEBYSCORE**: Returns members within a score range.
- **ZREM**: Removes specified members from the sorted set.
- **ZREMRANGEBYSCORE**: Removes members within a score range.
- **ZRANK**: Returns the rank of a member in ascending order.
- **ZREVRANK**: Returns the rank of a member in descending order.

**Use Cases**

- **Leaderboards**: Maintain and display high scores in games.
- **Rate Limiting**: Implement sliding-window rate limiters for APIs.

**Examples**

- **Adding Members and Scores:**

  ```shell
  ZADD racer_scores 10 "Norem"
  ZADD racer_scores 12 "Castilla"
  ZADD racer_scores 8 "Sam-Bodden" 10 "Royce" 6 "Ford" 14 "Prickett"
  ```

  ```javascript
  const redis = require('redis');
  const client = redis.createClient();

  client.zadd('racer_scores', 10, 'Norem', (err, reply) => console.log(reply));
  client.zadd('racer_scores', 12, 'Castilla', (err, reply) =>
  	console.log(reply)
  );
  client.zadd(
  	'racer_scores',
  	8,
  	'Sam-Bodden',
  	10,
  	'Royce',
  	6,
  	'Ford',
  	14,
  	'Prickett',
  	(err, reply) => console.log(reply)
  );
  ```

- **Fetching Members in Order:**

  ```shell
  ZRANGE racer_scores 0 -1
  ZREVRANGE racer_scores 0 -1
  ZRANGE racer_scores 0 -1 withscores
  ```

  ```javascript
  client.zrange('racer_scores', 0, -1, (err, reply) => console.log(reply));
  client.zrevrange('racer_scores', 0, -1, (err, reply) => console.log(reply));
  client.zrange('racer_scores', 0, -1, 'withscores', (err, reply) =>
  	console.log(reply)
  );
  ```

- **Operating on Ranges:**

  ```shell
  ZRANGEBYSCORE racer_scores -inf 10
  ZREM racer_scores "Castilla"
  ZREMRANGEBYSCORE racer_scores -inf 9
  ```

  ```javascript
  client.zrangebyscore('racer_scores', '-inf', 10, (err, reply) =>
  	console.log(reply)
  );
  client.zrem('racer_scores', 'Castilla', (err, reply) => console.log(reply));
  client.zremrangebyscore('racer_scores', '-inf', 9, (err, reply) =>
  	console.log(reply)
  );
  ```

- **Fetching Ranks:**

  ```shell
  ZRANK racer_scores "Norem"
  ZREVRANK racer_scores "Norem"
  ```

  ```javascript
  client.zrank('racer_scores', 'Norem', (err, reply) => console.log(reply));
  client.zrevrank('racer_scores', 'Norem', (err, reply) => console.log(reply));
  ```

- **Lexicographical Scores:**

  ```shell
  ZADD racer_scores 0 "Norem" 0 "Sam-Bodden" 0 "Royce" 0 "Castilla" 0 "Prickett" 0 "Ford"
  ZRANGE racer_scores 0 -1
  ZRANGEBYLEX racer_scores [A [L
  ```

  ```javascript
  client.zadd(
  	'racer_scores',
  	0,
  	'Norem',
  	0,
  	'Sam-Bodden',
  	0,
  	'Royce',
  	0,
  	'Castilla',
  	0,
  	'Prickett',
  	0,
  	'Ford',
  	(err, reply) => console.log(reply)
  );
  client.zrange('racer_scores', 0, -1, (err, reply) => console.log(reply));
  client.zrangebylex('racer_scores', '[A', '[L', (err, reply) =>
  	console.log(reply)
  );
  ```

**Performance**

- Most sorted set operations are O(log(n)), where n is the number of members.
- Operations like ZRANGE with large result sets (tens of thousands or more) have additional considerations.
