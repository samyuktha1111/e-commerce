import React from 'react';
import { useNavigate } from 'react-router-dom';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { Profile1 } from '../models.ts/ProductsProps';
const Profile = () => {
	const navigate = useNavigate();
	const temp: any = localStorage.getItem('users55');
	const users = temp ? JSON.parse(temp) : [];
	const temp1: any = localStorage.getItem('login55');
	const person = temp1 ? JSON.parse(temp1) : null;
	const temp2: any = localStorage.getItem('login66');
	const person1 = temp2 ? JSON.parse(temp2) : null;
	console.log(users);
	const profileHandler = () => {
		navigate('/update');
		localStorage.removeItem('login66');
	};
	console.log(person1);
	const getUserDetails = (data: Profile1) =>
		users &&
		users.map(
			(user: Profile1) =>
				user.username === data.username && (
					<div>
						<div className="text-2xl text-pink-700 font-semibold">
							{user.username}
						</div>
						<div className="text-xl text-gray-600 ">{user.email}</div>
						<div className="text-xl text-gray-600 ">{user.phonenumber}</div>
					</div>
				)
		);
	let userDetails = [];
	if (person1) {
		userDetails = getUserDetails(person1);
	} else {
		userDetails = getUserDetails(person);
	}
	return (
		<div className="shadow-2xl mt-32 h-full w-fit px-44 py-32 bg-blue-200  mx-auto ">
			<img
				src="data:image/png;base64,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"
				alt="shampoo"
				className="max-w-xs h-24 pl-10 mb-6 transform transition ease-in-out duration-1000 hover:scale-125"
			/>
			<div>{userDetails}</div>
			<br />
			<BorderColorOutlinedIcon
				className="cursor-pointer"
				onClick={profileHandler}
			/>
		</div>
	);
};

export default Profile;
