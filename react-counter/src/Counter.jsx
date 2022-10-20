import React, { useState } from 'react';

export default function Counter() {
	const [value, setValue] = useState(0);

	const handleClick = () => setValue(value + 1);

	return (
		<div class='counter'>
			<p>{value}</p>
			<button onClick={handleClick}>bump</button>
		</div>
	);
}

// export default function Counter({ textColour = 'aqua' }) {
// 	const [value, setValue] = useState(0);

// 	const handleClick = () => setValue(value + 1);

// 	return (
// 		<div class='counter'>
// 			<p style={{ color: textColour }}>{value}</p>
// 			<button onClick={handleClick}>bump</button>
// 		</div>
// 	);
// }
