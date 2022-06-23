import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ProductDetail from './ProductDetail';
import { Item } from '../models.ts/ProductsProps';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Products1 from './Products1';
import { useAppSelector, useAppDispatch } from '../hooks';
import { StateProps } from '../CartReducer';
const Products = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const cartTotal = useAppSelector((state: StateProps) => state?.carttotal);
	const [search, setSearch] = useState<string>('');
	const [dis, setDis] = useState(false);
	const [open, setOpen] = useState(false);
	const viewHandler = (item: Item) => {
		localStorage.setItem('item44', JSON.stringify({ ...item, discount: 100 }));
		setDis(true);
		setOpen(true);
	};
	const addToCartHandler = () => {
		navigate('/cart');
	};
	const handleToClose = () => {
		setOpen(false);
	};
	useEffect(() => {
		dispatch({ type: 'GET_PRODUCTS' });
	}, []);
	useEffect(() => {
		dispatch({ type: 'CART_TOTAL' });
	});

	return (
		<>
			<div className="bg-gray-200 w-screen grid grid-cols-6 gap-4">
				<div className="col-start-1 col-span-2 ">
					<h1 className=" text-center capitalize text-4xl text-black py-6">
						Our products
					</h1>
				</div>
				<div className="col-span-3 ">
					<input
						type="text"
						placeholder="search"
						className="w-full  h-12 mt-6 pl-4 "
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>
				<div>
					<ShoppingCartIcon
						onClick={addToCartHandler}
						className="w-max  col-start-5 col-end-6 mt-8"
					/>
					<span className="rounded-full py-1 px-2 bg-red-400">{cartTotal}</span>
				</div>
			</div>
			<div>
				<Products1 viewHandler={viewHandler} search={search} />
			</div>
			{dis && (
				<Dialog open={open}>
					<DialogContent>
						<ProductDetail setOpen={setOpen} />
					</DialogContent>
					<DialogActions>
						<Button onClick={handleToClose}>Close</Button>
					</DialogActions>
				</Dialog>
			)}
		</>
	);
};

export default Products;
