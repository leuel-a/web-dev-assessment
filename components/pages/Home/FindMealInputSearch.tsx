import Image from 'next/image';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';

export function FindMealInputSearch() {
    return (
        <div className="flex w-full items-center justify-between gap-2">
            <div className="flex items-center flex-1 border border-input px-2 rounded-md h-12">
                <Image
                    src="/fi-rr-search.png"
                    alt="home page search place holder"
                    width={18}
                    height={12}
                />
                <Input
                    className="flex-1 border-none"
                    placeholder="What would you like to eat today?"
                />
            </div>
            <Button className="h-full bg-linear-to-r from-[#FF7A7A] to-[#F65900]">
                <Image
                    src="/small-search.png"
                    alt="Search Icon for the Filter"
                    width={18}
                    className="text-white"
                    height={18}
                />
                <span>Find Meal</span>
            </Button>
        </div>
    );
}
