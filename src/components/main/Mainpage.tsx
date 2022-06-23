import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WindowIcon from '@mui/icons-material/Window';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import CallIcon from '@mui/icons-material/Call';
import { useNavigate } from 'react-router-dom';
import Images from './Images';
import { Menu } from '../models.ts/ProductsProps';
const Mainpage = () => {
	const navigate = useNavigate();
	const [open, setOpen] = useState(true);
	const handleClick: any = (menu: Menu) => {
		if (menu.name === 'Log Out') {
			localStorage.removeItem('login55');
			localStorage.removeItem('login66');
			navigate('/');
		} else {
			navigate(menu.link);
		}
	};
	const Menus = [
		{
			name: 'Shop by Categories',
			link: '/home',
			src: <ShoppingBasketIcon />,
		},
		{ name: 'Orders', link: '/carto', gap: true, src: <ShoppingCartIcon /> },
		{ name: 'Log In', link: '/user', gap: true, src: <LoginIcon /> },
		{ name: 'Sign Up', link: '/login', src: <WindowIcon /> },
		{ name: 'Log Out', link: '/user', src: <LogoutIcon /> },
		{ name: 'ADDRESS', link: '/address', src: <CallIcon /> },
	];
	return (
		<>
			<Navbar />
			<div className="flex">
				<div
					className={`${
						open ? 'w-72' : 'w-20'
					} duration-300 h-screen   relative grid grid-rows-3`}
				>
					<div className="bg-white  border-8">
						<img
							src="data:image/png;base64,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"
							alt="shampoo"
							className={`${open ? 'ml-52 ' : 'ml-11'}&& ${
								!open && 'rotate-180'
							} h-6 cursor-pointer  rounded-full mt-4 w-7 border-2 border-white`}
							onClick={() => setOpen(!open)}
						/>
						<br />
						<div className="items-center ">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToInL47w88tsNFOBiRZLf1ydUfRQYtMXoMw&usqp=CAU"
								alt="shampoo"
								className="max-w-xs h-24 mx-auto "
							/>
							<h1 className="text-2xl text-black font-bold italic ">
								THE BRAND
							</h1>
						</div>
					</div>
					<div className="bg-pink-800 border-8 row-span-2">
						<ul className="pt-6">
							{Menus.map((menu, index) => (
								<div>
									<li
										key={index}
										className={`text-white text-md mx-auto italic grid grid-cols-3 font-semisolid cursor-pointer hover:bg-gray-600 rounded-md ${
											menu.gap ? 'mt-11' : 'mt-6'
										} `}
									>
										<span className={`${!open && 'ml-14'}`}>{menu.src}</span>
										<span
											onClick={() => handleClick(menu)}
											className={`${!open && 'hidden'} col-span-2 text-left`}
										>
											{menu.name}
										</span>
									</li>
								</div>
							))}
						</ul>
					</div>
				</div>
				<div className="lg:ml-64 lg:w-fit md:w-fit sm:w-fit w-fit  h-screen">
					<Images />
				</div>
			</div>
		</>
	);
};

export default Mainpage;
