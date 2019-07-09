# CustomDashedBorder

React component for customisable dashed border

![image](https://user-images.githubusercontent.com/10758173/60896675-b4e74300-a2a1-11e9-8574-a4b8a54f0ba8.png)

## Installation

```sh
yarn add -D custom-dashed-border
```

## Usage

```javascript.jsx
import React from 'react';
import { CustomDashedBorder } from 'custom-dashed-border';

const wrapperStyle = {
	position: 'relative',
	height: 110,
	width: 200,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};

const App = () => {
	return (
		// Require to wrap this component in `position: relative` block.
		<div style={ { position: 'relative', ...wrapperStyle } }>
			<CustomDashedBorder
				top={
					{
						color: '#ADD8E6',
						stripe: 15,
						spacing: 15,
						height: 5,
					}
				}
				bottom={ { stripe: 20, spacing: 5 } }
				left
			>
				Content
			</CustomDashedBorder>
		</div>
	);
};
```

### Props

This component have `top`, `right`, `bottom` and `left` props.
Can set border options (see below) to each prop.

```javascript
// Border position. top or bottom or right or left.
top: {
	// Can set CSS color value.
	color: '#000',
	// Length of each line (px).
	stripe: 10,
	// Length of between lines (px).
	spacing: 10,
	// Only top and bottom. Can use number or string.
	height: '1px',
	// Only right and left. Can use number or string.
	width: '1px',
}
```

## License

MIT
