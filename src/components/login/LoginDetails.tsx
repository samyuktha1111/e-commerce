import React from 'react';
import { LoginProps } from '../models.ts/ProductsProps';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
type LoginProps4 = {
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	resetHandler: () => void;
	registerHandler: () => void;
	handleToggle: () => void;
	formErrors: any;
	formValues: LoginProps;
	type: string;
};
const LoginDetails = ({
	handleChange,
	handleSubmit,
	resetHandler,
	registerHandler,
	handleToggle,
	formErrors,
	formValues,
	type,
}: LoginProps4) => {
	const temp1: any = localStorage.getItem('login55');
	const user = temp1 ? JSON.parse(temp1) : null;
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="grid grid-flow-row gap-0 ">
					<h1 className="text-2xl text-pink-600 font-bold mt-6 text-center">
						LOGIN{' '}
					</h1>
					<div>
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToInL47w88tsNFOBiRZLf1ydUfRQYtMXoMw&usqp=CAU"
							alt="shampoo"
							className="max-w-xs h-56 pl-28 "
						/>
						<p className="text-2xl text-black font-bold italic">THE BRAND</p>
					</div>
					<div className="text-justify ml-6 ">
						<label className="text-lg ">Username</label>
						<br />
						<input
							type="text"
							name="username"
							placeholder="name"
							value={formValues.username}
							className="w-96 h-12 pl-4 border border-gray-400"
							onChange={handleChange}
						/>
						<p className="text-red-700 text-sm">{formErrors.username}</p>
					</div>
					<div className="text-justify ml-6 mt-6">
						<label className="label1">Password</label>
						<br />
						<input
							type={type}
							name="password"
							placeholder="password"
							value={formValues.password}
							className="w-96 h-12 pl-4 border border-gray-400"
							onChange={handleChange}
						/>
						<span className="icon1" onClick={handleToggle}>
							<Icon icon={type === 'password' ? eyeOff : eye} />
						</span>
						<p className="text-red-700 text-sm">{formErrors.password}</p>
					</div>
					<br />
					{!user && (
						<div>
							<div className="text-gray-500 text-sm text-left ml-8 ">
								New member ?
								<span
									onClick={registerHandler}
									className="text-pink-700 cursor-pointer underline underline-offset-1"
								>
									Register
								</span>
							</div>

							<div>
								<button className="text-justify mt-8  h-14 bg-pink-600 hover:bg-pink-700 text-white text-sm font-bold py-2 px-48   mb-5 rounded">
									LOGIN
								</button>
							</div>
							<div className="text-gray-500 text-sm text-center mb-4 mt-2 ">
								Facing problem with login ?
								<span
									onClick={resetHandler}
									className="text-pink-700 cursor-pointer underline underline-offset-1"
								>
									Reset
								</span>
							</div>
						</div>
					)}
				</div>
			</form>
		</div>
	);
};

export default LoginDetails;
