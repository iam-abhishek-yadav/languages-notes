Memoization in React plays a crucial role in optimizing performance by selectively re-rendering components only when necessary.

### Memoization with `React.memo`

When you wrap a component with `React.memo`, React memoizes the component based on its props. If the props have not changed between renders (based on shallow comparison), React reuses the previously rendered result, skipping the rendering and reconciliation process for that component subtree.

```javascript
function Row({ item }) {
	// Render row based on item
}

export default React.memo(Row);
```

In this example:

- If the `item` prop remains referentially equal (using strict equality `===`) between renders, React will reuse the previous rendering result for `Row`.
- This optimization is useful for preventing unnecessary re-renders of components whose output would be identical with the same props.

### Memoization with `useMemo`

For more fine-grained control, React provides the `useMemo` Hook. It memoizes the result of a function or computation and re-computes it only when its dependencies change.

```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

Here:

- `computeExpensiveValue` is a function that calculates a value based on `a` and `b`.
- React will only re-run `computeExpensiveValue` when `a` or `b` change, and otherwise, it returns the cached result of the previous computation.

### Default Behavior and Considerations

- **Default Behavior**: React intentionally does not memoize components by default because many components receive different props on each render. Memoizing such components would lead to unnecessary memory usage and performance overhead.
- **Use Cases**: Memoization is most effective for optimizing performance in components that have expensive rendering logic or computations based on props that rarely change.

- **Performance Impact**: While memoization can significantly improve performance for deep or wide component trees, it's essential to use it judiciously. Overusing memoization can lead to complex code and potential bugs if not implemented correctly.
