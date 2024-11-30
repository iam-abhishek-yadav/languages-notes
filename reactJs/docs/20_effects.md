### Using `useEffect`

1. **Basic Usage**:
   - `useEffect` allows you to perform side effects in function components. It runs after every render, including the first render. Here’s a basic example updating the document title based on state changes:

   ```jsx
   function Example() {
     const [count, setCount] = useState(0);

     useEffect(() => {
       document.title = `You clicked ${count} times`;
     });

     return (
       <div>
         <p>You clicked {count} times</p>
         <button onClick={() => setCount(count + 1)}>
           Click me
         </button>
       </div>
     );
   }
   ```

   - In this example, `document.title` is updated whenever `count` changes.

2. **Cleanup**:
   - Effects may require cleanup, such as unsubscribing from a data source or removing event listeners. You can return a cleanup function from `useEffect`:

   ```jsx
   useEffect(() => {
     DataSource.addSubscription(handleChange);
     return () => {
       DataSource.removeSubscription(handleChange);
     };
   });
   ```

   - React executes the cleanup function before applying the effect next time or before unmounting the component.

3. **Dependencies**:
   - By default, `useEffect` runs after every render. You can specify dependencies to conditionally run the effect when certain values change. This optimization prevents unnecessary recalculations:

   ```jsx
   useEffect(() => {
     document.title = `You clicked ${count} times`;
   }, [count]);
   ```

   - Here, `useEffect` only re-runs if `count` changes. Omitting the dependency array (`[]`) means the effect runs once (similar to `componentDidMount` in class components).

4. **Common Pitfalls**:
   - **Empty Dependency Array**: If you pass an empty array (`[]`) as the second argument, the effect runs only once when the component mounts. Be cautious when using this with functions defined outside of `useEffect`, as they may reference stale state or props.

   ```jsx
   useEffect(() => {
     DataSource.addSubscription(handleChange);
     return () => {
       DataSource.removeSubscription(handleChange);
     };
   }, []);
   ```

   - Ensure to include all dependencies that the effect relies on. If the effect uses functions defined outside of it, those functions should be listed in the dependency array to prevent stale closures.

5. **Optimizations**:
   - **Callback Memoization**: Use `useCallback` to memoize functions to prevent them from being recreated on every render, which can lead to unnecessary effect re-executions.

   ```jsx
   const handleChange = useCallback(() => {
     console.log(count);
   }, [count]);
   ```

   - **Avoid Premature Optimizations**: Only optimize effects with dependencies when necessary. Over-optimization can lead to harder-to-maintain code.
