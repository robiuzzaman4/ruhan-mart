import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'remixicon/fonts/remixicon.css'
import { Toaster } from 'react-hot-toast';
import ProdcutProvider from '@/providers/ProdcutProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ruhan Mart',
  description: 'Ruhan Mart - E-Commerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-neutral-50 text-neutral-900`}>
        <ProdcutProvider>
          {children}
        </ProdcutProvider>
        <Toaster />
      </body>
    </html>
  )
}
