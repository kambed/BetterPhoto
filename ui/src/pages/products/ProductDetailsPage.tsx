import React, {useEffect, useState} from "react";
import {ProductDetails} from "../../components/model/Types";
import {useNavigate, useParams} from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ProductDetailsTable from "../../components/product/ProductDetailsTable";
import {Typography} from "@mui/material";


function ProductDetailsPage() {
    const {id} = useParams();
    const [product, setProduct] = useState<ProductDetails>();

    const navigate = useNavigate();

    return (
        <>  <Box className="container-fluid p-5 text-center">
            <Box className="buttons-bar">
                <Typography className="buttons-bar-typography">PRODUCT DETAILS</Typography>
                <Button className="buttons-bar-button" onClick={() => navigate(-1)}>Back</Button>
                <Button className="buttons-bar-button">Edit</Button>
            </Box>
            {product !== undefined &&
                <ProductDetailsTable product={product}/>
            }
        </Box>
        </>
    );
}

export default ProductDetailsPage;
