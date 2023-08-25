"use client";

import { TProductProps } from "@/types/types";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Spinner from "./Spinner";
import AllProduct from "./AllProduct";
import ProductCarouselCard from "./ProductCarouselCard";

const ProductCarousel = () => {

    const [products, setProducts] = useState<TProductProps[]>([]);
    const [loading, setLoading] = useState(true);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [isSeeAll, setIsSeeAll] = useState(false);

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

    const scrollLeft = () => {
        if (contentRef.current) {
            contentRef.current.scrollTo({
                left: contentRef.current.scrollLeft - 400,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (contentRef.current) {
            contentRef.current.scrollTo({
                left: contentRef.current.scrollLeft + 400,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="pb-16 mt-8">
            <Container className="relative">

                <div className="absolute right-4 sm:right-8 md:right-12 -top-8 flex items-center justify-center gap-4">
                    <button onClick={() => setIsSeeAll(!isSeeAll)}>
                        {
                            !isSeeAll
                                ?
                                <p className="text-sm text-indigo-500">See All</p>
                                :
                                <p className="text-sm text-indigo-500">See Less</p>
                        }
                    </button>

                    {
                        !isSeeAll &&
                        <div className="flex items-center justify-center gap-2">
                            <button onClick={scrollLeft} className="h-9 w-9 grid place-items-center rounded-lg bg-neutral-100 hover:bg-neutral-200 text-indigo-500 text-xl transition">
                                <i className="ri-arrow-left-s-line"></i>
                            </button>
                            <button onClick={scrollRight} className="h-9 w-9 grid place-items-center rounded-lg bg-neutral-100 hover:bg-neutral-200 text-indigo-500 text-xl transition">
                                <i className="ri-arrow-right-s-line"></i>
                            </button>
                        </div>
                    }
                </div>

                {
                    !isSeeAll ?
                        <div ref={contentRef} id="content" className=" p-4 flex items-start justify-start overflow-x-auto scroll-smooth w-full">
                            {
                                loading ? <Spinner />
                                    :
                                    products.map((product) => (
                                        <div key={product._id} className="mx-4">
                                            <ProductCarouselCard {...product} />
                                        </div>
                                    ))
                            }
                        </div>
                        : <AllProduct />
                }
            </Container>
        </section>
    );
};

export default ProductCarousel;
