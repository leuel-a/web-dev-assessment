'use client';

import Image from 'next/image';
import {FiltersButton} from '@/components/pages/Home/FiltersButton';
import {FindMealInputSearch} from '@/components/pages/Home/FindMealInputSearch';

export default async function Page() {
    return (
        <main className="bg-amber-500 w-full overflow-hidden">
            <div className="w-8/12 py-10 mx-auto flex items-center justify-between">
                <div className="space-y-2 text-white">
                    <h1 className="text-4xl font-bold text-white">Are you starving?</h1>
                    <p>Within a few clicks, find meals that are accessible near you</p>

                    <div className="bg-white rounded-md w-[700px] flex gap-2 p-4">
                        <div className="flex flex-col w-full">
                            <div className="flex gap-2 py-2">
                                <FiltersButton iconSrc="/motorcycle-icon.png">Deliver</FiltersButton>
                                <FiltersButton iconSrc="/pickup-icon.png">Pickup</FiltersButton>
                            </div>
                            <FindMealInputSearch />
                        </div>
                    </div>
                </div>
                <div>
                    <Image
                        src="/hero-base-image.png"
                        alt="home page pizza"
                        className="-mb-20"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </main>
    );
}
