### Conditional Rendering in React

#### Initial Render:
```javascript
ReactDOM.render(
  <dialog>
    <input />
  </dialog>,
  domContainer
);
```
- React creates a `<dialog>` host instance with an `<input>` as its child.

#### Subsequent Render:
```javascript
ReactDOM.render(
  <dialog>
    <p>I was just added here!</p>
    <input />
  </dialog>,
  domContainer
);
```
- React needs to reconcile the new element tree with the previous one.

#### Reconciliation Process:
1. **Comparing Element Trees**:
   - **dialog → dialog**: The type matches, so the `<dialog>` host instance can be reused.
   - **input → p**: The type has changed from `<input>` to `<p>`. React needs to remove the existing `<input>` host instance and create a new `<p>` host instance.
   - **(nothing) → input**: There was no `<p>` before, so React needs to create a new `<input>` host instance.

2. **Execution by React**:
   - React removes the old `<input>` host instance:
     ```javascript
     let oldInputNode = dialogNode.firstChild;
     dialogNode.removeChild(oldInputNode);
     ```
   - React creates a new `<p>` host instance and inserts it before the `<input>`:
     ```javascript
     let pNode = document.createElement('p');
     pNode.textContent = 'I was just added here!';
     dialogNode.insertBefore(pNode, dialogNode.firstChild);
     ```
   - React creates a new `<input>` host instance:
     ```javascript
     let newInputNode = document.createElement('input');
     dialogNode.appendChild(newInputNode);
     ```

#### Avoiding State Loss:
- **Object Notation (Alternative Representation)**:
  ```javascript
  function Form({ showMessage }) {
    let message = null;
    if (showMessage) {
      message = {
        type: 'p',
        props: { children: 'I was just added here!' }
      };
    }
    return {
      type: 'dialog',
      props: {
        children: [
          message,
          { type: 'input', props: {} }
        ]
      }
    };
  }
  ```
  - Using object notation demonstrates how React views the component structure internally, ensuring that the `<input>` maintains its position and state regardless of conditional rendering changes.
