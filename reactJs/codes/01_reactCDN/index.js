const heading = React.createElement('h1', { id: 'heading1' }, 'Hello world1');

const parent = React.createElement(
	'div',
	{ id: 'parent' },
	React.createElement('div', { id: 'child' }, heading)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
