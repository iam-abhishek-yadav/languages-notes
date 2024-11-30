### Using Components in React

#### Idiomatic Usage:
1. **Element Declaration**: Components are typically referenced using JSX syntax, where the component function name is capitalized:
   ```jsx
   let reactElement = <Form showMessage={true} />;
   ```

2. **Rendering**: Instead of directly invoking the component function, you pass the JSX element (`reactElement`) to `ReactDOM.render()`:
   ```jsx
   ReactDOM.render(reactElement, domContainer);
   ```

3. **Component Invocation**: Inside React, when encountering a component element (`<Form />` in this case), React calls the corresponding function and asks it to render its output:
   ```javascript
   let type = reactElement.type; // Form function
   let props = reactElement.props; // { showMessage: true }
   let result = type(props); // Invokes Form component
   ```

#### Recursive Rendering Process:
- **Initialization**: When you call `ReactDOM.render(<App />, domContainer)`, React starts the rendering process from the root component (`App`).
  
- **Component Interaction**: React asks each component (`App`, `Layout`, `Content`, etc.) what it wants to render. Each component returns a description of its output (a React element).

- **Recursive Nature**: If a component (`Layout`, `Content`, etc.) renders another component (`Content`, `Footer`, etc.), React recursively traverses this tree of components until it reaches the leaf nodes.

- **Reconciliation**: During this traversal, React compares the new element tree with the previous one. It determines whether to update existing host instances or create new ones based on changes in element types (component functions or HTML tags) and keys.

#### Example Walkthrough:
- **App Component**: Renders `Layout`.
- **Layout Component**: Renders its children (`Content`).
- **Content Component**: Renders an `<article>` with some text and `Footer`.
- **Footer Component**: Renders a `<footer>` with more text.

#### Reconciliation Rules:
- React uses the component's type (function reference) and optional `key` attribute to decide if it can reuse existing host instances or needs to recreate them.
- Changes in the component's type or position in the tree may lead to recreation of host instances to maintain UI consistency and performance.
