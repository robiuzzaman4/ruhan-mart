"use client";

import Image from "next/image";
import Button from "./Button";
import { TProduct } from "@/types/types";
import { addToDb, deleteFromDb, getShoppingCart } from "@/lib/cartFunctionality";
import useProductsAndStoredProducts from "@/hooks/useProductAndStoredProducts";
import { toast } from "react-hot-toast";

const ProductCard = ({ _id, product_name, product_price, product_weight, product_image }: TProduct) => {

    const { storedProducts } = useProductsAndStoredProducts();

    const isThisProduct = storedProducts.find((pd) => pd._id === _id);

    // increse product
    const handleAddToCart = (id: string) => {
        addToDb(id);
        toast.success("Add to Cart!");
    };

    // decrese product
    const handleDeleteFromCart = (id: string) => {
        deleteFromDb(id);
        toast.success("Remove from Cart!", {
            icon: <i className="ri-indeterminate-circle-line text-xl text-red-500"></i>,
        });
    };

    return (
        <div className={`bg-white shadow-sm rounded-lg p-4 flex flex-col gap-2`}>
            <Image
                src={product_image}
                alt="Product Image"
                height={400}
                width={400}
                className="object-cover" />
            <h3 className="font-medium">
                {product_name}
            </h3>
            <p className="text-sm text-neutral-500">{product_weight}</p>
            <p className="text-indigo-500 font-medium">৳{product_price}</p>

            {
                isThisProduct && isThisProduct.quantity > 0 ?
                    <div className="w-full h-[38px] bg-white rounded-lg text-indigo-500 border border-indigo-500 grid place-items-center grid-cols-5">
                        {/* minus btn */}
                        <button
                            onClick={() => handleDeleteFromCart(_id)}
                            className="bg-neutral-100 hover:bg-neutral-200 h-6 w-6 rounded-lg">
                            <i className="ri-subtract-line"></i>
                        </button>
                        <p className="col-span-3 tex-xl">
                            {
                                isThisProduct ?
                                    <>
                                        ৳{product_price * isThisProduct.quantity}
                                    </> :
                                    <>
                                        ৳{product_price}
                                    </>
                            }
                        </p>
                        {/* plus btn */}
                        <button
                            onClick={() => handleAddToCart(_id)}
                            className="bg-neutral-100 hover:bg-neutral-200 h-6 w-6 rounded-lg">
                            <i className="ri-add-line"></i>
                        </button>
                    </div>
                    : <Button
                        onClick={() => handleAddToCart(_id)}
                        className="w-full rounded-lg border border-indigo-500 bg-indigo-500 text-neutral-50">
                        Add to Cart
                    </Button>
            }
        </div>
    );
};

export default ProductCard;