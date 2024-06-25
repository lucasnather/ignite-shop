'use client'

import { Header } from "@/components/header"
import { globalStyles } from "@/styles/global"

globalStyles()

interface ChildrenProps {
  children: React.ReactNode 
}

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="pt-br">
       
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
