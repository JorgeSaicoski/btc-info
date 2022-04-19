import {useState} from 'react'
import Link from 'next/link'
import logo from ".//../public/logo2.png"
import menu from ".//../public/menu.svg"
import Image from 'next/image'

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
  const changeOpen =()=> {
    const menuIcon = document.getElementById('menuIcon')
    const navBarFlex = document.getElementById("navFlex")
    const itemNavFlex = document.getElementById("itemNavFlex")
    const logoFlex = document.getElementById("logoFlex")
    if (isOpen) {
      setIsOpen(false)
      menuIcon.classList.remove("opacity-0")
      navBarFlex.classList.remove("h-full")
      itemNavFlex.classList.remove("h-1/2")
      navBarFlex.classList.add("opacity-0")
      navBarFlex.classList.add("h-0")
      itemNavFlex.classList.add("h-0")
      logoFlex.classList.remove("opacity-25")
      navBarFlex.classList.remove("duration-75")
      navBarFlex.classList.add("duration-500")



    }else{
      setIsOpen(true)
      menuIcon.classList.add("opacity-0")
      navBarFlex.classList.add("opacity-100")
      navBarFlex.classList.add("h-full")
      navBarFlex.classList.remove("h-0")
      itemNavFlex.classList.add("h-1/2")
      itemNavFlex.classList.remove("h-0")
      logoFlex.classList.add("opacity-25")

      navBarFlex.classList.add("duration-75")
      navBarFlex.classList.remove("duration-500")



    }
  }

  return (
    <>
      <button className="sticky top-1.5 left-1.5 h-10 w-10 sm:opacity-0 ease-in duration-1000" onClick={changeOpen} id="menuIcon">
        <Image
          src={menu}
          alt="Menu"

        />

      </button>
      <header id="navFlex" className="ease-in duration-75 w-full sm:p-1 sm:m-1 h-0 sm:h-auto overflow-hidden opacity-0 sm:opacity-100 fixed sm:sticky sm:top-0 bottom-0 left-0 flex sm:flex-row flex-col items-center justify-between z-50 bg-secondColor">
        <div className="ease-in duration-500 bg-secondColor w-full sm:w-1/4 sm:h-auto h-1/2 opacity-0 sm:opacity-100" id="logoFlex" onClick={changeOpen}>
          <Image
            src={logo}
            alt="Jorge Adriano"
            width={112}
            height={112}
          />
        </div>
        <nav id="itemNavFlex" className="ease-in duration-500 bg-secondColor sm:bg-bodyColor text-center sm:border-0 border-t-8 border-double border-textColor w-full sm:text-2xl flex sm:flex-row flex-col justify-around sm:h-auto h-0">
          <Link href="/">
            <a>Get Started</a>
          </Link>
          <Link href="/">
            <a>Dictionary</a>
          </Link>
          <Link href="/advice/Advice">
            <a>Advices</a>
          </Link>
          <Link href="/">
            <a>Donations</a>
          </Link>
          <Link href="https://jorgeadriano.com">
            <a>Me</a>
          </Link>
        </nav>
      </header>
    </>
    )
}

export default Navbar
