import { ShoppingCart } from "@phosphor-icons/react";
import { styled } from "../../../stitches.config";

export const HeaderContainer = styled('header', {
    width: '1304px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '40px auto'
})

export const ShoppingCartContainer = styled('div', {
    backgroundColor: '$grayElements',
    padding: '12px',
    borderRadius: '6px'
})

export const Cart = styled(ShoppingCart, {
    color: '#8D8D99'
})