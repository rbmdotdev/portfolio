import './globals.css'

export const metadata = {
  title: 'Ion Tech Jobs',
  description: 'The Best Tech Jobs in Texas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
