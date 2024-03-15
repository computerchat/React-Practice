// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

//Navbar
import Navlink from './Navlink/Navlink';

//Page
import Home from './Page/Home';
import Signup from './Page/Signup';
import Signin from './Page/Signin';
import ContactForm from './Page/contact';

function App() {
  return (
    <div className='container'>
       <Navlink />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Signup' element={<Signup />} />
      <Route path='/Signin' element={<Signin />} />
      <Route path='/contact' element={<ContactForm />} />
    </Routes>

   
   
    </div>
  );
}

export default App;
