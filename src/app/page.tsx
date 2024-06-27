'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

interface ProductsProps {
  id: string
  name: string
  images: string
  description: string
  price: string
}

async function consumeApi() {
  const products = await fetch('http://localhost:3000/api/products')
  const data: ProductsProps[] = await products.json()

  return data
}

export default function Home() {

  const [products, setProducts] = useState<ProductsProps[]>([])

  useEffect(() => {
    async function consumeApi() {
      const products = await fetch('http://localhost:3000/api/products')
      const data: ProductsProps[] = await products.json()
    
      return setProducts(data)
    }

    consumeApi()
  }, [])
  
  return (
    <main>
      {
        products.map((product: ProductsProps) => {
  
          return (
            <div key={product.id}>
              <Image src={product.images} width={696} height={656} alt={product.description}/>
              <h2>{product.name}</h2>
              <p>{product.price}</p>
            </div>
          )
        })
      }
    </main>
  );
}
