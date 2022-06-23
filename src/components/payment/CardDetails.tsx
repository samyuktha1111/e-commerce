import React from 'react';
import { useAppSelector } from '../hooks';
import { StateProps } from '../CartReducer';
import { Card1 } from '../models.ts/ProductsProps';
type Card2 = {
	forms: Card1;
	formErrors: any;
	payHandler: (value: any) => void;
	handleChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
};
const CardDetails = ({
	forms,
	formErrors,
	payHandler,
	handleChange,
}: Card2) => {
	const subtotal = useAppSelector((state: StateProps) => state.subtotal);
	const discountTotal = useAppSelector(
		(state: StateProps) => state.discountTotal
	);
	return (
		<div>
			<form>
				<div className="text-justify  px-6 mt-6">
					<div className="text-gray-700 text-lg mb-2">Card number</div>
					<input
						type="text"
						autoComplete="off"
						name="card_number"
						placeholder="card number"
						value={forms.card_number}
						className="h-11 w-96 text-center"
						onChange={handleChange}
					/>
					<p className="text-red-700 text-sm">{formErrors.card_number}</p>
				</div>
				<div className=" text-center ">
					<div className="text-justify px-6 mt-7">
						<div className="text-gray-700 text-lg mb-2">Expiry date</div>
						<select name="exp_month" className="h-11 w-48 text-center">
							<option value="">Month</option>
							<option value="01">01</option>
							<option value="01">02</option>
							<option value="01">03</option>
							<option value="01">04</option>
							<option value="01">05</option>
							<option value="01">06</option>
							<option value="01">07</option>
							<option value="01">08</option>
							<option value="01">09</option>
							<option value="01">10</option>
							<option value="01">11</option>
							<option value="12">12</option>
						</select>
						<select name="exp_YY" className="h-11 w-48 text-center">
							<option value="">Year</option>

							<option value="22">2022</option>
							<option value="23">2023</option>
							<option value="24">2024</option>
						</select>
					</div>
				</div>

				<div className="text-justify px-16 mt-6">
					<div className="text-gray-700 text-lg mb-2">CVV</div>
					<input
						type="text"
						name="cvv"
						placeholder="***"
						value={forms.cvv}
						className="h-11 w-72 text-center"
						onChange={handleChange}
					/>
					<p className="text-red-700 text-sm">{formErrors.cvv}</p>
				</div>
				<button
					onClick={payHandler}
					className=" text-justify mt-16 ml-4 h-14 bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold py-2 px-44   mb-5 rounded "
				>
					Pay {subtotal - discountTotal + 50}
				</button>
			</form>
		</div>
	);
};

export default CardDetails;
