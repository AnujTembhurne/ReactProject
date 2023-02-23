import './App.css';
import Nav from "./components/Nav"
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login'
import AddProduct from './components/AddProducts';
import ProductList from './components/ProductList'
import UpdateProduct from './components/UpdateComponent';

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path="/" element={<ProductList/>} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/update/:id" element={<UpdateProduct />} />
        <Route path="/logout" element={<h1>Logout Product Component</h1>} />
        <Route path="/profile" element={<h1>Profile Component</h1>} />

        </Route>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      </BrowserRouter>
      <Footer />
      {/* <img src="./images/spider-man-2-8k-s0.jpg" alt=""/>
      <div style={{
        width:"300px",
        height:"300px",
        backgroundSize:"cover",
        backgroundImage: `url("images/spider-man-2-8k-s0.jpg")`
      }}></div> */}
    </div>
  );
}

export default App;
