
import Link from "next/link";

interface menuProps {
    op1: string;
    op2: string;
    op3: string;
    op4: string;

}

const Menu = ({op1,op2,op3,op4}: menuProps) => {
    return(
        <>
        <header>
            <nav>
                <Link className="" href={"/"}>{op1}</Link>
                <Link className="" href={"/hookPage"}>{op2}</Link>
                <Link className="" href={"/severSide"}>{op3}</Link>
                <Link className="" href={"/axiosPage"}>{op4}</Link>
            </nav>
        </header>
        </>
    )
}

export default Menu