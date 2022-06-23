import React from 'react';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { LoginProps2 } from '../models.ts/ProductsProps';
type Signup = {
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	handleToggle: () => void;
	formErrors: any;
	formValues: LoginProps2;
	type: string;
};
const SignupDetails = ({
	handleChange,
	handleSubmit,
	handleToggle,
	formErrors,
	formValues,
	type,
}: Signup) => {
	const temp1: any = localStorage.getItem('login55');
	const user = temp1 ? JSON.parse(temp1) : null;
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="grid grid-flow-row gap-2">
					<h1 className="text-2xl text-gray-700 mt-6">SIGN UP </h1>
					<div className="text-justify ml-8 mt-6">
						<label className="text-lg  ">PhoneNumber</label>
						<br />
						<input
							type="text"
							name="phonenumber"
							placeholder="+91 | phone number"
							className="w-96 h-12 pl-4 border-double border-4 border-gray-400"
							value={formValues.phonenumber}
							onChange={handleChange}
						/>
						<p className="text-red-700 text-sm">{formErrors.phonenumber}</p>
					</div>
					<div className="text-justify ml-8 mt-6">
						<label className="text-lg  ">Username</label>
						<br />
						<input
							type="text"
							name="username"
							placeholder="username"
							className="w-96 h-12 pl-4 border-double border-4 border-gray-400"
							value={formValues.username}
							onChange={handleChange}
						/>
						<p className="text-red-700 text-sm">{formErrors.username}</p>
					</div>
					<div className="text-justify ml-8 mt-6">
						<label className="text-lg ">Email</label>
						<br />
						<input
							type="text"
							name="email"
							placeholder="email"
							value={formValues.email}
							className="w-96 h-12 pl-4 border-double border-4 border-gray-400"
							onChange={handleChange}
						/>
						<p className="text-red-700 text-sm">{formErrors.email}</p>
					</div>
					<div className="text-justify ml-8 mt-6">
						<label className="label1">Password</label>
						<br />
						<input
							type={type}
							name="password"
							placeholder="password"
							value={formValues.password}
							className="w-96 h-12 pl-4 border-double border-4 border-gray-400"
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
							<div className="text-gray-500 text-sm">
								By continuing, I agree to the
								<span className="text-pink-700">
									Terms of Use and Privacy Policy
								</span>
							</div>
							<div>
								<button className="text-justify mt-8  h-14 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2 px-48   mb-5 rounded">
									SIGN UP
								</button>
							</div>
						</div>
					)}
				</div>
			</form>
		</div>
	);
};

export default SignupDetails;
