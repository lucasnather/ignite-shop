import { env } from "@/app/env/env";
import { NextRequest, NextResponse } from "next/server";
import { Stripe } from 'stripe'

export async function GET() {

    const stripe = new Stripe(env.STRIPE_KEY_PRIVATE)
    const response = await stripe.products.list({
        limit: 5,
        expand: ['data.default_price']
    })

    const product = response.data.map(product => {
        const  price = product.default_price as Stripe.Price
        const priceToNumber = Number(price.unit_amount)

        return {
            id: product.id,
            name: product.name,
            description: product.description,
            price: new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL'
            }).format(priceToNumber / 100),
            images: product.images[0]
        }
    })
    
    return NextResponse.json(product)
}