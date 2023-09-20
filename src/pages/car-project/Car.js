import { Link } from "react-router-dom"
import { carList } from "./CarList"
import { useState } from "react"

export const Car = () => {
    const [search, setSearch] = useState('')
    const filter = carList.filter((item)=>item.name.toLowerCase().includes(search.toLocaleLowerCase()))
    return(
        <div>
            <h1 className="text-center text-primary">Mashinalar bo'limi</h1> 
            <div className="w-100 d-flex align-items-center justify-content-end">
                <input type={"search"} value={search} onChange={e=>setSearch(e.target.value)} className="form-control w-25" placeholder="Qidirish..."/>   
            </div>     
            <div className="w-100 mt-4">
                {carList.length===0?(
                    <h1 className="text-danger text-center">Hozircha Mashinalar mavjud emas...</h1>
                ):(
                    search.length===0?(
                        <GetCars carList={carList}/>
                    ):(
                        filter.length===0?(
                            <h1 className="text-danger text-center">Qidiriuv natijasida mashina topilmadi...</h1>
                        ):(
                            <GetCars carList={filter}/>
                        )
                    )
                )}
            </div>
        </div>
    )
}

const GetCars = ({carList}) => {
    return(
        <div class="row row-cols-1 row-cols-md-2 g-4">
                {carList.map(item=>(
                    <div class="col">
                        <div class="card">
                            <img src={item.img} style={{height:'350px'}} class="card-img-top" alt={item.name} />
                            <div class="card-body">
                                <h5 class="card-title">{item.name}</h5>
                                <p class="card-text"><span className="text-primary fw-bold">mashina haqida : </span>{item.description}</p>
                                <p class="card-text"><span className="text-primary fw-bold">narxi : </span>{item.price}$</p>
                                <p class="card-text"><span className="text-primary fw-bold">probeg : </span>{item.probeg}km</p>
                                <p class="card-text"><span className="text-primary fw-bold">rangi : </span>{item.color}</p>
                                <Link className="btn btn-primary" to={"/car/"+item.name}>Batafsil</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    )
}