import './globals.css'

export const metadata = {
  title: 'Amir Rzaev — Product & UX/UI Designer',
  description: 'UX/UI and Product Designer with 4+ years of experience in crypto, Web3, branding, and digital products.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Amir Rzaev — Product & UX/UI Designer',
    description: 'UX/UI and Product Designer with 4+ years of experience in crypto, Web3, branding, and digital products.',
    url: 'https://amirzaev.vercel.app',
    siteName: 'Amir Rzaev',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
