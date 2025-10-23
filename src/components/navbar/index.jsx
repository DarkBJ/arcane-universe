import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="w-full h-auto flex items-center sm:flex-col md:flex-row flex-wrap">
            <div className="flex flex-1">
                <Link to="/">
                    <img className="object- min-w-25 w-40" src="/src/assets/navbar/Arcane-Logo-nav.png" alt="###" />                    
                </Link>
            </div>

            <div className="flex-1 flex justify-end">
                <nav className="sm:hidden md:flex">
                    <ul className="flex gap-8 h-full ">
                        <li>
                            <Link className="text-white font-bold tracking-wider hover:text-amber-300 duration-300 hover:text-[1.03em] " to="/">
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link className="text-white font-bold tracking-wider hover:text-amber-300 duration-300" to="/sobre">
                                SOBRE
                            </Link>
                        </li>
                        <li>
                            <Link className="text-white font-bold tracking-wider hover:text-amber-300 duration-300" to="/mapa">
                                MAPA
                            </Link>
                        </li>
                        <li>
                            <Link className="text-white font-bold tracking-wider hover:text-amber-300 duration-300" to="/personagens">
                                PERSONAGENS
                            </Link>
                        </li>
                        <li>
                            <Link className="text-white font-bold tracking-wider hover:text-amber-300 duration-300" to="/desenvolvedor">
                                DESENVOLVEDOR
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
