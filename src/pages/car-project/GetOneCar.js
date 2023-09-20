import { Link, useParams } from "react-router-dom"
import { carList } from "./CarList"
import { useEffect, useState } from "react"

export const GetOneCars = () => {
    const param = useParams().name
    const [car, setCar] = useState({})
    
    useEffect(()=>{
        carList.map(item=>{
            if (item.name===param){
                setCar(item)
            }
        })
    }, [])
    return(
        <div>
            <Link className="btn btn-primary mb-3" to={"/car"}>Orqaga</Link>
            <div class="card text-center">
  <div class="card-header">
    <h1>{car.name}</h1>
  </div>
  <div class="card-body">
    <img src={car.img} width={"50%"} height={"350px"}/>
    <h5 class="card-title">{car.price}$</h5>
    <h5 class="card-text">{car.description}</h5>
    <h5 class="card-text">{car.probeg}km</h5>
  </div>
  <div class="card-footer text-body-secondary">
    2 days ago
  </div>
</div>
        </div>
    )
}