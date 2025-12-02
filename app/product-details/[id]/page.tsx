import ProductDetails from "./ProductsDetails";


type  ProductId = {
    params: {
        id: string
    }
}

export default async function Page({ params }: ProductId) {
  const resolved = await params;   // unwrap here (server-safe)
  return <ProductDetails id={resolved.id} />;
}
