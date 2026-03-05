import React, { useEffect, useState } from 'react'

const limit = 50;
const PaginationUI = () => {
  const [currentPage,setCurrentPage] = useState(0);
  const [productsList,setProductsList] =useState([]);

  const fetchProducts = async()=>{
   const data =await fetch(`https://dummyjson.com/products?limit=${limit}`);
   const json = await data.json();
   console.log(json)
   const {products} =json;
   setProductsList(products)
   console.log(productsList)
  }
  useEffect(()=>{
    fetchProducts();
  },[])
  return (
    <div className='flex flex-wrap gap-4 justify-evenly'>
        {productsList && productsList.map((product,idx)=>{
            return (
                <div key={product.id} className='flex flex-col border border-solid border-black flex-wrap gap-5'>
                 <p>{product?.brand}</p>
                 <img className='object-contain' src={product.thumbnail} alt={"product image"}/>
                 <p>{product?.title}</p>
                </div>
            )
        })}
    </div>
  )
}

export default PaginationUI