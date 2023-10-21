import React, {useEffect, useState} from "react";
import {ProductSummarization} from "../../components/model/Types";
import ProductsList from "../../components/product/ProductsList";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {Typography} from "@mui/material";

function AllProducts() {
    const [products, setProducts] = useState<ProductSummarization[]>([]);

    const navigate = useNavigate();

    return (
        <>
            <Box className="container-fluid p-5 text-center">
                <Box className="buttons-bar">
                    <Typography className="buttons-bar-typography">ALL PRODUCTS</Typography>
                    <Button className="buttons-bar-button" onClick={() => navigate("/")}>Back</Button>
                    <Button className="buttons-bar-button" onClick={() => navigate("new")}>Add new</Button>
                </Box>
                <ProductsList products={products}/>
            </Box>
        </>
    );
}

export default AllProducts;
