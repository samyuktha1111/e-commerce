import React from 'react';
import Login from './components/login/Login';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Signup from './components/login/Signup';
import ResetPassword from './components/login/ResetPassword';
import Home from './components/main/Home';
import Mainpage from './components/main/Mainpage';
import Products from './components/products/Products';
import {Provider} from 'react-redux'
import store from './components/store'
import Cart from './components/products/Cart';
import CardPayment from './components/payment/CardPayment';
import PriceDetails from './components/payment/PriceDetails';
import Order from './components/payment/Order';
import CartOrders from './components/login/CartOrders';
import Address from './components/address/Address';
import Profile from './components/address/Profile';
import ProfileUpdate from './components/address/ProfileUpdate';
function App() {
  return (
		<Provider store={store}>
			<div className="App">
				<Router>
					<Routes>
						<Route path="/user" element={<Login />} />
						<Route path="/login" element={<Signup />} />
						<Route path="/reset" element={<ResetPassword />} />
						<Route path="/home" element={<Home />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/" element={<Mainpage />} />
						<Route path="/pay" element={<CardPayment />} />
						<Route path="/price" element={<PriceDetails />} />
						<Route path="/order" element={<Order />} />
						<Route path="/carto" element={<CartOrders />} />
						<Route path="/address" element={<Address />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/update" element={<ProfileUpdate />} />
						<Route path="/product" element={<Products />}>
							<Route path="/product/:id" element={<Products />} />
						</Route>
					</Routes>
				</Router>
			</div>
		</Provider>
	);
}

export default App;
