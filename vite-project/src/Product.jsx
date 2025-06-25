import React from 'react'
import Footer from './Footer'
import { useParams } from 'react-router-dom'
import Data from './Data.json'
function Product() {
  const { id } = useParams()
  const product = Data.find((item) => item.id === parseInt(id))
  if (!product) {
    return <div>Product not found</div>
  }
  
  return (
    <div className="w-[100vw">
    <div className="flex flex-col items-center justify-center  overflow-hidden">  
    <div className="flex flex-col items-center justify-center   bg-gray-200 p-4 rounded shadow-lg m-15 mt-20 overflow-hidden">
      <img src={product.image} alt={product.title} className="w-[50vh] h-[45vh] rounded l" />
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <p className="text-lg">{product.description}</p>
      <p className="text-lg">Price: {product.price}</p>
      <div className="flex gap-20">
      <button className="bg-purple-500 w-[20vh] h-[7vh] text-white px-4 py-2 rounded">Add to Cart</button>
      <button className="bg-green-500 w-[20vh] h-[7vh] text-white px-4 py-2 rounded ml-2">Buy Now</button>
      </div>
    </div>
    
    </div>
    <Footer/>
    </div>
    
  )
}

export default Product;