
import Link from "next/link";

interface menuProps {
    op1: string;
    op2: string;
    op3: string;
    op4: string;

}

const Menu = ({op1, op2, op3, op4}: menuProps) => {
    return(
        <>
        <header> 
            <nav className="flex gap-2 bg-neutral-950 text-white ">
                <Link className="font-black " href={"/"}>{op1}</Link>
                <Link className="font-black" href={"/hookPage"}>{op2}</Link>
                <Link className="font-black" href={"/severSide"}>{op3}</Link>
                <Link className="font-black" href={"/axiosPage"}>{op4}</Link>
            </nav>
        </header>
        </>
    )
}

export default Menu