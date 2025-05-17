import type { Metadata } from "next"
import { Noto_Sans_Bengali } from "next/font/google"
import "./globals.css"

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "মেটাপ্লাগ ডিজিটাল মার্কেটিং",
  description: "মেটা অ্যাডস এবং ব্র্যান্ডিং সাপোর্টে বিশেষজ্ঞ ডিজিটাল মার্কেটিং এজেন্সি",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bn">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </head>
      <body className={notoSansBengali.className}>{children}</body>
    </html>
  )
}
