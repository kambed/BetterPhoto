import React from "react";
import {ProductSummarization} from "../model/Types";
import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from "@mui/material";
import {useNavigate} from "react-router-dom";

interface ProductList {
    products: ProductSummarization[];
}

function ProductsList({products}: ProductList) {
    const navigate = useNavigate();

    return (
            <TableContainer >
                <Table className='default-table'>
                <TableHead>
                    <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Domain</TableCell>
                            <TableCell align="center">Description</TableCell>
                            <TableCell align="center">Team leader</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow
                                hover
                                onClick={() => navigate(`/products/${product.id}`)}
                                key={product.id}
                            >
                                <TableCell align="center" component="th" scope="row">
                                    {product.name}
                                </TableCell>
                                <TableCell align="center">{product.department}</TableCell>
                                <TableCell align="center">{product.description}</TableCell>
                                <TableCell align="center">{product.teamLeader}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    );
}

export default ProductsList;
