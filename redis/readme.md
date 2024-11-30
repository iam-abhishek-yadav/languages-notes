Docker command to start the redis

- **6379 (Redis Server)**: This is the default port for Redis server. Clients and applications communicate with the Redis server over this port to perform operations like storing and retrieving data.
- **8001 (RedisInsight)**: RedisInsight is a web-based GUI for managing Redis databases. RedisInsight provides a visual interface to interact with Redis databases.

```bash
docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redislabs/redisinsight:latest
```
