import React from "react";
import Link from "next/link";

export default async function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-200 p-4">
            <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Login
                </h1>
                <form>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Email or Username
                        </label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <Link
                            className="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-blue-900"
                            href="/"
                            >
                            Forgot Password?
                        </Link>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white rounded font-bold py-2 px-4 focus:outline-none focus:shadow-outline transition-colors"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}