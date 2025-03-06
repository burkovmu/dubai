import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RentDubai - Аренда премиальных автомобилей в Дубае',
  description: 'Аренда премиальных и эксклюзивных автомобилей в Дубае',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
} 