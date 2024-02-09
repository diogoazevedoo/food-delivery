import { ProductProps } from "@/utils/data/products";
import { ProductCartProps } from "../cart-store";

export function add(products: ProductCartProps[], newProduct: ProductProps) {
    const exisingProduct = products.find(({ id }) => newProduct.id === id)

    if (exisingProduct) {
        return products.map((product) => 
            product.id === exisingProduct.id
                ? { ...product, quantity: product.quantity + 1 }
                : product
        )
    }

    return [...products, { ...newProduct, quantity: 1 }]
}