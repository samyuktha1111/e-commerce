import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks';
import { Item } from '../models.ts/ProductsProps';
type Products3 = {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export type Cart3 = {
	type: 'ADD_CART';
	payload: Item;
};
const ProductDetail = ({ setOpen }: Products3) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const temp: any = localStorage.getItem('item44');
	const details = temp ? JSON.parse(temp) : null;
	const temp1: any = localStorage.getItem('login55');
	const user = temp1 ? JSON.parse(temp1) : null;
	const { image, title, description, price, discount } = details;
	console.log('user', user);
	const orderHandler = (item: Item) => {
		if (user) {
			dispatch({
				type: 'ADD_CART',
				payload: { ...item, qty: 1, amount: item.price * 100 },
			});
			setOpen(false);
		} else {
			navigate('/user');
		}
	};
	console.log(discount);
	let amt = price * 100 - discount;
	return (
		<>
			<div className="grid grid-cols-2 gap-2">
				<img
					src={image}
					alt="shampoo"
					className="max-w-xs h-64 pl-10 mb-6 transform transition ease-in-out duration-1000 hover:scale-125"
				/>
				<div className="grid grid-row-4 gap-y-0 mt-2 ">
					<div className="font-bold text-xl ">{title}</div>
					<div className=" text-sm  mr-4 ">{description}</div>
					<br />
					<div className="grid grid-cols-2 gap-1">
						<div className="text-2xl text-black line-through">
							Rs{price * 100}
						</div>
						<div className="text-2xl text-green-500">Rs{amt}</div>
					</div>
					<div>
						<br />
						<button
							onClick={() => orderHandler(details)}
							className="bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4  mt-2 mb-5 text-sm font-bold rounded hover:scale-125 transition ease-in-out duration-1000"
						>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductDetail;
