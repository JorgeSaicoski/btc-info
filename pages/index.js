import Head from 'next/head'
import Image from 'next/image'
import Start from "./btc/Start"
import Navbar from "./Navbar"
import bitcoinlogo from ".//../public/bitcoinlogo.svg"

export default function Home() {
  return (
    <div className="bg-principalColor min-h-screen">
      <Image
        src={bitcoinlogo}
        alt="Logo"

      />
      <Navbar/>
      <Start/>
    </div>
  )
}
