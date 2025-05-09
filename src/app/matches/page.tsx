import React from 'react';

const mockMatchedCats = [
    { id: 1, name: 'Labush', imageUrl: 'https://i.imgur.com/twHRb8H.png'},
    { id: 2, name: 'Luna', imageUrl: 'https://i.imgur.com/F7kwkyC.png'},
    { id: 3, name: 'Mitzi', imageUrl: 'https://i.imgur.com/qNIlDQX.png'},
    { id: 5, name: 'Sir Bruno', imageUrl: 'https://i.imgur.com/zp6nxnC.png'},
];

export default async function MatchesPage(){
    const matchedCats = mockMatchedCats;
    return(
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-600 mb-3">
                Your Matches
            </h1>
            {matchedCats.length === 0? (
                <p className="text-gray-600">
                    You have not matched with any cast yet. Keep swiping!
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                    {matchedCats.map(cat => (
                        <div key={cat.id} className="bg-white p-4 rounded-lg shadow-md text-center">
                            <img
                                src={cat.imageUrl}
                                alt={`Photo of ${cat.name}`}
                                className="w-full h-124 object-cover rounded-md mb-2"
                            />
                            <h3 className="text-lg font-semibold text-gray-700">{cat.name}</h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}