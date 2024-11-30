### Reconciliation in React

- **Definition**: Reconciliation is the process by which React updates the host instance tree (e.g., DOM tree) to match the new React element tree provided in `ReactDOM.render()`.

- **Objective**: React's goal is to determine the minimal set of changes needed to synchronize the host tree with the desired React element tree.

- **Update Strategy**:
  - React aims to update existing host instances rather than re-creating them whenever possible. This approach preserves important state like focus, selection, and scroll position.

- **Example Process**:

1. **Initial Render**:
   ```javascript
   ReactDOM.render(
     <button className="blue" />,
     document.getElementById('container')
   );
   ```
   - Creates a `<button>` host instance with class `'blue'`.

2. **Subsequent Render**:
   ```javascript
   ReactDOM.render(
     <button className="red" />,
     document.getElementById('container')
   );
   ```
   - React checks if the type (`'button'`) and position in the tree match the previous render.
   - Determines that the existing `<button>` host instance can be updated by changing its class to `'red'`.

3. **Replacing Elements**:
   ```javascript
   ReactDOM.render(
     <p>Hello</p>,
     document.getElementById('container')
   );
   ```
   - The `<button>` host instance cannot be reused for a `<p>` element.
   - React removes the existing `<button>` host instance and creates a new `<p>` host instance with text content `'Hello'`.

4. **Updating Text Content**:
   ```javascript
   ReactDOM.render(
     <p>Goodbye</p>,
     document.getElementById('container')
   );
   ```
   - The existing `<p>` host instance can be reused because the type (`'p'`) and position match.
   - React updates the text content from `'Hello'` to `'Goodbye'`.

- **Heuristic for Child Elements**:
  - React applies the same decision-making process recursively to child elements within a parent element (e.g., updating `<dialog>` with `<button>` children).
