import React from 'react';

export default async function Home() {
    return(
        <main className="flex min-h-screen flex-col items-center justify-center p-6">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">
                Welcome to Pawsly!
            </h1>

            <p className="text-lg text-gray-600">
                The place where cats find their match.
            </p>

        </main>
    );
}