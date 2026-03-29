import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AOSProvider } from '@/components/aos-provider'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'TheGuide 工具箱 - 您的一站式效率工具平台',
  description: 'TheGuide 工具箱是一个纯前端效率工具与网站导航平台，提供文本工具、编码转换、图片处理、生成器、计算工具等多种实用功能，完全本地运行，保护您的隐私。',
  generator: 'Ruanm',
  icons: {
    icon: [
      {
        url: '/t-t-i/favicon.ico'
      },
    ]
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className="font-sans antialiased">
        <AOSProvider>
          {children}
        </AOSProvider>
        <Analytics />
      </body>
    </html>
  )
}
