interface Props {
  total: number;
  perPage: number;
  current: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ total, perPage, current, onPageChange }: Props) => {
  const totalPages = Math.ceil(total / perPage);

  return (
    <div className="flex justify-center mt-6 gap-2">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={`px-3 py-1 rounded-lg ${current === i + 1
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
            }`}
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
