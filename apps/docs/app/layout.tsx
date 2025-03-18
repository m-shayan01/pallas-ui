import { Inter } from 'next/font/google'
import { Footer } from '../components/docs/footer'
import { Header } from '../components/docs/header'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: {
    default: 'Pallas UI',
    template: '%s | Pallas UI',
  },
  description: 'A modern UI component library for React applications',
  keywords: ['Pallas UI', 'React', 'Components', 'UI Library'],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <div>
          <Header />
          <div>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
