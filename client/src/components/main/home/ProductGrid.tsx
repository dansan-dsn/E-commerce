import { Box } from "@mui/material";
import ProductCard from "@components/main/products/ProductCard";

const ProductGrid = ({ products }) => (
  <Box
    sx={{
      display: "flex",
      gap: 3,
      flexWrap: "wrap",
      justifyContent: "space-between",
      pb: 2,
    }}
  >
    {products.map((product) => (
      <Box
        key={product.id}
        sx={{
          flex: "0 0 calc(16.666% - 20px)",
          maxWidth: "calc(16.666% - 20px)",
          minWidth: 0,
        }}
      >
        <ProductCard product={product} />
      </Box>
    ))}
  </Box>
);

export default ProductGrid;
