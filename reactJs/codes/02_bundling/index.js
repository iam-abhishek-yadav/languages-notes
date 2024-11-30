import React from 'react';
import ReactDOM from 'react-dom/client';

// React element ==> Object ==> HTMLelement (on render)

// const heading = React.createElement('h1', { id: 'heading' }, 'Hello world!');

// JSX (transpiled to React.createElement by Babel)

const heading = <h2 id='heading'>Hello World!</h2>;

// Component

const Title = () => <h1 id='title'>Title Component!</h1>;

const subTitle = <h3 id='title'>subTitle!</h3>;

const HeadingComponent = () => (
	<div id='component'>
		<Title />
		{Title()}
		<Title></Title>
		<h3>{2 + 2}</h3>
		<h3>{subTitle}</h3>
		<h2 style={{ marginLeft: '20px' }}>Hello Component!</h2>
	</div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);
root.render(<HeadingComponent />);
