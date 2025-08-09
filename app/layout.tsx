import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import type {Metadata} from 'next';
import localFont from 'next/font/local';
import Footer from '@/components/blocks/Footer';
import Header from '@/components/blocks/Header';
import './globals.css';

export const metadata: Metadata = {
    title: 'Food Wagen',
    description: 'A simple food searching application',
};

const poppins = localFont({
    src: '../assets/fonts/poppins/Poppins-Regular.ttf',
    variable: '--font-poppins',
});

const queryClient = new QueryClient();

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} font-poppins`}>
                <QueryClientProvider client={queryClient}>
                    <Header />
                    {children}
                    <Footer />
                </QueryClientProvider>
            </body>
        </html>
    );
}
