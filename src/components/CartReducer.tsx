import { Item } from './models.ts/ProductsProps';
import { Cart3 } from './products/ProductDetail';
import { ActionProps3 } from './products/CartDetails';
import { Address1 } from './address/Address';
const initialState = {
	products: [],
	items: [],
	subtotal: 0,
	carttotal: 0,
	discountTotal: 0,
	notes: [],
};
export type StateProps = {
	products: Item[];
	items: Item[];
	subtotal: number;
	carttotal: number;
	discountTotal: number;
	notes: string[];
};
export type ActionProps4 = {
	type: 'INCREMENT_SUCCESS' | 'DECREMENT_SUCCESS' | 'DELETE_CART_SUCCESS';
	quantity: number;
	payload: any;
	id: number;
};
type ActionProps =
	| ActionProps1
	| ActionProps2
	| Cart3
	| ActionProps3
	| ActionProps4
	| Address1
	| Address2;

type ActionProps1 = {
	type:
		| 'GET_PRODUCTS'
		| 'SUBTOTAL'
		| 'DISCOUNT_TOTAL'
		| 'EMPTY_CART'
		| 'CART_TOTAL'
		| 'CART_TOTAL_SUCCESS'
		| 'SUBTOTAL'
		| 'SUBTOTAL_SUCCESS'
		| 'DISCOUNT_TOTAL'
		| 'DISCOUNT_TOTAL_SUCCESS';
};
type ActionProps2 = {
	type: 'GET_PRODUCTS_SUCCESS' | 'GET_PRODUCTS_FAILURE' | 'ADD_CART_SUCCESS';
	payload: Item[];
	message: any;
	id: Item;
};
type Address2 = {
	type: 'ADD_ADDRESS_SUCCESS';
	payload: string;
};
const CartReducer = (state: StateProps = initialState, action: ActionProps) => {
	switch (action.type) {
		case 'GET_PRODUCTS_SUCCESS':
			return { ...state, products: action.payload };
		case 'GET_PRODUCTS_FAILURE':
			return { ...state, message: action.message };
		case 'ADD_CART_SUCCESS':
			// eslint-disable-next-line no-unused-vars
			let already = false;
			state.items.forEach((x) => {
				if (x.id === action.id.id) {
					already = true;
					x.qty = x.qty + 1;
					x.amount = x.price * 10 * x.qty;
				}
			});
			if (already === false) {
				state.items.push(action.id);
			}

			return state;
		case 'INCREMENT_SUCCESS':
			const updatedCart = state.items.map((curElem) => {
				if (curElem.id === action.quantity) {
					return {
						...curElem,
						qty: curElem.qty + 1,
						amount: (curElem.qty + 1) * curElem.price * 100,
					};
				}
				return curElem;
			});
			return { ...state, items: updatedCart };
		case 'DECREMENT_SUCCESS':
			const updatedCart1 = state.items
				.map((curElem) => {
					if (curElem.id === action.quantity) {
						return {
							...curElem,
							qty: curElem.qty - 1,
							amount: (curElem.qty - 1) * curElem.price * 100,
						};
					}
					return curElem;
				})
				.filter((curElem) => curElem.qty !== 0);
			return { ...state, items: updatedCart1 };
		case 'CART_TOTAL_SUCCESS':
			const carttotal = state.items.reduce(
				(total, currentValue) => (total = total + currentValue.qty),
				0
			);
			return { ...state, carttotal };
		case 'SUBTOTAL_SUCCESS':
			const subtotal = state.items.reduce(
				(total, currentValue) => (total = total + currentValue.amount),
				0
			);
			return { ...state, subtotal };
		case 'DISCOUNT_TOTAL_SUCCESS':
			const discountTotal = state.items.reduce(
				(total, currentValue) =>
					(total = total + currentValue.discount * currentValue.qty),
				0
			);
			return { ...state, discountTotal };
		case 'DELETE_CART_SUCCESS':
			const items = state.items.filter((item) => item.id !== action.id);
			console.log(items);
			return { ...state, items };
		case 'EMPTY_CART':
			return { ...state, items: [] };
		case 'ADD_ADDRESS_SUCCESS':
			state.notes.push(action.payload);
			return state;
		default:
			return state;
	}
};
export default CartReducer;
