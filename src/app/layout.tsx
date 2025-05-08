// src/app/layout.tsx

import './globals.css';
import Link from 'next/link';
import React from 'react';
import { MdLanguage } from 'react-icons/md';

export const metadata = {
    title: 'Pawsly App',
    description: 'Find your cat a match!',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <div className="flex flex-col min-h-screen">
                    <header className="flex items-center justify-between bg-gray-900 text-white p-4">
                        <div className="flex items-center space-x-4">
                            <Link href="/" className="text-2xl font-semibold">🐾 Pawsly</Link>
                            <nav>
                                <ul className="flex space-x-4">
                                    <li><Link href="/login" className="hover:underline">Learn</Link></li>
                                    <li><Link href="/login" className="hover:underline">Safety</Link></li>
                                    <li><Link href="/login" className="hover:underline">Support</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="flex items-center space-x-1">
                                <MdLanguage size={20} />
                                <span>Language</span>
                            </span>
                            <li><Link href="/login" className="bg-white text-gray-900 px-4 py-2 rounded-full">Login</Link></li>
                        </div>
                    </header>
                    <main className="flex-grow">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    )
}