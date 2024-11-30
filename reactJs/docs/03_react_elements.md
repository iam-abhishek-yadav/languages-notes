### React Elements

- **Definition**: A React element is a plain JavaScript object that describes a component or UI element. It serves as the smallest building block in React applications.
- **Structure**: 
  ```javascript
  {
    type: 'button',
    props: { className: 'blue' }
  }
  ```
  - Represents a `<button className="blue" />` JSX element.

- **Properties**:
  - **Type**: Specifies the type of the element (e.g., `'button'`, `'dialog'`).
  - **Props**: Contains the properties and attributes (e.g., `className`, `children`) passed to the element.

- **Tree Structure**:
  - React elements can be nested to form a tree structure, representing the hierarchy of components or UI elements.

- **Immutability**:
  - React elements are immutable. Once created, their structure cannot be changed.
  - To update the UI, a new tree of React elements is created, describing the updated state or props.

- **Purpose**:
  - React elements serve as snapshots or frames that capture what the UI should look like at a specific point in time.
  - They do not have persistent identity and are recreated as needed.

- **Analogy**:
  - Comparable to frames in a movie: each frame captures a specific scene, and a sequence of frames creates the illusion of motion.
  - Similarly, React elements capture the UI state at different times, and updating them creates the illusion of dynamic UI changes.
