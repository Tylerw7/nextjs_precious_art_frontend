import ProductList from "./ProductList"
import { Product } from "@/src/Types/product"


type Props = {
    products: Product[]
    
}



const Catalog = ({products}: Props) => {
  return (
    <>
    <ProductList products={products}/>
    
    </>
  )
}

export default Catalog