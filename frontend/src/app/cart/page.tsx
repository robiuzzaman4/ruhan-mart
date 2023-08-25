'use client';

import Button from "@/components/Button";
import CartProductCard from "@/components/CartProductCard";
import Container from "@/components/Container";
import useProductsAndStoredProducts from "@/hooks/useProductAndStoredProducts";
import { removeFromDb } from "@/lib/cartFunctionality";
import { TStoredProductProps } from "@/types/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const Cart = () => {
    const { storedProducts } = useProductsAndStoredProducts();
    const router = useRouter();
    
    const handleDeleteProduct = (id: string) => {
        removeFromDb(id);
        toast.success("Remove from Cart!", {
            icon: <i className="ri-indeterminate-circle-line text-xl text-red-500"></i>,
        });

        router.refresh();
        const restProducts = storedProducts.filter((product) => product._id !== id);
        console.log(restProducts);
    }

    return (
        <section className="py-10">
            <Container className="relative">
                {/* back to home btn */}
                <Link href="/" className="absolute top-0 left-4 sm:left-8 md:left-12">
                    <button className="bg-indigo-500 text-neutral-50 rounded-lg px-4 py-1 border border-indigo-500">
                        <i className="ri-arrow-left-s-line text-xl"></i>
                    </button>
                </Link>

                <div className="grid gap-8">
                    {/* page title */}
                    <h1 className="text-3xl text-center font-bold text-indigo-500">
                        My Cart
                    </h1>

                    {/* all stored products */}
                    {
                        storedProducts.length === 0 ?
                            <div className="mx-auto w-fit grid place-items-center gap-4 mt-8">
                                <h1 className="text-3xl text-center font-bold">
                                    Your cart is empty!
                                </h1>
                                <Link href="/">
                                    <Button className="bg-white hover:bg-indigo-500 text-indigo-500 hover:text-neutral-50 transition rounded-lg">
                                        Continue Shopping
                                    </Button>
                                </Link>
                            </div>
                            :
                            <div className="grid gap-4 w-full max-w-md mx-auto">
                                {
                                    storedProducts.map((product: TStoredProductProps) => (
                                        <CartProductCard
                                            key={product._id}
                                            {...product}
                                            handleDeleteProduct={handleDeleteProduct} />
                                    ))
                                }
                            </div>
                    }
                </div>

            </Container>
        </section>
    );
};

export default Cart;