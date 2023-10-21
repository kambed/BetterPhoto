import React from 'react';
import Login from "./pages/login/Login";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from "../src/components/NavBar";
import AllProducts from "../src/pages/products/AllProducts";
import ProductDetailsPage from "../src/pages/products/ProductDetailsPage";
import Box from "@mui/material/Box";
import './sass/App.scss';
import './sass/Shared.scss';

function App() {
    return (
        <Box className="background">
            <Router>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/products">
                        <Route index element={<AllProducts/>}/>
                        <Route path=":id" element={<ProductDetailsPage/>}/>
                    </Route>

                    <Route path="*" element={<h1>PAGE NOT FOUND</h1>}/>
                </Routes>
            </Router>
        </Box>
    );
}

export default App;
