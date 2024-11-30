**Prerequisites:**

- Node.js (version 12 or higher)
- npm (Node Package Manager)
- Docker (if running Kafka locally using Docker)

**Setup:**

- **Clone the Repository**

  ```bash
  git clone https://github.com/iam-abhishek-yadav/kafka-app
  cd kafka-app
  ```

- **Install Dependencies**

  ```bash
  npm install
  ```

  This will install the necessary packages, including `kafkajs`, used for Kafka communication.

- **Start Kafka and Kafka UI**

  ```bash
  docker-compose up -d
  ```

  Kafka UI will be accessible at `http://localhost:8080`.

**Running the Scripts:**

- **Run Admin Script**

  The admin script (`admin.js`) initializes the Kafka admin client to manage Kafka topics.

  ```bash
  node admin.js
  ```

- **Open Consumer Terminals**

  Open three new terminal windows (or tabs) to run the consumer scripts concurrently:

  - **Consumer 1 (Same Group)**:

    ```bash
    node consumer.js group1
    ```

  - **Consumer 2 (Same Group)**:

    ```bash
    node consumer.js group1
    ```

  - **Consumer 3 (Different Group)**:

    ```bash
    node consumer.js group2
    ```

  Replace `group1` and `group2` with your desired consumer group names.

  These consumers will subscribe to the Kafka topic and receive messages based on their group subscriptions.

- **Run Producer Script**

  Open another new terminal window (or tab) to run the producer script:

  ```bash
  node producer.js
  ```

  This script allows you to send messages to the Kafka topic `rider-status`.

  - **Input Example**:

    Input should be formatted as `<riderName> <location>`. For example:

    ```
    John north
    Alice south
    ```

    Enter each rider's name and location separated by a space and press `Enter` to send the message.

- **Access Kafka UI:** [http://localhost:8080](http://localhost:8080)
