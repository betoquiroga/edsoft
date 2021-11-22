import Link from "next/link"
import Image from "next/image"
import MainMenu from "./MainMenu"

const Header = () => {
  return (
    <header className="main-header">
      <div className="content-wrapper">
        <Link href="/">
          <a>
            <Image src="/images/logo.svg" alt="Logo EDsoft" width={136} height={32} />
          </a>
        </Link>
        <span id="open-menu-button" className="jam jam-menu"></span>
        <MainMenu />
      </div>
    </header>
  )
}

export default Header