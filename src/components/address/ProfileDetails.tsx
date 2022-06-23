import React from 'react';
import { Profile1 } from '../models.ts/ProductsProps';
type Profile2 = {
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	changeHandler: () => void;
	formValues: Profile1;
	formErrors: any;
};
const ProfileDetails = ({
	handleChange,
	handleSubmit,
	changeHandler,
	formErrors,
	formValues,
}: Profile2) => {
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="grid grid-flow-row gap-4 ">
					<h1 className="text-2xl text-pink-600 font-bold mt-6 text-center">
						UPDATE
					</h1>

					<div className="text-justify ml-6 ">
						<label className="text-lg ">Update Email</label>
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
						<label className="label1">Update username</label>
						<br />
						<input
							type="text"
							name="username"
							placeholder="new username"
							value={formValues.username}
							className="w-96 h-12 pl-4 border border-gray-400"
							onChange={handleChange}
						/>

						<p className="text-red-700 text-sm">{formErrors.username}</p>
					</div>

					<div className="text-justify ml-6 mt-6">
						<label className="label1">Update phonenumber</label>
						<br />
						<input
							type="text"
							name="phonenumber"
							placeholder="new phonenumber"
							value={formValues.phonenumber}
							className="w-96 h-12 pl-4 border border-gray-400"
							onChange={handleChange}
						/>

						<p className="text-red-700 text-sm">{formErrors.phonenumber}</p>
					</div>

					<div>
						<button className="text-justify mt-2  h-14 bg-pink-600 hover:bg-pink-700 text-white text-sm font-bold py-2 px-48   mb-5 rounded">
							UPDATE
						</button>
					</div>
					<div
						className="underline text-pink-700 mb-6 cursor-pointer"
						onClick={changeHandler}
					>
						Change password ?
					</div>
				</div>
			</form>
		</div>
	);
};

export default ProfileDetails;
