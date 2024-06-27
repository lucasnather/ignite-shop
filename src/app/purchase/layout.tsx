import React from "react";

interface ChildrenProps {
    children: React.ReactNode 
  }
  

export default function PurchaseLayout({ children }: ChildrenProps) {
    return (
        <html lang="pt-br">
            <body>
                <p>Layout apenas para compra</p>
                { children }
            </body>
        </html>
    )
}