import React from 'react';
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import MainPage from "./pages/MainPage";
import Help from "./pages/Help";
import OfferDetails from "./pages/OfferDetails";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";
import Offer from "./pages/Offer";
import Box from "@mui/material/Box";
import "react-image-gallery/styles/css/image-gallery.css";
import './sass/Shared.scss';
import { FloatingWhatsApp } from 'react-floating-whatsapp'

function App() {
    return (
        <Box className="background">
            <Router>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/products">
                        <Route index element={<Offer/>}/>
                        <Route path=":id" element={<OfferDetails/>}/>
                    </Route>
                    <Route path="/help" element={<Help/>}/>
                    <Route path="/gallery" element={<Gallery/>}/>
                    <Route path="/contact" element={<Contact/>}/>

                    <Route path="*" element={<h1>PAGE NOT FOUND</h1>}/>
                </Routes>
                <FloatingWhatsApp
                    accountName="BetterPhoto"
                    phoneNumber="500500500"
                    chatMessage="Cześć! Jak możemy Ci pomóc?"
                    allowEsc
                    allowClickAway
                    notification
                    notificationSound
                />
                <Footer/>
            </Router>
        </Box>
    );
}

export default App;
