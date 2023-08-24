"use client";

import React, { createContext, useState } from "react";

type TProduct = {
    _id?: string;
    product_name: string;
    product_price: number;
    product_weight: string;
    product_image: string;
};

type TProductContextProps = {
    children: React.ReactNode;
};

type TProductContextValue = {
    products: TProduct[];
    setProducts: React.Dispatch<React.SetStateAction<TProduct[]>>;
};

export const ProductContext = createContext<TProductContextValue | undefined>(undefined);

const ProdcutProvider = ({ children }: TProductContextProps) => {
    const [products, setProducts] = useState<TProduct[]>([]);

    const productInfo: TProductContextValue = {
        products,
        setProducts
    }

    return (
        <ProductContext.Provider value={productInfo}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProdcutProvider;