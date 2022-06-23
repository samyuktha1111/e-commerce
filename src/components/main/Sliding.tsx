import React, { useEffect } from 'react';
import { useState } from 'react';
import { Images1 } from '../models.ts/ProductsProps';

const Sliding = ({ images }: Images1) => {
	const [index, setIndex] = useState(0);
	let count = 0;
	useEffect(() => {
		startSlider();
	}, []);
	const startSlider = () => {
		setInterval(() => {
			handleOnClick();
		}, 3000);
	};
	const handleOnClick = () => {
		count = (count + 1) % images.length;
		setIndex(count);
	};
	return (
		<div>
			<img
				src={images[index]}
				alt="shampoo"
				className="w-max h-96 mt-52 mb-6 transform transition ease-in-out duration-1000 hover:scale-125"
			/>
		</div>
	);
};

export default Sliding;
