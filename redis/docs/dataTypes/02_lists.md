**Lists**

- **Lists**: Linked lists of string values.
- **Common uses**:
  - Implementing stacks and queues.
  - Queue management for background worker systems.

**Basic Commands**

- **LPUSH**: Adds an element to the head of a list.
- **RPUSH**: Adds an element to the tail of a list.
- **LPOP**: Removes and returns an element from the head of a list.
- **RPOP**: Removes and returns an element from the tail of a list.
- **LLEN**: Returns the length of a list.
- **LMOVE**: Atomically moves elements from one list to another.
- **LRANGE**: Extracts a range of elements from a list.
- **LTRIM**: Reduces a list to the specified range of elements.
- **Variadic Commands**: Both RPUSH and LPUSH can push multiple elements in a single call.

**Blocking Commands**

- **BLPOP**: Blocks and removes an element from the head of a list if the list is empty.
- **BLMOVE**: Blocks and atomically moves elements from a source list to a target list if the source list is empty.

**Examples**

- **Queue (FIFO):**

  ```bash
  > LPUSH bikes:repairs bike:1
  (integer) 1
  > LPUSH bikes:repairs bike:2
  (integer) 2
  > RPOP bikes:repairs
  "bike:1"
  > RPOP bikes:repairs
  "bike:2"
  ```

- **Stack (LIFO):**

  ```bash
  > LPUSH bikes:repairs bike:1
  (integer) 1
  > LPUSH bikes:repairs bike:2
  (integer) 2
  > LPOP bikes:repairs
  "bike:2"
  > LPOP bikes:repairs
  "bike:1"
  ```

- **Checking List Length:**

  ```bash
  > LLEN bikes:repairs
  (integer) 0
  ```

- **Atomically Moving Elements Between Lists:**

  ```bash
  > LPUSH bikes:repairs bike:1
  (integer) 1
  > LPUSH bikes:repairs bike:2
  (integer) 2
  > LMOVE bikes:repairs bikes:finished LEFT LEFT
  "bike:2"
  > LRANGE bikes:repairs 0 -1
  1) "bike:1"
  > LRANGE bikes:finished 0 -1
  1) "bike:2"
  ```

- **Limiting List Length:** Keep the latest N items, discarding older ones.
  ```bash
  > RPUSH bikes:repairs bike:1 bike:2 bike:3 bike:4 bike:5
  (integer) 5
  > LTRIM bikes:repairs 0 2
  OK
  > LRANGE bikes:repairs 0 -1
  1) "bike:1"
  2) "bike:2"
  3) "bike:3"
  ```

**What are Lists?**

- **List Data Type**: A sequence of ordered elements.
- **Implementation**: Redis lists are implemented using linked lists.
- **Benefits**: Fast addition of elements at the head or tail, regardless of list length.
- **Drawbacks**: Slower access by index compared to array-based lists.

**Popping Elements**

- **Popping**: Retrieve and remove elements from a list.
  ```bash
  > RPUSH bikes:repairs bike:1 bike:2 bike:3
  (integer) 3
  > RPOP bikes:repairs
  "bike:3"
  > LPOP bikes:repairs
  "bike:1"
  > RPOP bikes:repairs
  "bike:2"
  > RPOP bikes:repairs
  (nil)
  ```

**Common Use Cases**

- **Latest Updates**: Storing the latest user updates.
- **Communication Between Processes**: Producer-consumer pattern using lists.

**Blocking Operations**

- **BRPOP and BLPOP**: Block if the list is empty until an element is available or timeout.
  ```bash
  > RPUSH bikes:repairs bike:1 bike:2
  (integer) 2
  > BRPOP bikes:repairs 1
  1) "bikes:repairs"
  2) "bike:2"
  > BRPOP bikes:repairs 1
  1) "bikes:repairs"
  2) "bike:1"
  > BRPOP bikes:repairs 1
  (nil)
  (2.01s)
  ```
- **Timeouts**: Use `0` to wait forever, multiple lists can be specified.

**Automatic Creation and Removal of Keys**

- **Automatic Handling**: Redis manages the creation and removal of empty lists.
- **Rules**:
  1. Empty aggregate data type is created if the target key does not exist.
  2. Key is destroyed when elements are removed, leaving the value empty.
  3. Read-only commands or write commands removing elements from an empty key return the same as if the key is empty.

**Limits**

- **Maximum Length**: 2^32 - 1 (4,294,967,295) elements.

**Performance**

- **O(1) Operations**: Highly efficient for head or tail access.
- **O(n) Operations**: Manipulating elements within a list (e.g., LINDEX, LINSERT, LSET) can be less efficient for large lists.
