import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ subsets: ['latin', 'cyrillic'], display: 'swap', variable: '--font-bezdep' })
const title = 'Бездепозитные бонусы казино: условия, регистрация и понятный гид — BezdepCasino!'
const description = 'Бездепозитные бонусы без сложных слов: как получить подарок за регистрацию, проверить вейджер, лимиты и правила вывода. Независимый гид BezdepCasino поможет разобраться в условиях до начала игры. 18+.'

export const metadata: Metadata = {
  metadataBase: new URL('https://bezdepcasino1.vercel.app/'),
  title,
  description,
  applicationName: 'BezdepCasino',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  openGraph: {
    type: 'website', locale: 'ru_RU', url: '/', siteName: 'BezdepCasino', title, description,
    images: [{ url: '/images/bonus-art.webp', width: 960, height: 640, alt: 'Подарочная коробка и игровые фишки — гид по бонусам BezdepCasino' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/bonus-art.webp'] },
  icons: { apple: '/icon.png' },
  category: 'Информационный гид',
}

export const viewport: Viewport = {
  width: 'device-width', initialScale: 1, colorScheme: 'light', themeColor: '#f3f5f8',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`bg-background ${manrope.variable}`}>
      <head>
        <meta name="yandex-verification" content="1dc8916043f7c50c" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
