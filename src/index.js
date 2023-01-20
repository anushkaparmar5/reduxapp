import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import Service from './Service'
import About from './About'
import Contact from './Contact'
import Menu from './Menu';
//import App from './nevbar/App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'


import { BrowserRouter ,Routes, Route} from "react-router-dom";

import REdux from './REdux';
import Store from './Storage'
import rootReducer from './Reducer';
import App from './redux/App';
import { configureStore } from '@reduxjs/toolkit'
import reducer from './redux/reducer';

const store =configureStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}><App/></Provider>
 )
    
  {/* <BrowserRouter>
  <Routes>
  <Route path="/" element={<Menu />}>
          <Route index element={<Home />} />
          <Route path="service" element={<Service />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        
        </Route> */}
  {/* <Route path="/"  component={<Menu/>}/>

   <Route  path='./' component={Home}></Route>
   <Route  path='./service' component={Service}></Route>
   <Route  path='./about' component={About}></Route>
   <Route  path='./contact' component={Contact}></Route> */}
   {/* </Routes>
    </BrowserRouter> */}
   


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
