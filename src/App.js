import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./components/NavBar/Header";
import { Route, Routes } from "react-router-dom";
import { LoginRegisterForm } from "./components/Login/LoginRegisterForm";
import { HomePage } from "./components/Home/HomePage";
import { ProductsPage } from "./components/Products/ProductsPage";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/login' element={ <LoginRegisterForm/> }/>
                <Route path='/register' element={ <LoginRegisterForm/> }/>
                <Route path='/home' element={ <HomePage/> }/>
                <Route path='/products' element={ <ProductsPage/> }/>
            </Routes>
        </div>
    );
}

export default App;
