import './globals.css'

export const metadata = {
  title: 'Amir Rzaev — Product & UX/UI Designer',
  description: 'UX/UI and Product Designer with 4+ years of experience in crypto, Web3, branding, and digital products.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
