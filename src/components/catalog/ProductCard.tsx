import { Product } from "@/src/Types/product"
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import Link from "next/link"


type Props = {
    product: Product
}


const ProductCard = ({product}: Props) => {
  return (
    <Card 
        elevation={3}
        sx={{width: 280, borderRadius: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
    >
        <CardMedia 
            sx={{height: 240, backgroundSize: "cover"}}
            image={product.pictureUrl}
            title={product.name}
        />
        <CardContent>
            <Typography 
                gutterBottom 
                variant="subtitle2"
                sx={{textTransform: 'uppercase'}}
            >
                {product.name}
            </Typography>

            <Typography 
                variant="h6"
                sx={{color: 'secondary.main'}}
            >
                ${(product.price / 100).toFixed(2)}
            </Typography>
        </CardContent>

        <CardActions
            sx={{justifyContent: 'space-between'}}
        >
            <Button>Add to cart</Button>
            <Button><Link href={`/product-details/${product.id}`}>View</Link></Button>
        </CardActions>
    </Card>
  )
}

export default ProductCard