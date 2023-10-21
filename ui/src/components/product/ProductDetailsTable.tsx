import React from "react";
import {ProductDetails} from "../model/Types";
import {
    TableContainer,
    Paper,
    Table,
    TableBody,
    TableRow,
    TableCell,
} from "@mui/material";
import Box from "@mui/material/Box";

interface Product {
    product: ProductDetails;
}

function ProductsDetailsTable({product}: Product) {

    return (
        <Paper className={"table-container"}>
            <TableContainer>
                <Table className={"default-table-horizontal"} stickyHeader aria-label="sticky table">
                    <TableBody>
                        <TableRow key={product.id}>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">{product.id}</TableCell>
                        </TableRow>
                        <TableRow key={product.name}>
                            <TableCell align="center">NAME</TableCell>
                            <TableCell align="center">{product.name}</TableCell>
                        </TableRow>
                        <TableRow key={product.department}>
                            <TableCell align="center">DEPARTMENT</TableCell>
                            <TableCell align="center">{product.department}</TableCell>
                        </TableRow>
                        <TableRow key={product.description}>
                            <TableCell align="center">DESCRIPTION</TableCell>
                            <TableCell align="center">{product.description}</TableCell>
                        </TableRow>
                        <TableRow key={product.scopes.join()}>
                            <TableCell align="center">SCOPES</TableCell>
                            <TableCell align="center">
                                {product.scopes.map(scope =>
                                    <Box key={scope}>{scope}</Box>
                                )}
                            </TableCell>
                        </TableRow>
                        <TableRow key={product.components.join()}>
                            <TableCell align="center">COMPONENTS</TableCell>
                            <TableCell align="center">
                                {product.components.map(component =>
                                    <Box key={component}>{component}</Box>
                                )}
                            </TableCell>
                        </TableRow>
                        <TableRow key={product.productTeamMembers.join()}>
                            <TableCell align="center">TEAM MEMBERS</TableCell>
                            <TableCell align="center">
                                {product.productTeamMembers.map(ptm =>
                                    <Box key={ptm.id}>{ptm.id}. {ptm.name} - {ptm.type}</Box>
                                )}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

export default ProductsDetailsTable;
