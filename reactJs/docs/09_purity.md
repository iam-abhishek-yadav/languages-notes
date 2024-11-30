### Purity in React Components

#### Mutation and Props:
- **Props Mutability**: React components should treat props as immutable. Directly mutating props, like `props.isActive = true;`, is not allowed because React assumes props do not change during component execution.
- **Local Mutation**: Local variables within a component, such as arrays used to accumulate JSX elements (`items` in `FriendList`), can be mutated locally without impacting React's rendering consistency. This is because these mutations are isolated to the component's scope and do not affect external state.

#### Lazy Initialization:
- **Idempotence vs Purity**: React prioritizes idempotence, meaning components should render the same output for the same props. Lazy initialization or non-rendering side effects (like initializing a service) are permissible as long as they do not cause visible changes in the rendered UI or affect other components' rendering.

#### Side Effects:
- **Visible Side Effects**: Actions that cause visible changes in the UI should not occur during the rendering phase of a component. This includes directly modifying the DOM, making API calls, or triggering animations synchronously within the rendering lifecycle.

### Best Practices:
- **Immutability**: Treat props as immutable. If props need to change, consider using state management solutions like React's `useState` hook.
- **Local Mutation**: Use local mutation safely within component functions for generating dynamic content (like iterating over lists).
- **Side Effects**: Perform side effects (e.g., data fetching, state updates) in lifecycle methods (`useEffect` hook in functional components) or event handlers, ensuring they do not interrupt the rendering flow.

