import { motion } from "framer-motion";
import type { Product } from "../types/product";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-4 bg-white shadow-md rounded-2xl flex flex-col items-center"
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mb-4"
      />
      <h3 className="font-semibold text-sm text-center">{product.title}</h3>
      <p className="text-blue-600 font-bold mt-2">${product.price}</p>
      <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Add to Cart
      </button>
    </motion.div>
  );
};

export default ProductCard;
