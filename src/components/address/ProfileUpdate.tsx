import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Profile1 } from '../models.ts/ProductsProps';
import ProfileDetails from './ProfileDetails';
const ProfileUpdate = () => {
	const navigate = useNavigate();
	const temp: any = localStorage.getItem('login55');
	const person = temp ? JSON.parse(temp) : null;
	const temp1: any = localStorage.getItem('users55');
	const users1 = temp1 ? JSON.parse(temp1) : [];
	const initialValues = { email: '', username: '', phonenumber: '' };
	const [formValues, setFormValues] = useState<Profile1>(initialValues);
	const [formErrors, setFormErrors] = useState<any>({});
	const [isSubmit, setIsSubmit] = useState(false);
	console.log('ppppp', users1);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFormErrors(validate(formValues));
		setIsSubmit(true);
	};
	const changeHandler = () => {
		navigate('/reset');
	};
	useEffect(() => {
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			let data = users1.map((value: Profile1) => {
				if (person.username === value.username) {
					return {
						...value,
						email: formValues.email,
						username: formValues.username,
						phonenumber: formValues.phonenumber,
					};
				}

				return value;
			});
			localStorage.setItem('login66', JSON.stringify(formValues));
			localStorage.setItem('users55', JSON.stringify(data));
			navigate('/profile');
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formErrors]);
	const validate = (values: Profile1) => {
		const errors: any = {};
		const usernamevalidation = /^[A-Za-z0-9]{4,16}$/i;
		const emailvalidation = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i;
		const phonevalidation = /[7-9]\d{9}/;
		// eslint-disable-next-line no-useless-escape

		if (!values.phonenumber) {
			errors.phonenumber = '!phone number is required';
		} else if (!phonevalidation.test(values.phonenumber)) {
			errors.phonenumber = '! invalid phone number';
		}
		if (!values.username) {
			errors.username = '!username is required';
		} else if (!usernamevalidation.test(values.username)) {
			errors.username = '!The username must have 4-16 char and no special char';
		}
		if (!values.email) {
			errors.email = '!email is required';
		} else if (!emailvalidation.test(values.email)) {
			errors.email = '!The email is not valid';
		}

		return errors;
	};

	return (
		<div className=" shadow-2xl bg-white lg:w-fit sm:w-fit w-fit mt-11  justify-center h-fit mx-auto">
			<ProfileDetails
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				changeHandler={changeHandler}
				formValues={formValues}
				formErrors={formErrors}
			/>
		</div>
	);
};
export default ProfileUpdate;
