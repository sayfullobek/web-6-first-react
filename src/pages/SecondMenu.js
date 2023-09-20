import { Link } from "react-router-dom"
import { NavBar } from "../component/NavBar"

export const SecondMenu = ()=>{
    return(
        <div>
            ikkinchi menu
            <a href="http://localhost:3000/">birinchi menuga o'tish</a>
            <br/>
            <Link className="btn btn-primary" to={"/"}>birinchi menuga link orqali o'tish</Link>
        </div>
    )
}