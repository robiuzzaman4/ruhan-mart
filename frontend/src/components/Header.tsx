"use client";

import Link from "next/link";
import Container from "./Container";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        {
            title: "Cart",
            href: "/cart",
            iconSrc: "ri-shopping-cart-line"
        },
        {
            title: "Sign In",
            href: "/signin",
            iconSrc: "ri-login-circle-line"
        },
        {
            title: "Admin",
            href: "/admin",
            iconSrc: "ri-user-line"
        }
    ]
    return (
        <header className="z-10 fixed top-0 w-full bg-white shadow-sm">
            <Container>
                <nav className="py-6 flex flex-col items-start lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16 relative">
                    {/* brand */}
                    <Link
                        href="/"
                        className="shrink-0 text-xl text-indigo-500 font-bold">
                        Ruhan Mart
                    </Link>

                    {/* search bar */}
                    <div className="w-full max-w-sm hidden lg:block">
                        <label className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full px-4 py-1.5 rounded-lg border bg-white border-indigo-500 focus:outline-none text-sm pl-12" />
                            <div className="absolute left-4 -top-[2px] text-indigo-500">
                                <i className="ri-search-line"></i>
                            </div>
                            <div className="absolute right-4 -top-[2px] text-indigo-500">
                                <i className="ri-menu-fold-line"></i>
                            </div>
                        </label>
                    </div>

                    {/* nav links */}
                    <div className={`lg:flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-center text-sm ${isMenuOpen ? "flex" : "hidden"}`}>
                        {
                            navLinks.map((link) => (
                                <Link key={link.title} href={link.href}>
                                    <span className="flex items-center gap-1 shrink-0">
                                        <i className={`${link.iconSrc} text-indigo-500`}></i>
                                        <p className="shrink-0">{link.title}</p>
                                    </span>
                                </Link>
                            ))
                        }
                    </div>

                    {/* menu collapse btn */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden absolute top-[22px] right-0 h-8 w-8 grid place-items-center rounded-full text-xl shadow-sm bg-neutral-100 hover:bg-white hover:text-indigo-500 transition">
                        {
                            isMenuOpen
                                ?
                                <i className="ri-close-line"></i>
                                :
                                <i className="ri-equal-line"></i>
                        }
                    </button>
                </nav>
            </Container>
        </header>
    );
};

export default Header;