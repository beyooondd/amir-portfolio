import './globals.css'

export const metadata = {
  title: 'Amir Rzaev — Product & UX/UI Designer',
  description: 'UX/UI and Product Designer with 4+ years of experience in crypto, Web3, branding, and digital products.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
