"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "@/src/Types/product";
import { Button, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";
import Image from "next/image";


type ProductId = {
    id: string;
}



export default function ProductDetails({ id }: ProductId) {
  const [product, setProduct] = useState<Product | null>(null);


  // Fetch Product detials
  useEffect(() => {
    
    const fetchProduct = async () => {
        
        try {
            const response = await axios.get(`https://localhost:5001/api/products/${id}`)

            setProduct(response.data)

        } catch (err) {
            console.log(err)
        }
    }
    fetchProduct()
  }, [id]);

  // Displays if the product is not loaded yet
  if (!product) return <div>Loading...</div>

  const productItemDetails = [
    {label: 'Name', value: product.name},
    {label: 'Description', value: product.description},
    {label: 'Type', value: product.type},
    {label: 'Brand', value: product.brand},
    {label: 'Quantity in stock', value: product.quantityInStock},
  ]




  return (
    <Grid container spacing={6} maxWidth='lg' sx={{mx: 'auto', mt: '100px'}}>

        <Grid size={6}>
            {product?.pictureUrl && (
            <Image
                src={product.pictureUrl}
                alt={product.name}
                width={500}      // specify width
                height={500}     // specify height
                className="w-full h-auto"
            />
            )}
        </Grid>

        <Grid>
            <Typography variant="h3">{product?.name}</Typography>
            <Divider sx={{mb: 2}} />
            <Typography variant="h4" color="secondary">${(product?.price / 100).toFixed(2)}</Typography>
            <TableContainer>
                <Table>
                    <TableBody>
                        {productItemDetails.map((detail, index) => (
                            <TableRow key={index}>
                                <TableCell sx={{font: 'bold', fontSize: '1rem'}}>{detail.label}</TableCell>
                                <TableCell sx={{ fontSize: "0.9rem", wordBreak: "break-word" }}>{detail.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Grid container spacing={2} marginTop={3}>
                <Grid>
                    <TextField
                    variant="outlined"
                    type="number"
                    label="Quantity in basket" 
                    fullWidth
                    defaultValue={1}
                    />
                </Grid>
                <Grid size={6}>
                    <Button
                        sx={{height: '55px'}}
                        color="primary"
                        size="large"
                        variant="contained"
                        fullWidth
                        >
                        Add to Basket
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  );
}
