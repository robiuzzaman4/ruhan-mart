"use client";

import Container from "./Container";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { TProductProps } from "@/types/types";
import Spinner from "./Spinner";
import ProductCard from "./ProductCard";

const AllProduct = () => {
    const [products, setProducts] = useState<TProductProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://ruhan-mart-backend.vercel.app/api/products")
            .then((res) => {
                setProducts(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }, [products])
    return (
        <section className="pb-16">
            <Container className="grid gap-8">
                {/* section title */}
                <h1 className="text-3xl font-bold text-indigo-500">
                    Trending Now
                </h1>

                {/* all products */}

                {
                    loading ? <Spinner /> :
                        <>
                            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {
                                    products.map((product) => (
                                        <ProductCard key={product._id} {...product} />
                                    ))
                                }
                            </div>
                        </>
                }
            </Container>
        </section>
    );
};

export default AllProduct;