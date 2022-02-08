import React from 'react'
import {useDispatch, useSelector } from 'react-redux';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import { signout } from './actions/USerActions';
import Privt from './components/Privt';
import Cartscreen from './Screens/Cartscreen';
import Homescreen from './Screens/Homescreen';
import Orderhistry from './Screens/Orderhistry';
import Orderscreen from './Screens/Ordersreen';
import Payment from './Screens/Payment';
import Placeorder from './Screens/Placeorder';
import Productscreen from './Screens/Productscree';
import Profile from './Screens/Profile';
import Register from './Screens/Register';
import ShippingAddress from './Screens/ShippingAddress';
import SigninScreen from './Screens/SigninScreen';


function App() {

    const cart =useSelector(state=>state.cart)
    const USersig= useSelector(state=>state.UseSigin)
    const {cartItems}= cart;
    const {userInfo}=USersig;
    const dispatch = useDispatch()
    const signouthandler =(()=>{
        dispatch(signout());

    })
  return (
      <BrowserRouter>
      
    <div class="grid-cont">
    <header>
        <div>
            <Link class="brand" to="/"> Amazona</Link>
        </div>
        <div>
            <Link to="/cart">Cart
            {cartItems.length > 0 &&(
                <span className='err'>{cartItems.length}</span>
            )}</Link>
            {
                userInfo? (
                <div className='dropdown'><Link to="/profile">{userInfo.name} <i className='fa fa-caret-down'></i>  </Link>
                <ul className='dropdown-cont'>
                    <li>
                    <Link to='#sigin' onClick={signouthandler}>Signout</Link>
                    </li>
                    <li>  
                    <Link to='/orderhistry'>Orderhistory</Link>
                    </li>
                    <li>  
                    <Link to='/profile'>Profile</Link>
                    </li>
                </ul>
                </div>):( <Link to="/sigin">Sigin-In</Link>)
            }
           
        </div>

    </header>
    <main>
    <Route path="/cart/:id?" component={Cartscreen} ></Route>
     <Route path="/product/:id" component={Productscreen}></Route>
     <Route path="/sigin" component={SigninScreen}></Route>
     <Route path="/register" component={Register}></Route>
     <Route path='/shipping' component={ShippingAddress}></Route>
     <Route path='/payment' component={Payment}></Route>
     <Route path='/placeorder' component={Placeorder}></Route>
    <Route path="/orders/:id" component={Orderscreen}></Route>
    <Route path="/orderhistry" component={Orderhistry}></Route>
    <Privt path="/profile" component={Profile}></Privt>
    <Route path="/" component={Homescreen} exact></Route>

    
    </main>

    <footer>
        All right reserved
    </footer>

</div>
</BrowserRouter>
    
  );
}

export default App;
