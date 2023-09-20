import {Link} from 'react-router-dom'
import programm from '../assets/Java_v0.exe'

export const Menu = () => {
    return(
        <div>
            salom menu
            <a href="http://localhost:3000/second">ikkinchi menuga o'tish</a>
            <br/>
            <Link className='btn btn-primary' to={"/second"}>ikkinchi menuga link orqali o'tish</Link>
            <a href={programm} className='btn btn-success'>Gitani yuklab olish</a>
        </div>
    )
}