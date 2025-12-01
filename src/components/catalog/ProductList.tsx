import { Product } from "@/src/Types/product";
import { Box } from "@mui/material";
import ProductCard from "./ProductCard";

type Props = {
  products: Product[];
};

const ProductList = ({ products }: Props) => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, justifyContent: "center" }}>
      {products.map((product, i) => (
        <ProductCard key={product.id ?? i} product={product} />
      ))}
    </Box>
  );
};

export default ProductList;