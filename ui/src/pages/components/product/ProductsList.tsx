import React from "react";
import {ProductSummarization} from "../../../components/model/Types";
import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    styled,
    tableCellClasses
} from "@mui/material";
import {useNavigate} from "react-router-dom";

interface ProductList {
    products: ProductSummarization[];
}

function ProductsList({products}: ProductList) {
    const navigate = useNavigate();

    return (
        <>
        <TableContainer >
            <Table id='default-table'>
                <TableHead>
                    <TableRow component='th'>
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
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell align="center" scope="row">
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
        </>
    );
}

export default ProductsList;
