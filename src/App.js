import './App.css';
import AppHeader from './components/AppHeader';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Customer from './components/Customer';
import Error from './components/error';
import Test from './components/Test';

function App() {
  return (
<div className="App" >
  <BrowserRouter>
  <AppHeader />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/customer" element={<Customer />} />
    <Route path="/test" element={<Test/>}></Route>
    <Route path="/customer/:code" element={<Customer />} />
   <Route path="*" element={<Error/>}></Route>
  </Routes>
  </BrowserRouter>

</div>
 );
}

export default App;
