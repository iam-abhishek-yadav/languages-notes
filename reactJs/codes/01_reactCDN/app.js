const heading1 = React.createElement('h1', { id: 'heading1' }, 'Hello world1');
const heading2 = React.createElement('h2', { id: 'heading2' }, 'Hello world2');

const paragraph = React.createElement(
	'p',
	{ id: 'paragraph' },
	'This is a paragraph.'
);

const list = React.createElement('ul', { id: 'list' }, [
	React.createElement('li', { key: 'item1' }, 'Item 1'),
	React.createElement('li', { key: 'item2' }, 'Item 2'),
	React.createElement('li', { key: 'item3' }, 'Item 3'),
]);

const nestedDiv = React.createElement(
	'div',
	{ id: 'nested-div' },
	'Nested div content',
	React.createElement('button', { id: 'button1' }, 'Click me!')
);

const complexParent = React.createElement(
	'div',
	{ id: 'parent' },
	React.createElement('div', { id: 'child' }, [
		heading1,
		heading2,
		paragraph,
		list,
		nestedDiv,
	])
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(complexParent);
