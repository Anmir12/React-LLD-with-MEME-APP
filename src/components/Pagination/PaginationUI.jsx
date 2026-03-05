import React, { useEffect, useState } from "react";
const PAGE_SIZE = 10;
const PaginationUI = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [productsList, setProductsList] = useState([]);
  const [totalProducts,settotalProducts] = useState(0);
  const totalPages = Math.ceil(totalProducts / PAGE_SIZE);
  const skip = currentPage * PAGE_SIZE;

  const fetchProducts = async () => {
    const data = await fetch(`https://dummyjson.com/products?skip=${skip}&limit=${PAGE_SIZE}`);
    const json = await data.json();
    console.log(json);
    const { products,total } = json;
    setProductsList(products);
    settotalProducts(total)
    console.log(productsList);
  };
  useEffect(() => {
    fetchProducts();
  }, [currentPage]);
  return (
    <div>
      <div className="flex flex-wrap gap-4 justify-evenly">
        {productsList &&
          productsList.map((product, idx) => {
            return (
              <div
                key={product.id}
                className="flex flex-col border border-solid border-black flex-wrap gap-5 mb-4"
              >
                <p>{product?.brand}</p>
                <p className="text-blue-400 font-bold">{product?.id}</p>
                <img
                  className="object-contain"
                  src={product.thumbnail}
                  alt={"product image"}
                />
                <p>{product?.title}</p>
              </div>
            );
          })}
      </div>
      <div className="flex border border-soild border-black gap-4 items-center justify-center mb-4">
        <button
          className="px-4 py-2 border rounded-md cursor-pointer hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        {[...Array(totalPages).keys()].map((pN, idx) => {
          return (
            <p
              key={idx}
              className={
                currentPage === pN
                  ? "bg-red-600"
                  : "border border-solid border-black cursor-pointer"
              }
              onClick={() => setCurrentPage(pN)}
            >
              {pN + 1}
            </p>
          );
        })}
        <button
          className="px-4 py-2 border rounded-md cursor-pointer hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationUI;
