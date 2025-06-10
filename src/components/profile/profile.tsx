import React from 'react'
import Image from 'next/image';

const profile = () => {
    return (
        <div className="flex justify-center items-center h-screen w-screen bg-[hsl(185,75%,39%)]">
            <div className="bg-white rounded-xl w-80 text-center overflow-hidden">
                {/* Top image with relative container */}
                <div className="relative">
                    <Image src="/bg-pattern-card.svg" alt="Background" width={320} height={120} className="w-full" />

                    {/* Profile image overlapping */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-10">
                        <Image
                            src="/image-victor.jpg"
                            alt="Victor"
                            width={80}
                            height={80}
                            className="rounded-full border-4 border-white"
                        />
                    </div>
                </div>

                <div className="mt-14 px-4 pb-6">
                    <h2 className="text-lg font-bold">
                        Victor Crest <span className="text-gray-500 font-normal">26</span>
                    </h2>
                    <p className="text-gray-500 text-sm mb-6">London</p>

                    <div className="flex justify-around border-t pt-4 text-sm text-gray-700">
                        <div className="text-center">
                            <p className="font-bold">80K</p>
                            <p className="text-gray-500">Followers</p>
                        </div>
                        <div className="text-center">
                            <p className="font-bold">803K</p>
                            <p className="text-gray-500">Likes</p>
                        </div>
                        <div className="text-center">
                            <p className="font-bold">1.4K</p>
                            <p className="text-gray-500">Photos</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default profile