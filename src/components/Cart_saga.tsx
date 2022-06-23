import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { Item } from './models.ts/ProductsProps';
import { ActionProps4 } from './CartReducer';
import axios from 'axios';
import { Cart3 } from './products/ProductDetail';
import { ActionProps3 } from './products/CartDetails';
import { Address1 } from './address/Address';
const getProducts = () => {
	return axios.get<Item[]>('https://fakestoreapi.com/products');
};
function* getProductsSuccess(): any {
	try {
		const response = yield call(getProducts);
		yield put({ type: 'GET_PRODUCTS_SUCCESS', payload: response.data });
	} catch (error: any) {
		yield put({ type: 'GET_PRODUCTS_FAILURE', message: error.message });
	}
}
export function* AddCartUser(action: Cart3) {
	yield put({ type: 'ADD_CART_SUCCESS', id: action.payload });
}
export function* DeleteCartUser(action: ActionProps4) {
	yield put({ type: 'DELETE_CART_SUCCESS', id: action.payload.id });
}
export function* cartTotal(): any {
	yield put({ type: 'CART_TOTAL_SUCCESS' });
}
export function* subTotal(): any {
	yield put({ type: 'SUBTOTAL_SUCCESS' });
}
export function* discountTotal(): any {
	yield put({ type: 'DISCOUNT_TOTAL_SUCCESS' });
}
export function* increment(action: ActionProps3): any {
	yield put({ type: 'INCREMENT_SUCCESS', quantity: action.payload.id });
}
export function* decrement(action: ActionProps3): any {
	yield put({ type: 'DECREMENT_SUCCESS', quantity: action.payload.id });
}
export function* emptyCart(): any {
	yield put({ type: 'EMPTY_CART_SUCCESS' });
}
export function* addAddress(action: Address1): any {
	yield put({ type: 'ADD_ADDRESS_SUCCESS', payload: action.payload.address });
}
export function* watchUser(): any {
	yield all([
		yield takeLatest('GET_PRODUCTS', getProductsSuccess),
		yield takeEvery('ADD_CART', AddCartUser),
		yield takeEvery('CART_TOTAL', cartTotal),
		yield takeEvery('SUBTOTAL', subTotal),
		yield takeEvery('DISCOUNT_TOTAL', discountTotal),
		yield takeEvery('INCREMENT', increment),
		yield takeEvery('DECREMENT', decrement),
		yield takeEvery('DELETE_CART', DeleteCartUser),
		yield takeEvery('EMPTY_CART', emptyCart),
		yield takeEvery('ADD_ADDRESS', addAddress),
	]);
}
