import { useState } from "react";

interface Props {
  onFilter: (search: string, sort: string, category: string) => void;
}

const FilterBar = ({ onFilter }: Props) => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("all");

  const handleApply = () => {
    onFilter(search, sort, category);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-gray-100 p-4 rounded-2xl shadow">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 rounded-lg border w-full sm:w-1/3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="p-2 rounded-lg border"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Sort</option>
        <option value="low-high">Price: Low → High</option>
        <option value="high-low">Price: High → Low</option>
      </select>

      <select
        className="p-2 rounded-lg border"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All Categories</option>
        <option value="men's clothing">Men’s Clothing</option>
        <option value="women's clothing">Women’s Clothing</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelry</option>
      </select>

      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={handleApply}
      >
        Apply
      </button>
    </div>
  );
};

export default FilterBar;
