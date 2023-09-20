import { useLocation, useParams } from "react-router-dom"
import { toast } from "react-toastify"

export const UseFunctions = () => {
    const location = useLocation()
    const salomOpen = () => {

        // console.log(location);
        // setTimeout(()=>{
        //     toast.success("salom")
        // }, 3000)
    }
    return(
        <div>
            <button className="btn btn-success" onClick={()=>salomOpen()}>salom</button>
        </div>
    )
}