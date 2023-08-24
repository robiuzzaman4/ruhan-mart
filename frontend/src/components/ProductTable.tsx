"use client";

import TableRow from './TableRow';
import { TProductProps } from '@/types/types';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from './Button';
import AddProductForm from './AddProductForm';
import { toast } from 'react-hot-toast';
import Spinner from './Spinner';

const ProductTable = () => {
    const [products, setProducts] = useState<TProductProps[]>([]);
    const [loading, setLoading] = useState(true);
    // state for add modal
    const [addModalIsOpen, setAddModalIsOpen] = useState(false);
    // state for update modal
    const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);

    // table heading
    const tableHead = ["Product Image", "Product Name", "Product Weight", "Product Price", "Action"];

    // fetch all products
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

    // add products functionality
    const handleAddProduct = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const product_name = form.productName.value;
        const product_price = form.productPrice.value;
        const product_weight = form.productWeight.value;

        const image = form.productImage.files[0];
        const formData = new FormData();
        formData.append("image", image);

        const url = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMG_API_KEY}`;

        axios.post(url, formData)
            .then((res) => {
                if (res.data) {
                    const product_image = res.data.data.display_url;
                    console.log("image url: ", product_image);

                    const newProduct = {
                        product_name,
                        product_price,
                        product_weight,
                        product_image
                    }

                    console.log("newProduct", newProduct);


                    // http req for add new product after img hosting
                    axios.post("https://ruhan-mart-backend.vercel.app/api/products", newProduct)
                        .then((res) => {
                            console.log("data: ", res.data);
                            if (res.data) {
                                form.reset();
                                setAddModalIsOpen(false);
                                setProducts((prevProducts) => [...prevProducts, res.data]);
                                return toast.success("Successfully Created New Product!");
                            }
                        })
                        .catch(error => {
                            console.error("Product Error: ", error);
                            return toast.error("Product create error " + error.message);
                        });
                }
            })
            .catch(error => {
                console.error("Img Error: ", error);
                return toast.error("Img create error" + error.message);
            });
    }

    // delete product functionality
    const handleDeleteProduct = (id: string) => {
        axios.delete(`https://ruhan-mart-backend.vercel.app/api/products/${id}`)
            .then((res) => {
                if (res.data.deletedCount) {
                    const restProducts = products.filter((product) => product._id !== id)
                    setProducts(restProducts)
                    return toast.success("Successfully Deleted Product");
                }
            })
    }

    // update product functionality
    const handleUpdateProduct = (e: React.FormEvent<HTMLFormElement>, id: string) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const product_name = form.productName.value;
        const product_price = form.productPrice.value;
        const product_weight = form.productWeight.value;

        const image = form.productImage.files[0];
        const formData = new FormData();
        formData.append("image", image);

        const url = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMG_API_KEY}`;

        axios.post(url, formData)
            .then((res) => {
                if (res.data) {
                    const product_image = res.data.data.display_url;
                    console.log("image url: ", product_image);

                    const updatedProduct = {
                        product_name,
                        product_price,
                        product_weight,
                        product_image
                    }

                    console.log("updatedProduct", updatedProduct);

                    // http req for updated new product after img hosting
                    axios.put(`https://ruhan-mart-backend.vercel.app/api/products/${id}`, updatedProduct)
                        .then((res) => {
                            console.log("data: 131", res.data);
                            if (res.data) {
                                form.reset();
                                setUpdateModalIsOpen(false);
                                return toast.success("Successfully Updated this Product!");
                            }
                        })
                        .catch(error => {
                            console.error("Product Error: ", error);
                            return toast.error("Product Update error " + error.message);
                        });
                }
            })
            .catch(error => {
                console.error("Img Error: ", error);
                return toast.error("Img update error " + error.message);
            });
    }

    return (
        <>
            {
                loading ? <Spinner /> :
                    <section className="grid gap-8">
                        {/* action buttons */}
                        <div className="flex items-center justify-between w-full">
                            <Button
                                onClick={() => setAddModalIsOpen(true)}
                                className="cursor-pointer bg-indigo-500 rounded-lg text-neutral-50 flex items-center gap-1">
                                <i className="ri-add-line"></i>
                                <span>Add New Product</span>
                            </Button>

                            {/* form */}
                            <AddProductForm
                                addModalIsOpen={addModalIsOpen}
                                closeModal={() => setAddModalIsOpen(false)}
                                handleAddProduct={handleAddProduct} />
                        </div>

                        {/* table */}
                        <div className="overflow-hidden">
                            <div className="overflow-auto h-full w-full">
                                <table className="w-full min-w-max table-auto text-left">
                                    <thead>
                                        <tr>
                                            {tableHead.map((head) => (
                                                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                    <h5
                                                        className="font-normal leading-none opacity-70"
                                                    >
                                                        {head}
                                                    </h5>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            products?.map((product: TProductProps) => (
                                                <TableRow
                                                    key={product._id}
                                                    {...product}
                                                    handleDeleteProduct={handleDeleteProduct}
                                                    handleUpdateProduct={handleUpdateProduct}
                                                    updateModalIsOpen={updateModalIsOpen}
                                                    setUpdateModalIsOpen={setUpdateModalIsOpen} />
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
            }
        </>
    );
};

export default ProductTable;