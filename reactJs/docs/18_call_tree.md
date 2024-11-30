### Call Tree vs Call Stack

1. **Call Stack in Programming Languages**:
   - In traditional programming languages, like JavaScript, functions are executed in a call stack. Each function call creates a stack frame, and when the function completes, its frame is popped off the stack.

2. **Call Tree in React**:
   - React, being a UI rendering library, manages components in what can be metaphorically described as a "call tree". This concept is akin to a call stack but extends beyond individual function calls to manage component hierarchy and state across UI updates.

3. **Persistence of Components**:
   - Unlike a traditional call stack where frames are popped off after functions complete, React components persist in memory as long as they are part of the rendered UI tree and have state or effects to manage.
   - Components and their associated state (often referred to as Fibers in React's internal terminology) remain in this "call tree" until they are no longer needed or until React decides to reconcile them (re-render) due to state changes or updates.

4. **Reconciliation and Fibers**:
   - React uses a reconciliation process to determine when and how to update the UI. When state changes occur, React marks the affected components (Fibers) as needing reconciliation. This ensures that only necessary parts of the UI are updated, following React's declarative approach to rendering.

5. **Lifecycle of Components**:
   - Components in the "call tree" are created when they are rendered and persist until they are unmounted or their state changes, triggering a re-render. This approach optimizes performance by allowing React to manage updates efficiently without reconstructing the entire UI tree unnecessarily.
