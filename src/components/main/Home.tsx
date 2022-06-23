import React from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
	const navigate = useNavigate();
	const shopHandler = (item: string) => {
		navigate(`/product/${item}`);
	};
	return (
		<div className=" grid grid-flow-row gap-7  lg:w-fit sm:w-fit lg:mx-auto">
			<div className=" lg:mx-auto md:mx-auto sm:mx-auto mx-auto lg:w-fit md:w-fit sm:w-fit w-fit mt-4 ">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToInL47w88tsNFOBiRZLf1ydUfRQYtMXoMw&usqp=CAU"
					alt="shampoo"
					className=" h-72 "
				/>
			</div>
			<h1 className="text-4xl  lg:mx-auto font-bold italic text-yellow-500 md:text-green-500 lg:text-black sm:text-blue-500">
				THE BRAND
			</h1>
			<p className=" px-72 text-gray-400">
				THE BRAND Superstore currently provides 5000+ designer clothes for
				men,women, and kids,latest jewelery collections and electronics across
				the world at reasonable prices with amazing discounts
			</p>
			<div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 ml-52 pt-20">
				<button
					onClick={() => shopHandler("men's clothing")}
					className="animate-bounce bg-green-500 sm:bg-yellow-500 md:bg-blue-500 lg:bg-pink-800 hover:bg-pink-800 text-white text-md font-bold py-4 px-6 mt-5 w-48 rounded-full hover:scale-125 transition ease-in-out duration-1000"
				>
					men's clothing
				</button>
				<button
					onClick={() => shopHandler("women's clothing")}
					className="animate-bounce bg-green-500 sm:bg-yellow-500 md:bg-blue-500 lg:bg-pink-800 hover:bg-pink-800 text-white text-md font-bold py-4 px-6 mt-5 w-48 rounded-full hover:scale-125 transition ease-in-out duration-1000"
				>
					women's clothing
				</button>
				<button
					onClick={() => shopHandler('jewelery')}
					className="animate-bounce bg-green-500 sm:bg-yellow-500 md:bg-blue-500 lg:bg-pink-800 hover:bg-pink-800 text-white text-md font-bold py-4 px-6 mt-5 w-48 rounded-full hover:scale-125 transition ease-in-out duration-1000"
				>
					jewelery
				</button>
				<button
					onClick={() => shopHandler('electronics')}
					className="animate-bounce bg-green-500 sm:bg-yellow-500 md:bg-blue-500 lg:bg-pink-800 hover:bg-pink-800 text-white text-md font-bold py-4 px-6 mt-5 w-48 rounded-full hover:scale-125 transition ease-in-out duration-1000"
				>
					electronics
				</button>
			</div>
		</div>
	);
};

export default Home;
