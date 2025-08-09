'use client';

import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import type {PropsWithChildren} from 'react';

export type ProvidersProp = PropsWithChildren;

export function Providers({children}: ProvidersProp) {
    const queryClient = new QueryClient();

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
