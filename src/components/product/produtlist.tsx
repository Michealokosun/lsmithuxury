import { ProductCard } from "./productCard";

export const ProductList = ({ product }) => {
  return (
    <>
      <h3 className="text-lg ">New Arrival</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {product.map((item: any) => (
          <ProductCard product={item} />
        ))}
      </div>
    </>
  );
};
