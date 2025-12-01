"use client";

import Catalog from "@/src/components/catalog/Catalog";
import { Product } from "@/src/Types/product";
import { Box, Button, Container, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  
useEffect(() => {
  const data = async() => {
    try {
      const res = await axios.get('https://localhost:5001/api/products') 
      setProducts(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  data()
},[])

const addProduct = () => {
  setProducts(prevState => [...prevState,
    {id: prevState.length + 1,
    name: 'product' + (prevState.length + 1),
    price: (prevState.length * 100) + 100,
    quantityInStock: 100,
    description: 'test',
    pictureUrl: 'https://picsum.photo/200',
    type: 'test',
    brand: 'test'
  }])
}

  return (
    <>
    <Container maxWidth='xl' sx={{mt: 14}}>
      <Box display='flex' justifyContent='center' gap={3} marginY={3}>
      <Typography variant="h4">Products</Typography>
      <Button variant="contained" onClick={addProduct}>Add Product</Button>
      </Box>

      <Catalog products={products} />
    </Container>
    </>
  );
}
