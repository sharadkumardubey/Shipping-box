import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ShippingBoxProvider } from './context/ShippingBoxContext';
import AddBoxForm from './Components/AddBoxForm';
import BoxList from './Components/BoxList';
import Navbar from './Navbar';

const App = () => (
  <ShippingBoxProvider>
    <Router>
      <Navbar />
      <div className='p-4'>
        <Routes>
          <Route path='/' element={<AddBoxForm />} />
          <Route path='/list' element={<BoxList />} />
        </Routes>
      </div>
    </Router>
  </ShippingBoxProvider>
);

export default App;
