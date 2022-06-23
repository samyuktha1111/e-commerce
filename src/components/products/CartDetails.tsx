import React from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import DeleteIcon from '@mui/icons-material/Delete';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';
import EmptyCart from './EmptyCart';
import { Item } from '../models.ts/ProductsProps';
import { StateProps } from '../CartReducer';
export type ActionProps3 = {
	type: 'INCREMENT' | 'DECREMENT' | 'DELETE_CART';
	payload: { id: number };
};
const CartDetails = () => {
	const dispatch = useAppDispatch();
	const items: Item[] = useAppSelector((state: StateProps) => state?.items);
	const plusHandler: any = (id: number) => {
		dispatch({ type: 'INCREMENT', payload: { id } });
	};
	const minusHandler: any = (id: number) => {
		dispatch({ type: 'DECREMENT', payload: { id } });
	};

	const removeHandler: any = (id: number) => {
		dispatch({ type: 'DELETE_CART', payload: { id } });
	};

	return (
		<div>
			{items.length > 0 ? (
				items.map((item: Item) => (
					<div className="py-10 ">
						<div className=" grid grid-cols-7 gap-2  lg:w-screen md:w-screen sm:w-screen w-screen h-24 ">
							<div>
								<img
									src={item.image}
									alt="cream"
									className="max-w-xs transform transition ease-in-out duration-1000 hover:scale-125 mb-28 ml-16 h-24"
								/>
							</div>
							<div className="col-span-2">
								<div className="font-bold text-sm mt-4 mb-2 line-clamp-1">
									{item.title}
								</div>

								<div className=" text-sm mt-4 mb-2 line-clamp-1">
									{item.description}
								</div>
							</div>
							<div>
								<DeleteIcon
									className="mt-6"
									onClick={() => removeHandler(item.id)}
								/>
							</div>
							<div>
								<div className="mt-6 px-11">
									<span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-base mb-2">
										Rs {item.price * 100}
									</span>
								</div>
							</div>

							<div className="grid grid-flow-col  h-7 w-28 mt-6 ml-12 ">
								<RemoveSharpIcon
									onClick={() => minusHandler(item.id)}
									className=" border border-black  text-white bg-blue-500 "
								/>
								<input
									type="text"
									value={item.qty}
									className="w-10 h-4  mb-1 py-3 text-center "
								/>
								<AddSharpIcon
									onClick={() => plusHandler(item.id)}
									className=" border border-black text-white  bg-blue-500 "
								/>
							</div>
							<div className="mt-6 px-11 ">
								<span className="bg-gray-200  rounded-full px-3 py-1 text-sm font-base mb-2">
									Rs {item.amount}
								</span>
							</div>
						</div>
						<hr />
					</div>
				))
			) : (
				<EmptyCart />
			)}
		</div>
	);
};

export default CartDetails;
