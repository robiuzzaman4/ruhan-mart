"use client";

import { TUpdateProductFormProps } from "@/types/types";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Button from "./Button";

const UpdateProductForm = ({ updateModalIsOpen, closeModal, handleUpdateProduct, selectedProduct }: TUpdateProductFormProps) => {

    const {
        selectedProductId,
        selectedProductName,
        selectedProductPrice,
        selectedProductWeight
    } = selectedProduct;

    return (
        <Transition appear show={updateModalIsOpen} as={Fragment}>
            <Dialog as="div" onClose={closeModal} className="relative z-50">

                {/* overlay */}
                <Transition.Child
                    enter="transition duration-300 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition duration-200 ease-out"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    as={Fragment}>
                    <div className="fixed inset-0 bg-neutral-900/50 bg-opacity-40" />
                </Transition.Child>

                {/* actual modal */}
                <div className="fixed inset-0 overflow-auto">
                    <div className="flex items-center justify-center min-h-full w-full">
                        <Transition.Child
                            enter="transition duration-300 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-200 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                            as={Fragment}>

                            <Dialog.Panel
                                className="relative w-[90%] max-w-sm mx-auto max-h-[90vh] overflow-auto transform rounded-xl bg-white p-4 shadow-sm flex flex-col gap-4">

                                {/* modal close btn */}
                                <button
                                    onClick={closeModal}
                                    className="absolute top-2 right-2 h-8 w-8 grid place-items-center rounded-full text-xl shadow-sm bg-neutral-100 hover:bg-white hover:text-indigo-500 transition">
                                    <i className="ri-close-line text-xl"></i>
                                </button>

                                {/* add form */}
                                <form
                                    onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleUpdateProduct(e, selectedProductId)}
                                    className="bg-white rounded-lg shadow-sm grid gap-4 w-full max-w-sm mx-auto mt-4">
                                    <label className="grid gap-2">
                                        <span className="text-sm font-medium">Product Name:</span>
                                        <input
                                            name="productName"
                                            type="text"
                                            defaultValue={selectedProductName}
                                            placeholder="Fresh Oil"
                                            className="px-4 py-1.5 bg-white rounded-lg border border-neutral-200 focus:border-indigo-500 focus:outline-none text-sm"
                                            required />
                                    </label>
                                    <label className="grid gap-2">
                                        <span className="text-sm font-medium">Product Price:</span>
                                        <input
                                            name="productPrice"
                                            type="number"
                                            defaultValue={selectedProductPrice}
                                            placeholder="৳ 489"
                                            className="px-4 py-1.5 bg-white rounded-lg border border-neutral-200 focus:border-indigo-500 focus:outline-none text-sm"
                                            required />
                                    </label>
                                    <label className="grid gap-2">
                                        <span className="text-sm font-medium">Product Weight:</span>
                                        <input
                                            name="productWeight"
                                            type="text"
                                            defaultValue={selectedProductWeight}
                                            placeholder="500gm"
                                            className="px-4 py-1.5 bg-white rounded-lg border border-neutral-200 focus:border-indigo-500 focus:outline-none text-sm"
                                            required />
                                    </label>
                                    <label className="grid gap-2">
                                        <span className="text-sm font-medium">Product Image:</span>
                                        <input
                                            name="productImage"
                                            type="file"
                                            className="file:outline-none file:border-none file:rounded-lg file:text-xs file:bg-neutral-200" accept="image/*"
                                            required />
                                    </label>
                                    {/* submit btn */}
                                    <Button
                                        type="submit"
                                        className="bg-indigo-500 text-neutral-50 rounded-lg">
                                        Update Now
                                    </Button>
                                </form>
                            </Dialog.Panel>

                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default UpdateProductForm;