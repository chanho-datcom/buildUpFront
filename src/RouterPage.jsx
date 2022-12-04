import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import SignUp from './Body/Users/SignUp';
import SignIn from './Body/Users/SignIn';
import Main from './Body/Main/Main';
const RouterPage = () => {
  return (
    <div>
    <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
      
    </BrowserRouter>


</div>
  );
};

export default RouterPage;