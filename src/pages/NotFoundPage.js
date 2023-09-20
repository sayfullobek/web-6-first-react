import { Link } from "react-router-dom"

export const NotFoundPage = () => {
    return(
        <h1 className="text-center text-danger">
            this page 404 not found
            <Link to={"/"} className="btn btn-primary">Asosiy menyuga qaytish</Link>
        </h1>
    ) 
}