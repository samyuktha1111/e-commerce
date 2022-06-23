import React from 'react';
import { useAppSelector } from '../hooks';
import Ratings from './Ratings';
import { useParams } from 'react-router-dom';
import {Item} from '../models.ts/ProductsProps';
import { StateProps } from '../CartReducer';
type Products2={
	search:string;
	viewHandler:(value:Item)=>void;
}
const Products1 = ({ viewHandler, search }:Products2) => {
	let { id } = useParams();
	const products = useAppSelector((state:StateProps) => state?.products);
	const viewHandler1 = (item:Item) => {
		viewHandler(item);
	};
	return (
		<div>
			<div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-3 justify-items-center mt-20">
				{products &&
					products
						.filter((val:Item) => {
							if (search === '') {
								return val;
							} else if (
								val.title.toLowerCase().includes(search.toLowerCase())
							) {
								return val;
							}
						})
						.map(
							(product:Item) =>
								product.category === id && (
									<div className="py-10" key={product.id}>
										<div className="rounded overflow-hidden shadow-lg max-w-xs  ">
											<div className="px-6 py-4 ">
												<img
													src={product.image}
													alt="shampoo"
													className="max-w-xs h-64 pl-10 mb-6 transform transition ease-in-out duration-1000 hover:scale-125"
												/>
												<Ratings />
												<div className="font-bold text-xl mt-4 mb-2 line-clamp-1">
													{product.title}
												</div>
												<p className="text-gray-400 text-md mb-2 line-clamp-3">
													{product.description}
												</p>
											</div>
											<div className="grid grid-flow-col gap-5 pb-2 px-3">
												<span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-base mb-2">
													Rs {product.price * 100}
												</span>
												<span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-base mb-2">
													Flat 50%
												</span>
												<span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-base mb-2">
													Hurry
												</span>
											</div>

											<button
												onClick={() => viewHandler1(product)}
												className="bg-cyan-500 hover:bg-cyan-700 text-white text-sm font-bold py-2 px-4  mt-2 mb-5 rounded hover:scale-125 transition ease-in-out duration-1000"
											>
												view
											</button>
										</div>
									</div>
								)
						)}
			</div>
		</div>
	);
};

export default Products1;
