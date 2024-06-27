import Logo from '../../public/logo.png'
import Image from 'next/image'
import { Cart, HeaderContainer, ShoppingCartContainer } from '@/styles/components/header'

export function Header() {

    return (
        <HeaderContainer>
            <Image src={Logo} alt="Logo Ignite shop" width={129} height={52} priority />
            <ShoppingCartContainer>
                <Cart width={25} height={25} />
            </ShoppingCartContainer>
        </HeaderContainer>
    )
}