import React from 'react';
import { useState } from 'react';
import { useAppDispatch } from '../hooks';
import { useNavigate } from 'react-router-dom';
import Notes from './Notes';
export type Address1 = {
	type: 'ADD_ADDRESS';
	payload: { address: string };
};
const Address = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [address, setAddress] = useState('');
	const [display, setDisplay] = useState(false);
	const temp: any = localStorage.getItem('login55');
	const user = temp ? JSON.parse(temp) : null;
	const clickHandler = () => {
		user ? setDisplay(true) : navigate('/user');
	};
	const addressHandler = () => {
		dispatch({ type: 'ADD_ADDRESS', payload: { address } });
		setAddress('');
		setDisplay(false);
	};
	return (
		<>
			<div className="mx-auto mt-11 lg:w-1/3 md:w-fit sm:w-fit w-fit h-fit shadow-lg">
				<div
					className="bg-blue-600 h-16 text-white text-xl pt-4 font-medium cursor-pointer "
					onClick={clickHandler}
				>
					Add delivery address
				</div>
				<Notes />
				{display && (
					<div>
						<textarea
							name="Address"
							placeholder="Address"
							className="w-4/5 mt-11 h-32 text-sm pt-2  border-4"
							onChange={(e) => setAddress(e.target.value)}
							value={address}
						/>
						<div className="mt-11">
							<button
								onClick={addressHandler}
								className=" px-32 mb-8 py-2 rounded-full text-white font-semibold  bg-blue-500"
							>
								Save Address
							</button>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default Address;
