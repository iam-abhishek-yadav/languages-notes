**Sets**
A Redis set is an unordered collection of unique strings (members).

- Track unique items (e.g., unique IP addresses accessing a blog post).
- Represent relations (e.g., users with a given role).
- Perform common set operations such as intersections, unions, and differences.

**Basic Commands**

- `SADD` adds a new member to a set.
- `SREM` removes the specified member from the set.
- `SISMEMBER` tests a string for set membership.
- `SINTER` returns the set of members that two or more sets have in common (intersection).
- `SCARD` returns the size (cardinality) of a set.

**Examples**

- **Store Sets of Bikes Racing in France and the USA:**

  ```shell
  SADD bikes:racing:france bike:1
  SADD bikes:racing:france bike:1
  SADD bikes:racing:france bike:2 bike:3
  SADD bikes:racing:usa bike:1 bike:4
  ```

- **Check Whether Bike:1 or Bike:2 Are Racing in the USA:**

  ```shell
  SISMEMBER bikes:racing:usa bike:1
  SISMEMBER bikes:racing:usa bike:2
  ```

- **Find Bikes Competing in Both Races:**

  ```shell
  SINTER bikes:racing:france bikes:racing:usa
  ```

- **Count Bikes Racing in France:**

  ```shell
  SCARD bikes:racing:france
  ```

- **Add and Retrieve Elements:**

  ```shell
  SADD bikes:racing:france bike:1 bike:2 bike:3
  SMEMBERS bikes:racing:france
  ```

- **Test for Set Membership:**

  ```shell
  SISMEMBER bikes:racing:france bike:1
  SMISMEMBER bikes:racing:france bike:2 bike:3 bike:4
  ```

- **Find Differences Between Sets:**

  ```shell
  SADD bikes:racing:usa bike:1 bike:4
  SDIFF bikes:racing:france bikes:racing:usa
  ```

- **Perform Intersection, Union, and Difference:**

  ```shell
  SADD bikes:racing:france bike:1 bike:2 bike:3
  SADD bikes:racing:usa bike:1 bike:4
  SADD bikes:racing:italy bike:1 bike:2 bike:3 bike:4

  SINTER bikes:racing:france bikes:racing:usa bikes:racing:italy
  SUNION bikes:racing:france bikes:racing:usa bikes:racing:italy
  SDIFF bikes:racing:france bikes:racing:usa bikes:racing:italy
  SDIFF bikes:racing:france bikes:racing:usa
  SDIFF bikes:racing:usa bikes:racing:france
  ```

- **Remove Items and Retrieve Random Items:**
  ```shell
  SADD bikes:racing:france bike:1 bike:2 bike:3 bike:4 bike:5
  SREM bikes:racing:france bike:1
  SPOP bikes:racing:france
  SMEMBERS bikes:racing:france
  SRANDMEMBER bikes:racing:france
  ```

**Limits**

- Max size of a Redis set: 2^32 - 1 (4,294,967,295) members.

**Performance**

- Most set operations (adding, removing, checking membership) are O(1).
- For large sets, avoid using `SMEMBERS` due to its O(n) complexity. Instead, use `SSCAN` to retrieve members iteratively.
