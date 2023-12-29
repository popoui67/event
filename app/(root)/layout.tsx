
import Header from '@/components/shared/header'
import Footer from '@/components/shared/footer'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className=' flex h-screen flex-col'>
      <main  className=' flex-1'>
        <Header/>
        {children}
        <Footer/>
        </main>
    </div>
  )
}
