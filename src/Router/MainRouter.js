import React from 'react';
import { Routes, Route,  NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact'
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import OrderSummary from './OrderSummary';
import Featuredproducts from './pages/Featuredproducts';
import Newproducts from './pages/Newproducts';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import Admin from './pages/Admin';
import Profile from './pages/Profile';

function MainRouter() {
  const navlinlstyle=({isActive})=>{
    return{
      fontWeight:isActive?'bold':'normal',
      textDecoration:isActive?"none":'normal'
    }
  }
  return (
    <div>
      <nav>
        
          <NavLink style={navlinlstyle} to='/' >Home</NavLink>
          
          <NavLink style={navlinlstyle} to='/login'>Login</NavLink>
          <NavLink style={navlinlstyle} to='/products'>Products</NavLink>
          <NavLink style={navlinlstyle} to='/Profile'>Profile</NavLink>


          
          </nav>
        {/* <li> */}
         {/* <Link to='/services'>Services</Link>
          </li>
        <li>
          <Link to='/contact'>Contact</Link>
          </li> */}
      
         <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
        {/* <Route path="/contact" element={<Contact />} />
        */}
        
        <Route path='ordersummary' element={<OrderSummary/>} />
         <Route path="/products" element={<Products />} >
            <Route path='featured' element={<Featuredproducts />}/>
            <Route path='new' element={<Newproducts />}/>
         </Route>
         <Route path='users' element={<Users/>} >
           <Route path=':userId' element={<UserDetails/>}/>
           <Route path='admin' element={<Admin/>}/>
        </Route>
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default MainRouter