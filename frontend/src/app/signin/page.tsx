"use client";

import Button from "@/components/Button";
import Container from "@/components/Container";
import Link from "next/link";

const SignIn = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center">
            <Container>
                {/* back to home btn */}
                <Link href="/" className="absolute top-0 left-4 sm:left-8 md:left-12">
                    <Button className="bg-neutral-900 text-neutral-50 rounded-lg">
                        <i className="ri-arrow-left-s-line"></i>
                    </Button>
                </Link>

                <h2 className="py-8 text-center text-2xl font-bold">Sign In</h2>
                <form className="bg-white p-4 rounded-lg shadow-sm grid gap-4 w-full max-w-md mx-auto">
                    <label className="grid gap-2">
                        <span className="text-sm font-medium">Enter Your Email:</span>
                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            className="px-4 py-1.5 bg-white rounded-lg border border-neutral-200 focus:border-indigo-500 focus:outline-none text-sm"
                            required />
                    </label>
                    <label className="grid gap-2">
                        <span className="text-sm font-medium">Enter Your Password:</span>
                        <input
                            type="password"
                            placeholder="******"
                            className="px-4 py-1.5 bg-white rounded-lg border border-neutral-200 focus:border-indigo-500 focus:outline-none text-sm"
                            required />
                    </label>

                    <Button
                        type="submit"
                        className="bg-indigo-500 text-neutral-50 rounded-lg">
                        Sign In
                    </Button>

                    <p className="text-sm">
                        Dont have an account? <Link href="/signup"
                            className="text-indigo-500">Sign Up</Link> Now.
                    </p>
                </form>
            </Container>
        </section>
    );
};

export default SignIn;