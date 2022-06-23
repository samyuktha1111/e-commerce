import React from 'react';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { Reset1 } from '../models.ts/ProductsProps';
type Reset = {
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	handleToggle: () => void;
	formErrors: any;
	formValues: Reset1;
	type: string;
}
const ResetDetails = ({
	handleChange,
	handleSubmit,
	handleToggle,
	formValues,
	formErrors,
	type,
}: Reset) => {
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="grid grid-flow-row gap-4 ">
					<h1 className="text-2xl text-pink-600 font-bold mt-6 text-center">
						CHANGE YOUR PASSWORD
					</h1>

					<div className="text-justify ml-6 ">
						<label className="text-lg ">Email</label>
						<br />
						<input
							type="text"
							name="email"
							placeholder="name"
							value={formValues.email}
							className="w-96 h-12 pl-4 border border-gray-400"
							onChange={handleChange}
						/>
						<p className="text-red-700 text-sm">{formErrors.email}</p>
					</div>
					<div className="text-justify ml-6 mt-6">
						<label className="label1">New Password</label>
						<br />
						<input
							type={type}
							name="password"
							placeholder="new password"
							value={formValues.password}
							className="w-96 h-12 pl-4 border border-gray-400"
							onChange={handleChange}
						/>
						<span className="icon1" onClick={handleToggle}>
							<Icon icon={type === 'password' ? eyeOff : eye} />
						</span>
						<p className="text-red-700 text-sm">{formErrors.password}</p>
					</div>

					<div className="text-justify ml-6 mt-6">
						<label className="label1">Confirm Password</label>
						<br />
						<input
							type={type}
							name="password1"
							placeholder="confirm password"
							value={formValues.password1}
							className="w-96 h-12 pl-4 border border-gray-400"
							onChange={handleChange}
						/>
						<span className="icon1" onClick={handleToggle}>
							<Icon icon={type === 'password' ? eyeOff : eye} />
						</span>
						<p className="text-red-700 text-sm">{formErrors.password1}</p>
					</div>
					<br />

					<div>
						<button className="text-justify mt-2  h-14 bg-pink-600 hover:bg-pink-700 text-white text-sm font-bold py-2 px-48   mb-5 rounded">
							RESET
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ResetDetails;
