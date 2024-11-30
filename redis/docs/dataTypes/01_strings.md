**Strings**

- **Redis strings**: Store sequences of bytes, including text, serialized objects, and binary arrays.
- **Use cases**: Commonly used for caching, implementing counters, and performing bitwise operations.
- **Mapping**: Redis keys are strings; using string type as value maps a string to another string.
- **Applications**: Caching HTML fragments, pages, and more.

**Basic Commands**

- **SET command**: Assigns a value to a key, replacing any existing value.
  - Example:
    ```bash
    > SET bike:1 Deimos
    OK
    > GET bike:1
    "Deimos"
    ```
- **Key Replacement**: SET replaces existing values regardless of the type.

**String Values**

- **Binary Data**: Strings can store binary data, like a jpeg image.
- **Size Limit**: A single string value can't exceed 512 MB.

**SET Command Options**

- **NX Option**: Fails if the key already exists.
- **XX Option**: Succeeds only if the key already exists.
  - Example:
    ```bash
    > set bike:1 bike nx
    (nil)
    > set bike:1 bike xx
    OK
    ```

**Advanced Commands**

- **GETSET Command**: Sets a new value and returns the old value.
- **MSET and MGET Commands**: Set or retrieve values for multiple keys in a single command.
  - Example:
    ```bash
    > mset bike:1 "Deimos" bike:2 "Ares" bike:3 "Vanth"
    OK
    > mget bike:1 bike:2 bike:3
    1) "Deimos"
    2) "Ares"
    3) "Vanth"
    ```

**Strings as Counters**

- **Atomic Increment**: Use commands like INCR, INCRBY, DECR, DECRBY.
  - Example:
    ```bash
    > set total_crashes 0
    OK
    > incr total_crashes
    (integer) 1
    > incrby total_crashes 10
    (integer) 11
    ```
- **Atomic Operations**: Ensures no race conditions during concurrent increments.

**Limits and Performance**

- **Maximum Size**: A single string can be up to 512 MB.
- **Efficiency**: Most string operations are O(1), except for SUBSTR, GETRANGE, and SETRANGE, which are O(n).

**Summary of Basic Commands**

- **SET**: Stores a string value.
- **SETNX**: Stores a string value only if the key doesn't exist.
- **GET**: Retrieves a string value.
- **MGET**: Retrieves multiple string values.
- **INCRBY**: Atomically increments/decrements counters.
- **INCRBYFLOAT**: For floating-point counters.
- **Bitwise Operations**: Use specific commands for bitwise operations on strings.

**Performance Considerations**

- **O(1) Operations**: Highly efficient for most operations.
- **O(n) Operations**: Random-access string commands like SUBSTR, GETRANGE, SETRANGE may cause performance issues with large strings.
