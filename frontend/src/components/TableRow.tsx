"use client";

import { TProductProps } from "@/types/types";
import Image from "next/image";
import { useState } from "react";
import UpdateProductForm from "./UpdateProductForm";

const TableRow = ({ _id, product_name, product_price, product_weight, product_image, handleDeleteProduct, handleUpdateProduct, updateModalIsOpen, setUpdateModalIsOpen }: TProductProps) => {

    // pass this selected value to update form
    const selectedProduct = {
        selectedProductId: _id,
        selectedProductName: product_name,
        selectedProductPrice: product_price,
        selectedProductWeight: product_weight
    }

    // state for show action buttons
    const [openActionBtns, setOpenActionBtns] = useState(false);

    return (
        <>
            <tr className="even:bg-neutral-100">
                <td className="p-4">
                    <span className="w-10 h-10 rounded-lg bg-gradient-to-b from-indigo-50 to-indigo-100 overflow-hidden">
                        <Image
                            width={40}
                            height={40}
                            src={product_image}
                            alt="Product Image"
                            className="p-1 rounded-lg" />
                    </span>
                </td>
                <td className="p-4">
                    <h5 className="font-normal">
                        {product_name}
                    </h5>
                </td>
                <td className="p-4">
                    <h5 className="font-normal">
                        {product_weight}
                    </h5>
                </td>
                <td className="p-4">
                    <h5 className="font-normal">
                        ৳{product_price}
                    </h5>
                </td>
                <td
                    onClick={() => setOpenActionBtns(!openActionBtns)}
                    className="w-fit flex justify-center items-center cursor-pointer relative  my-6 mx-8">
                    <i className="ri-more-2-line"></i>

                    <span className={`rounded-lg z-10 absolute -top-8 -left-28 my-2 bg-white shadow-sm ${openActionBtns ? "grid" : "hidden"}`}>
                        <button
                            onClick={() => setUpdateModalIsOpen(true)}
                            className="text-sm px-4 py-2 bg-white hover:bg-neutral-100 transition rounded-t-lg hover:text-indigo-500 flex items-center gap-2">
                            <span>Update</span>
                            <i className="ri-arrow-right-up-line text-base"></i>
                        </button>
                        <button
                            onClick={() => handleDeleteProduct(_id)}
                            className="text-sm px-4 py-2 bg-white hover:bg-neutral-100 transition rounded-b-lg flex items-center gap-2 hover:text-red-500">
                            <span>Delete</span>
                            <i className="ri-delete-bin-4-line text-base"></i>
                        </button>
                    </span>
                </td>
            </tr>


            {/* update form modal */}
            <UpdateProductForm
                updateModalIsOpen={updateModalIsOpen}
                closeModal={() => setUpdateModalIsOpen(false)}
                handleUpdateProduct={handleUpdateProduct}
                selectedProduct={selectedProduct} />
        </>
    );
};

export default TableRow;