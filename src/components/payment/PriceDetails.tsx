import React from 'react';
import { useAppSelector } from '../hooks';
import { StateProps } from '../CartReducer';
import PaymentOptions from './PaymentOptions';
const PriceDetails = () => {
	const items = useAppSelector((state: StateProps) => state.items);
	const subtotal = useAppSelector((state: StateProps) => state.subtotal);
	const carttotal = useAppSelector((state: StateProps) => state.carttotal);
	const discountTotal = useAppSelector(
		(state: StateProps) => state.discountTotal
	);
	let amt = Number(subtotal) - Number(discountTotal) + Number(50);
	return (
		<>
			<div className="bg-gray-200 lg:w-fit sm:w-fit w-screen h-11"></div>
			<div className=" lg:w-fit sm:w-fit w-screen h-screen grid lg:grid-cols-2 sm:grid-cols-1 divide-x-2">
				<div className="lg:w-fit sm:w-fit w-screen  h-screen ">
					<div className="overflow-y-auto h-96">
						{items.length > 0 &&
							items.map((item) => (
								<div className="py-10 ">
									<div className=" grid grid-cols-9 gap-2    h-10 ">
										<div>
											<img
												src={item.image}
												alt="cream"
												className="max-w-xs transform transition ease-in-out duration-1000 hover:scale-125 mb-28 ml-16 h-20"
											/>
										</div>
										<div className="col-start-3 col-span-3">
											<div className="font-bold text-sm mt-2 mb-2 line-clamp-1">
												{item.title}
											</div>

											<div className=" text-sm mt-2 mb-2 line-clamp-1">
												{item.description}
											</div>
											<span className=" text-sm font-base mb-2">
												Quantity-{item.qty}
											</span>
										</div>
										<div className="mt-6 px-11 col-span-4">
											<span className="text-red-500  text-sm font-base mb-2">
												Rs {item.amount}
											</span>
										</div>
									</div>
								</div>
							))}
					</div>
					<br />
					<hr />
					<div className="grid grid-flow-row gap-4 text-left ml-11 ">
						<div className="text-xl font-semibold">Price Details</div>

						<div className="grid grid-cols-2 ">
							<div>Price({carttotal} items) </div>
							<div className="text-right  font-medium mr-28">Rs {subtotal}</div>
						</div>
						<div className="grid grid-cols-2">
							<div>Delivery charges </div>
							<div className="text-right text-green-500 font-medium mr-28">
								+Rs 50
							</div>
						</div>
						<div className="grid grid-cols-2">
							<div>Discount </div>
							<div className="text-right text-green-500 font-medium mr-28">
								-Rs {discountTotal}
							</div>
						</div>
						<div className="grid grid-cols-2">
							<div>Total amount </div>
							<div className="text-right text-black text-xl font-medium mr-28">
								Rs {amt}
							</div>
						</div>
					</div>
				</div>
				<div className="lg:w-fit sm:w-fit w-screen ">
					<PaymentOptions />
				</div>
			</div>
		</>
	);
};

export default PriceDetails;
