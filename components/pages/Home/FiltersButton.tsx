import type {PropsWithChildren, ComponentProps} from 'react';
import Image from 'next/image';
import {Button} from '@/components/ui/button';

export interface FiltersButtonProps extends PropsWithChildren {
    iconSrc: string;
    ImageProps?: Omit<ComponentProps<typeof Image>, 'src' | 'alt'>;
}

export function FiltersButton({children, iconSrc, ImageProps = {}}: FiltersButtonProps) {
    return (
        <Button
            variant="outline"
            className="border-none shadow-none"
        >
            <Image
                src={iconSrc}
                alt="delivery filter motorcylcle icon"
                width={18}
                height={12}
                {...ImageProps}
            />
            <span className="text-gray-500"> {children} </span>
        </Button>
    );
}
