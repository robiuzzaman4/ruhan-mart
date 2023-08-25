"use client";

import { getShoppingCart } from "@/lib/cartFunctionality";
import { TStoredProductProps } from "@/types/types";
import { useEffect, useState } from "react";


const useProductsAndStoredProducts = () => {
    const [allProducts, setAllProducts] = useState<TStoredProductProps[]>([]);

    useEffect(() => {
        fetch("https://ruhan-mart-backend.vercel.app/api/products")
        .then((res) => res.json())    
        .then((data) => {              
                setAllProducts(data);
            })
    }, []);

    const shoppingCart: any = getShoppingCart();

    let storedProducts = [];

    for (const id in shoppingCart) {
        const addedProduct = allProducts.find((pd) => pd._id === id);
        if (addedProduct) {
            const quantity = shoppingCart[id];
            addedProduct.quantity = quantity;
            storedProducts.push(addedProduct);
        }
    }

    return { allProducts, storedProducts };
};

export default useProductsAndStoredProducts;