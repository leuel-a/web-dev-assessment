import Image from 'next/image';
import {Button} from '@/components/ui/button';

export default function Header() {
    return (
        <div>
            <header className="flex w-8/12 mx-auto justify-between items-center h-20">
                <Image
                    src="/Logo.png"
                    alt="Logo of the Application"
                    width={100}
                    height={30}
                />

                <Button className="bg-amber-500">Add Meal</Button>
            </header>
        </div>
    );
}
