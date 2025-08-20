import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import FilterBar from "./FilterBar.tsx";
import ProductCard from "./ProductCard.tsx";
import Pagination from "./Pagination.tsx";

const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data: Product[] = await res.json();
        setProducts(data);
        setFiltered(data);
      } catch (error) {
        console.error("Error fetching products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleFilter = (search: string, sort: string, category: string) => {
    let updated = [...products];

    if (search) {
      updated = updated.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category && category !== "all") {
      updated = updated.filter((p) => p.category === category);
    }

    if (sort === "low-high") {
      updated = updated.sort((a, b) => a.price - b.price);
    } else if (sort === "high-low") {
      updated = updated.sort((a, b) => b.price - a.price);
    }

    setFiltered(updated);
    setCurrentPage(1);
  };

  // Pagination logic
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filtered.slice(indexOfFirst, indexOfLast);

  return (
    <div className="p-6">
      <FilterBar onFilter={handleFilter} />

      {loading ? (
        <p className="text-center py-10">Loading products...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <Pagination
            total={filtered.length}
            perPage={productsPerPage}
            current={currentPage}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default AllProducts;
