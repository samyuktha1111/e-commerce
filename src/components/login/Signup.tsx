import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { LoginProps2 } from '../models.ts/ProductsProps';
import SignupDetails from './SignupDetails';
const Signup = () => {
	const navigate = useNavigate();
	const initialValues = {
		phonenumber: '',
		username: '',
		email: '',
		password: '',
	};
	const [formValues, setFormValues] = useState<LoginProps2>(initialValues);
	const [display, setDisplay] = useState(false);
	const [formErrors, setFormErrors] = useState<any>({});
	const [isSubmit, setIsSubmit] = useState(false);
	const [type, setType] = useState('password');
	const temp: any = localStorage.getItem('users55');
	const users = temp ? JSON.parse(temp) : [];
	const temp1: any = localStorage.getItem('login55');
	const user = temp ? JSON.parse(temp1) : null;
	console.log(users);
	console.log(user);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};
	const handleToggle = () => {
		type === 'password' ? setType('text') : setType('password');
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFormErrors(validate(formValues));
		setIsSubmit(true);
	};
	useEffect(() => {
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			let alreadypresent = false;
			users.forEach((item: LoginProps2) => {
				if (
					item.email === formValues.email ||
					item.phonenumber === formValues.phonenumber
				) {
					alreadypresent = true;
				}
			});
			if (!alreadypresent) {
				users.push(formValues);

				console.log(users);
				localStorage.setItem('users55', JSON.stringify(users));

				navigate('/user');
			} else {
				setDisplay(true);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formErrors]);
	const validate = (values: LoginProps2) => {
		const errors: any = {};
		const usernamevalidation = /^[A-Za-z0-9]{4,16}$/i;
		const emailvalidation = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i;
		const phonevalidation = /[7-9]\d{9}/;
		// eslint-disable-next-line no-useless-escape
		const passwordvalidation =
			// eslint-disable-next-line no-useless-escape
			/^(?=.*[a-z])(?=.[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,})/i;
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
		if (!values.password) {
			errors.password = '!password is required';
		} else if (!passwordvalidation.test(values.password)) {
			errors.password =
				//'!The password must have min 1 uppercase,1 lowercase,1 numeric char,1 special char,must be 8 char or longer';
				'!Not strong enough';
		}

		return errors;
	};

	return (
		<div className=" shadow-2xl bg-blue-200  lg:w-fit md:w-fit sm:w-fit w-fit mt-11 border border-blue-700 justify-center h-fit mx-auto">
			{display && (
				<div className="text-2xl font-bold text-red-700">
					USER ALREADY EXISTS!!!!
				</div>
			)}
			{user && (
				<div className="text-2xl font-bold text-red-700">
					U ARE ALREADY LOGGED IN!!!!
				</div>
			)}
			<SignupDetails
				formValues={formValues}
				formErrors={formErrors}
				type={type}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				handleToggle={handleToggle}
			/>
		</div>
	);
};
export default Signup;
