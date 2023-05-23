import { AiOutlineSearch } from "react-icons/ai"
import { BsThreeDotsVertical } from "react-icons/bs"
import logo from '../images/logo.png';

export default function Header() {
    return (
        <div className="flex w-full justify-center">
            <div className="flex w-full justify-between bg-stone-900 px-4 py-4 items-center">
                <AiOutlineSearch color="#ffffff" fontSize={"2rem"} />
                <img src={logo} alt="Minha Imagem" />
                <BsThreeDotsVertical color="#ffffff" fontSize={"1.5rem"} />
            </div>
        </div>
    )
}