'use client'

import { CardContainer, SectionContainer } from "@/styles/components/card";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useKeenSlider } from 'keen-slider/react'

interface ProductsProps {
  id: string
  name: string
  images: string
  description: string
  price: string
}


export default function Card() {

    const [products, setProducts] = useState<ProductsProps[]>([])

    const [sliderRef, instanceRef] = useKeenSlider(
      {
        slides: {
          perView: 3,
          spacing: 48
        }
      }
    )

    useEffect(() => {
      async function consumeApi() {
        const products = await fetch('http://localhost:3000/api/products')
        const data: ProductsProps[] = await products.json()
      
        return setProducts(data)
      }
  
      consumeApi()
    }, [])

    return (
        <SectionContainer ref={sliderRef} className="keen-slider">
            {
                products.map((product: ProductsProps) => {
        
                return (
                    <CardContainer key={product.id} className="keen-slider__slide">
                      <Image src={product.images} width={520} height={480} alt={product.description}/>
                      
                      <div>
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                      </div>

                    </CardContainer>
                )
                })
            }
        </SectionContainer>
    )
}