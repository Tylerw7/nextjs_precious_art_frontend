"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "@/src/Types/product";


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





  return (
    <div className="mt-[100px]">
      {product ? product.price : "Loading..."}
    </div>
  );
}
