import Link from "next/link"

const MainMenu = () => {
  return (
    <nav id="main-menu" className="main-menu">
      <span id="close-menu-button" className="jam jam-close"></span>
      <ul>
        <li>
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </li>
        <li>
          <Link href="/quienes-somos">
            <a>¿Quiénes somos?</a>
           </Link>
        </li>
        <li>
          <Link href="/proyectos">
            <a>Proyectos</a>
           </Link>
        </li>
        <li>
          <Link href="/contacto">
            <a>Contacto</a>
           </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainMenu