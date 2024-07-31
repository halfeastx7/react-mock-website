import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserData from './UserData';
import Navbar_0 from './reactasset/Navbar_0';
import To_do from './reactasset/To_do';
import Home from './reactasset/Home';
import Footer from './reactasset/Footer';


function App() {
return (
<div>
  <Router>
  <Navbar_0 />
    <Routes>
      <Route path='home' element={<Home />} />
      <Route path='userdata' element={<UserData />} />
      <Route path='todo' element={<To_do />} />
    </Routes>
  </Router>
 <Footer />
</div>
)}export default App;