"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "./Container";

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);

    return (
        <>
            {/* mobile nav */}
            <div className="z-10 gap-2 py-6 fixed top-0 w-full bg-neutral-50">
                <Container className="flex items-center justify-between">
                    {/* brand */}
                    <Link
                        href="/"
                        className="shrink-0 text-xl text-indigo-500 font-bold">
                        Ruhan Mart
                    </Link>

                    {/* sidebar open btn */}
                    <button onClick={() => setShowSidebar(!showSidebar)} className="lg:hidden absolute right-4 sm:right-8 md:right-12 h-8 w-8 grid place-items-center rounded-full text-xl shadow-sm bg-neutral-100 hover:bg-white hover:text-indigo-500 transition">
                        <i className="ri-more-line"></i>
                    </button>

                    {/* avatar */}
                    <div className="shrink-0 h-8 w-8 grid place-items-center rounded-full text-xl shadow-sm bg-white text-indigo-500 mr-12 lg:mr-0">
                        <i className="ri-user-line"></i>
                    </div>
                </Container>
            </div>

            {/* desktop nav */}
            <Container>
                <div className={`z-50 fixed inset-y-0 left-0 lg:left-auto lg:mt-[85px] w-64 overflow-x-hidden transform lg:translate-x-0 bg-neutral-50 lg:bg-transparent border-r border-neutral-200 lg:border-none ${!showSidebar && "-translate-x-full"} transition duration-200 ease-in-out`}>

                    {/* sidebar content */}
                    <div className="grid gap-4 p-4 lg:p-0 mt-4 lg:mt-0 text-sm">

                        {/* drop down */}
                        <div className={`flex flex-col items-start gap-2`}>
                            <span
                                onClick={() => setOpenDropdown(!openDropdown)}
                                className="flex items-center justify-between gap-4 cursor-pointer">
                                <p>All Employe</p>
                                <i className="ri-arrow-down-s-line text-xl"></i>
                            </span>
                            <span className={`flex-col items-start gap-2 text-sm pl-4 ${openDropdown ? "flex" : "hidden"}`}>
                                <Link href="/admin"
                                    className="cursor-pointer">Sub Menu 1</Link>
                                <Link href="/admin" className="cursor-pointer">Sub Menu 2</Link>
                            </span>
                        </div>

                        <Link href="/admin" className="cursor-pointer">All Products</Link>
                        <Link href="/admin" className="cursor-pointer">Add New Product</Link>

                    </div>

                    {/* sidebar close button */}
                    <button onClick={() => setShowSidebar(!showSidebar)} className="h-8 w-8 grid place-items-center rounded-full text-xl shadow-sm bg-neutral-100 hover:bg-white hover:text-indigo-500 transition absolute top-4 right-4 lg:hidden">
                        <i className="ri-close-line"></i>
                    </button>
                </div>
            </Container>
        </>
    );
};

export default Sidebar;