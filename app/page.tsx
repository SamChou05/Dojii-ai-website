import Image from 'next/image'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import Timeline from './components/Timeline'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Introduction/>
      <Timeline/>
      <Footer/>
    </div>
  )
}
