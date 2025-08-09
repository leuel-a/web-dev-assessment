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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} font-poppins`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
